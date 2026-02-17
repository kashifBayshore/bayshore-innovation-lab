
"use client";

import React, { useState } from "react";
import { figmaColors, figmaSpacing, figmaTypography } from "@/tokens/figma-design";
import { Button } from "@/components/ui/Button";
import { Modal } from "@/components/ui/Modal";
import { contactSchema, ContactFormData } from "@/lib/schemas/contact.validation";
import { ZodError, ZodIssue } from "zod";
import 'react-phone-number-input/style.css'
// @ts-ignore
import PhoneInput, { parsePhoneNumber, isValidPhoneNumber } from 'react-phone-number-input'

const BAYSHORE_API_BASE_URL = process.env.NEXT_PUBLIC_BAYSHORE_API_URL || "http://localhost:3001";

export const ContactForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Email Verification State
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isVerifyingEmail, setIsVerifyingEmail] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState<string | null>(null);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // If email changes, reset verification
    if (name === "email" && isEmailVerified) {
        setIsEmailVerified(false);
    }
    if (name === "email" && otpSent) {
        setOtpSent(false);
        setOtp("");
    }
  };

  const handleVerifyEmailStart = async () => {
    // Validate email format first
    const emailResult = contactSchema.pick({ email: true }).safeParse({ email: formData.email });
    if (!emailResult.success) {
        setErrors((prev) => ({ ...prev, email: emailResult.error.issues[0].message }));
        return;
    }

    setIsVerifyingEmail(true);
    setOtpError(null);

    try {
        await sendOtp();
    } catch (error: any) {
        setOtpError(error.message);
    } finally {
        setIsVerifyingEmail(false);
    }
  };

  const sendOtp = async () => {
        const sendRes = await fetch(`${BAYSHORE_API_BASE_URL}/api/send-email-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email }),
        });
        const sendData = await sendRes.json();

        if (!sendData.success) {
            throw new Error(sendData.message || "Failed to send OTP");
        }

        if (sendData.isAlreadyVerified) {
             setIsEmailVerified(true);
             setIsVerifyingEmail(false);
             return;
        }

        setOtpSent(true);
        setIsOtpModalOpen(true);
  };
  
  const handleResendOtp = async () => {
      setOtpError(null);
      setIsVerifyingEmail(true); // Reuse loading state or add specific one
      try {
          await sendOtp();
      } catch (error: any) {
          setOtpError(error.message);
      } finally {
          setIsVerifyingEmail(false);
      }
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) {
        setOtpError("Please enter a 6-digit code.");
        return;
    }
    setIsVerifyingEmail(true);
    setOtpError(null);
    try {
        const res = await fetch(`${BAYSHORE_API_BASE_URL}/api/verify-email-otp`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: formData.email, otp }),
        });
        const data = await res.json();

        if (data.success) {
            setIsEmailVerified(true);
            setOtpSent(false); 
            setIsOtpModalOpen(false); // Close modal
        } else {
            setOtpError(data.message || "Invalid Code");
        }
    } catch (error: any) {
        setOtpError(error.message);
    } finally {
        setIsVerifyingEmail(false);
    }
  };

  const validate = (): boolean => {
    try {
      contactSchema.parse(formData);
      
      // Strict Phone Validation
      if (formData.phone && !isValidPhoneNumber(formData.phone)) {
        setErrors((prev) => ({ ...prev, phone: "Invalid phone number for the selected country." }));
        return false;
      }

      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof ZodError) {
        const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.issues.forEach((err: ZodIssue) => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    // Validate Form
    if (!validate()) return;

    // Verify Email Status
    if (!isEmailVerified) {
        setSubmitError("Please verify your email address before submitting.");
        return;
    }

    setIsSubmitting(true);

    // Format phone number with dash separation: +Code-Number
    let payload = { ...formData };
    if (formData.phone) {
        try {
            const parsed = parsePhoneNumber(formData.phone);
            if (parsed) {
                payload.phone = `+${parsed.countryCallingCode}-${parsed.nationalNumber}`;
            }
        } catch (e) {
            console.error("Phone formatting error", e);
        }
    }

    try {
      // Use contactUsInTouch endpoint from Bayshore
      const response = await fetch(`${BAYSHORE_API_BASE_URL}/api/contactUsInTouch`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong.");
      }

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", company: "", phone: "", message: "" }); // Reset form
      setIsEmailVerified(false); // Reset verification for next submission
      if (onSuccess) {
        setTimeout(onSuccess, 2000); // Close modal after success message
      }
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to send message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Message Sent!</h3>
        <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly.</p>
        <Button onClick={() => setSubmitSuccess(false)} style={{ marginTop: "20px" }}>Send Another</Button>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    borderRadius: figmaSpacing.borderRadius.sm,
    border: `1px solid ${figmaColors.borderLight}`,
    outline: "none",
    fontSize: figmaTypography.fontSize.sm,
    transition: "border-color 0.2s",
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          className="focus:border-cyan-500"
          placeholder="Your full name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      {/* Email Verification Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <div className="flex gap-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ ...inputStyle, flex: 1 }}
              placeholder="you@company.com"
              disabled={isEmailVerified || isOtpModalOpen} 
            />
            
            {/* Verify Button or Status Badge */}
            {isEmailVerified ? (
                 <div className="flex items-center px-4 bg-green-100 text-green-700 rounded-md font-medium text-sm whitespace-nowrap">
                   ✓ Verified
                 </div>
            ) : (
                <Button 
                    type="button" 
                    onClick={handleVerifyEmailStart}
                    disabled={isVerifyingEmail || !formData.email}
                    variant="secondary"
                    style={{ height: "auto" }}
                >
                    {isVerifyingEmail ? "Checking..." : "Verify Email"}
                </Button>
            )}
        </div>
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        
        {/* OTP Modal */}
        <Modal
            isOpen={isOtpModalOpen}
            onClose={() => setIsOtpModalOpen(false)}
            title="Verify Your Email"
        >
            <div className="space-y-6 py-2">
                <p className="text-gray-600 text-center">
                    We've sent a 6-digit verification code to <br />
                    <span className="font-semibold text-gray-900 block mt-1 text-lg">{formData.email}</span>
                </p>
                
                <input 
                    type="text" 
                    placeholder="000000"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full p-4 border border-gray-300 rounded-lg text-center tracking-[1em] font-mono text-2xl outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all bg-gray-50 uppercase placeholder-gray-300"
                    autoFocus
                />
                
                {otpError && <p className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-md font-medium">{otpError}</p>}

                <div className="flex gap-4 pt-4">
                    <Button 
                        type="button"
                        onClick={handleResendOtp}
                        variant="secondary"
                        className="flex-1 py-3"
                        disabled={isVerifyingEmail}
                    >
                        Resend
                    </Button>
                    <Button 
                        type="button"
                        onClick={handleVerifyOtp}
                        className="flex-1 py-3"
                        disabled={isVerifyingEmail || otp.length !== 6}
                    >
                        {isVerifyingEmail ? "Verifying..." : "Verify"}
                    </Button>
                </div>
            </div>
        </Modal>
      </div>

      {/* Company & Phone (Grid) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Company name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone <span className="text-red-500">*</span></label>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            border: `1px solid ${figmaColors.borderLight}`,
            borderRadius: figmaSpacing.borderRadius.sm,
            padding: '4px 12px',
            backgroundColor: 'white',
          }}>
             <style dangerouslySetInnerHTML={{
               __html: `
                .PhoneInputCountry {
                    margin-right: 8px !important;
                    position: relative;
                }
                .PhoneInputCountry::after {
                    content: "-";
                    position: absolute;
                    right: -6px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: ${figmaColors.textSecondary};
                    font-weight: bold;
                    pointer-events: none;
                }
                .PhoneInputInput {
                    padding-left: 8px !important;
                }
               `
             }} />
             <PhoneInput
                placeholder="Enter phone number"
                value={formData.phone}
                onChange={(value: any) => {
                    setFormData((prev) => ({ ...prev, phone: value || "" }));
                    if (errors.phone) {
                        setErrors((prev) => ({ ...prev, phone: undefined }));
                    }
                }}
                defaultCountry="US"
                style={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  fontSize: figmaTypography.fontSize.sm,
                  backgroundColor: 'transparent',
                }}
                className="w-full focus:outline-none"
             />
          </div>
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className="p-3 bg-red-50 text-red-700 text-sm rounded-md border border-red-100">
          {submitError}
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          className="w-full justify-center"
          disabled={isSubmitting || !isEmailVerified} 
          style={{ 
            width: "100%", 
            background: isEmailVerified ? figmaColors.primaryGradient : figmaColors.borderLight, // Visually verify requirement
            cursor: isEmailVerified ? "pointer" : "not-allowed",
            color: isEmailVerified ? "white" : figmaColors.textMuted,
            height: "48px"
          }}
        >
          {isSubmitting ? "Sending..." : (isEmailVerified ? "Send Message" : "Verify Email to Continue")}
        </Button>
      </div>
    </form>
  );
};
