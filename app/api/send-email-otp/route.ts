
import { NextRequest } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/contact.model";
import { handleApiError, handleApiSuccess } from "@/lib/utils/api-handler";
import { sendEmail } from "@/lib/utils/send-email";
import { OtpEmailTemplate } from "@/lib/templates/otp-email";

const sendOtpSchema = z.object({
  email: z.string().email(),
});

/**
 * Sends an email OTP to the user.
 * POST /api/send-email-otp
 * Payload: { email: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = sendOtpSchema.parse(body);

    await dbConnect();

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes from now

    // Upsert contact: Set OTP/Expires, Reset Verified status
    await Contact.findOneAndUpdate(
      { email },
      { 
        $set: {
          otp,
          otpExpires,
          isVerified: false, 
        },
        $setOnInsert: {
          name: "Verify Pending",
          message: "Email Verification Request",
        }
      },
      { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
    );

    // Send Email
    const emailHtml = OtpEmailTemplate(otp);

    await sendEmail({
      to: email,
      subject: "Your Bayshore Verification Code",
      text: `Your verification code is: ${otp}`, // Fallback text
      html: emailHtml,
    });

    return handleApiSuccess({ message: "OTP sent successfully" });
  } catch (error) {
    return handleApiError(error);
  }
}
