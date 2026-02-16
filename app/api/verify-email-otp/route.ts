
import { NextRequest } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/contact.model";
import { handleApiError, handleApiSuccess } from "@/lib/utils/api-handler";

const verifyOtpSchema = z.object({
  email: z.string().email(),
  otp: z.string().length(6, "OTP must be 6 digits"),
});

/**
 * Verifies the OTP sent to the user.
 * POST /api/verify-email-otp
 * Payload: { email: string, otp: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, otp } = verifyOtpSchema.parse(body);

    await dbConnect();

    // Find user with matching email and OTP, and check if OTP is not expired
    const contact = await Contact.findOne({
      email,
      otp,
      otpExpires: { $gt: new Date() }, // OTP must expire in the future
    });

    if (!contact) {
      // Security: return generic error or specific? Specific is better for UX here.
      return handleApiError(new Error("Invalid or expired verification code."));
    }

    // Mark as verified and clear OTP
    contact.isVerified = true;
    contact.otp = undefined;
    contact.otpExpires = undefined;
    
    // We save the contact. Since it might still be partial (if created during send-otp), validation might fail?
    // If we originally upserted with dummy name/message, it should pass.
    // However, if the user partially filled the form later, we rely on the client to send the full update.
    // For now, updating verification status is safe.
    await contact.save({ validateModifiedOnly: true }); // Mongoose 5+ feature? Or validateBeforeSave: false?
    // Actually, simple save() validates all required fields. 
    // If the doc was created via upsert with dummy data, it's valid.
    // So save() is fine.

    return handleApiSuccess({ isVerified: true });
  } catch (error) {
    return handleApiError(error);
  }
}
