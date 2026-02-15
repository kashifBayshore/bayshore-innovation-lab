
import mongoose, { Schema, Document, Model } from 'mongoose';

/**
 * Contact interface to define the shape of the document.
 * This should match our Zod schema structure.
 */
export interface IContact extends Document {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  createdAt: Date;
}

/**
 * Create a new Contact Schema.
 * Each field corresponds to the data we collect from the Get in Touch form.
 */
const ContactSchema: Schema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name.'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please provide an email address.'],
      trim: true,
      lowercase: true,
    },
    company: {
      type: String,
      trim: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    message: {
      type: String,
      required: [true, 'Please provide a message.'],
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

// Prevent overwriting the model if it's already compiled (Next.js hot reload fix)
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
