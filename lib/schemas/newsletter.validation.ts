
import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address").trim().toLowerCase(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;
