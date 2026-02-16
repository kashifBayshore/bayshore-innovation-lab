
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface INewsletter extends Document {
  email: string;
  isSubscribed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const NewsletterSchema: Schema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email address.'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    isSubscribed: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent overwriting the model if it's already compiled (Next.js hot reload fix)
const Newsletter: Model<INewsletter> =
  mongoose.models.Newsletter || mongoose.model<INewsletter>('Newsletter', NewsletterSchema);

export default Newsletter;
