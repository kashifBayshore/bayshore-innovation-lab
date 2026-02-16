
import nodemailer from "nodemailer";


interface SendEmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_SERVER,
  port: Number(process.env.MAIL_PORT) || 587,
  secure: false, 
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
    rejectUnauthorized: false
  }
});

async function getAzureAccessToken() {
  const tenantId = process.env.AZURE_APP_TENANT_ID;
  const clientId = process.env.AZURE_APP_CLIENT_ID;
  const clientSecret = process.env.AZURE_APP_CLIENT_SECRET;

  if (!tenantId || !clientId || !clientSecret) {
    throw new Error("Missing Azure App credentials");
  }

  const tokenUrl = `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`;
  const params = new URLSearchParams({
    grant_type: "client_credentials",
    client_id: clientId,
    client_secret: clientSecret,
    scope: "https://graph.microsoft.com/.default",
  });

  const response = await fetch(tokenUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: params.toString(),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to get Azure access token: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function sendViaAzureGraph({ to, subject, text, html }: SendEmailOptions) {
  const mailUser = process.env.MAIL_USER;
  if (!mailUser) {
    throw new Error("MAIL_USER is not defined");
  }

  const accessToken = await getAzureAccessToken();
  const sendMailUrl = `https://graph.microsoft.com/v1.0/users/${mailUser}/sendMail`;

  const emailData = {
    message: {
      subject: subject,
      body: {
        contentType: html ? "HTML" : "Text",
        content: html || text || "",
      },
      toRecipients: [
        {
          emailAddress: {
            address: to,
          },
        },
      ],
    },
    saveToSentItems: "false",
  };

  const response = await fetch(sendMailUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Failed to send email via Azure Graph API: ${response.status} ${errorText} - User: ${mailUser}`);
  }

  console.log("Email sent successfully via Azure Graph API to", to);
  return true;
}

/**
 * Utility to send emails using Azure Graph API (preferred) or Nodemailer (fallback).
 */
export async function sendEmail(options: SendEmailOptions) {
  // Try Azure Graph API if credentials exist
  if (process.env.AZURE_APP_CLIENT_ID && process.env.AZURE_APP_CLIENT_SECRET && process.env.AZURE_APP_TENANT_ID) {
    try {
      return await sendViaAzureGraph(options);
    } catch (error) {
      console.error("Failed to send via Azure Graph API, falling back to SMTP:", error);
      // Fallback to Nodemailer below
    }
  }

  // Nodemailer fallback
  try {
    const mailOptions = {
        from: `Bayshore Innovation Lab <${process.env.MAIL_USER}>`,
        to: options.to,
        subject: options.subject,
        text: options.text || "Bayshore Innovation Lab Notification",
        html: options.html || options.text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent via SMTP: %s", info.messageId);
    return true;
  } catch (error) {
    console.error("Error sending email via SMTP:", error);
    throw error;
  }
}
