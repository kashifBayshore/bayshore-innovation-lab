
import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/schemas/newsletter.validation";
import { ZodError } from "zod";
import dbConnect from "@/lib/mongodb";
import Newsletter from "@/lib/models/newsletter.model";

/**
 * Handles POST requests for newsletter subscription.
 * 
 * Flow:
 * 1. Parse JSON body.
 * 2. Validate email using Zod schema.
 * 3. Connect to Database.
 * 4. Check if email already exists.
 *    - If exists and subscribed: Return message.
 *    - If exists and unsubscribed: Resubscribe.
 * 5. Create new subscription if not exists.
 * 6. Return success response.
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validate request body
    const validatedData = newsletterSchema.parse(body);

    await dbConnect();

    // Check for existing subscription
    const existingSubscriber = await Newsletter.findOne({ email: validatedData.email });

    if (existingSubscriber) {
      if (existingSubscriber.isSubscribed) {
        return NextResponse.json(
          { message: "You are already subscribed to our newsletter." },
          { status: 409 } // Conflict
        );
      } else {
        // Resubscribe user
        existingSubscriber.isSubscribed = true;
        await existingSubscriber.save();
        
        return NextResponse.json(
          { message: "Welcome back! You have been resubscribed to our newsletter." },
          { status: 200 }
        );
      }
    }

    // Create new subscription
    await Newsletter.create({
      email: validatedData.email,
      isSubscribed: true,
    });

    return NextResponse.json(
      { message: "Thank you for subscribing to our newsletter!" },
      { status: 201 }
    );

  } catch (error) {
    if (error instanceof ZodError) {
      const formattedErrors = error.issues.map((issue) => ({
        path: issue.path.join('.'),
        message: issue.message,
      }));
      
      return NextResponse.json(
        { message: "Validation failed", errors: formattedErrors },
        { status: 400 }
      );
    }

    console.error("Error processing newsletter subscription:", error);
    
    return NextResponse.json(
      { message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
