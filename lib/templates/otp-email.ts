import { EmailLayout } from "@/lib/templates/layout";

export const OtpEmailTemplate = (otp: string): string => {
  const content = `
      <h2>Email Verification</h2>
      <p style="margin-bottom: 24px;">Thank you for initiating a request with Bayshore Innovation Lab. Please use the verification code below to complete your process.</p>
      
      <div style="
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 4px;
        color: #06b6d4;
        background-color: #ecfeff;
        padding: 15px 30px;
        border-radius: 8px;
        display: inline-block;
        margin: 20px 0;
        border: 1px dashed #06b6d4;
      ">${otp}</div>
      
      <p style="font-size: 14px; color: #6b7280; margin-top: 24px;">This code will expire in 10 minutes. If you did not request this, please ignore this email.</p>
  `;

  return EmailLayout({
    title: "Verify Your Email",
    content
  });
};
