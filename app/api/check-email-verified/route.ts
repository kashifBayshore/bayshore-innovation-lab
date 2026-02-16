
import { NextRequest } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/contact.model";
import { handleApiError, handleApiSuccess } from "@/lib/utils/api-handler";

const checkEmailSchema = z.object({
  email: z.string().email(),
});

/**
 * Checks if the email is already verified.
 * POST /api/check-email-verified
 * Payload: { email: string }
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = checkEmailSchema.parse(body);

    await dbConnect();

    // Check if any contact with this email is verified
    const existingContact = await Contact.findOne({ email, isVerified: true });

    return handleApiSuccess({ isVerified: !!existingContact });
  } catch (error) {
    return handleApiError(error);
  }
}
