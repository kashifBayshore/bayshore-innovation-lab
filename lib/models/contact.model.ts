
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
  otp?: string;
  otpExpires?: Date;
  isVerified: boolean;
}

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
      // unique: true, // We might not want unique here if users can submit multiple inquiries, 
      // but for email verification we usually verify the *email*. 
      // If verify logic is separate from contact logic, we might need a separate User/Verification model.
      // But user requested "database record", implying this model.
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
    otp: {
      type: String,
      select: false, // Don't return OTP by default
    },
    otpExpires: {
      type: Date,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Prevent overwriting the model if it's already compiled (Next.js hot reload fix)
const Contact: Model<IContact> =
  mongoose.models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
