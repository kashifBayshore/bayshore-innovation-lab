
import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas/contact.validation";
import { ZodError } from "zod";
import dbConnect from "@/lib/mongodb";
import Contact from "@/lib/models/contact.model";

/**
 * Handles POST requests for the contact form.
 * 
 * Flow:
 * 1. Parse JSON body.
 * 2. Validate using Zod schema.
 * 3. Save to Database using Mongoose.
 * 4. Return success response.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate the request body against the schema
    const validatedData = contactSchema.parse(body);

    // Connect to the database
    await dbConnect();

    // Create a new contact entry
    const newContact = await Contact.create(validatedData);
    
    console.log("Contact form submitted and saved:", newContact);

    return NextResponse.json(
      { message: "Thank you! We have received your message and will get back to you shortly." },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      // Return validation errors
      const formattedErrors = error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }));
      
      return NextResponse.json(
        { message: "Validation failed", errors: formattedErrors },
        { status: 400 }
      );
    }

    console.error("Error processing contact form:", error);
    
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
