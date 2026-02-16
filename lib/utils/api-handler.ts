
import { NextResponse } from "next/server";
import { ZodError } from "zod";

/**
 * Standard API Response structure
 */
interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
}

/**
 * Global Error Handler for API Routes
 * centralized error handling logically
 */
export function handleApiError(error: unknown): NextResponse<ApiResponse> {
  console.error("API Error:", error);

  if (error instanceof ZodError) {
    return NextResponse.json(
      {
        success: false,
        message: "Validation failed",
        errors: error.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
      { status: 400 }
    );
  }

  if (error instanceof Error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 } // Or determine status based on error type
    );
  }

  return NextResponse.json(
    {
      success: false,
      message: "An unexpected error occurred.",
    },
    { status: 500 }
  );
}

/**
 * Global Success Handler
 */
export function handleApiSuccess<T>(data: T, message: string = "Success", status: number = 200): NextResponse<ApiResponse<T>> {
  return NextResponse.json(
    {
      success: true,
      message,
      data,
    },
    { status }
  );
}
