
"use client";

import React, { useState } from "react";
// @ts-ignore - Assuming Button exists at this path from previous context
import { Button } from "@/components/ui/Button";
import { figmaColors } from "@/tokens/figma-design";

// --- Enterprise Configuration (Shared Pattern) ---
const BAYSHORE_API_BASE_URL = process.env.NEXT_PUBLIC_BAYSHORE_API_URL;
const BAYSHORE_API_KEY = process.env.NEXT_PUBLIC_BAYSHORE_API_KEY;

if (!BAYSHORE_API_BASE_URL) {
  console.error("CRITICAL: NEXT_PUBLIC_BAYSHORE_API_URL is missing in NewsletterForm.");
}

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus("loading");
    setMessage("");

    if (!BAYSHORE_API_BASE_URL) {
        setStatus("error");
        setMessage("System Error: API URL missing");
        return;
    }

    try {
      const headers: HeadersInit = { "Content-Type": "application/json" };
      if (BAYSHORE_API_KEY) headers["x-api-key"] = BAYSHORE_API_KEY;

      const res = await fetch(`${BAYSHORE_API_BASE_URL}/api/newsLetter`, {
        method: "POST",
        headers,
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 409) {
            throw new Error("You are already subscribed!");
        }
        throw new Error(data.message || "Failed to subscribe");
      }

      setStatus("success");
      setMessage(data.message || "Successfully subscribed!");
      setEmail(""); // Clear input on success
      
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "An error occurred. Please try again.");
    } finally {
        // If success, keep success state, otherwise idle
        if (status !== "success") {
             // We don't reset to idle immediately if error to show the message
        }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col w-full">
      <div className="flex flex-col sm:flex-row gap-[10px] mb-2 w-full">
        <input 
          type="email" 
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading" || status === "success"}
          required
          style={{
            flex: 1,
            padding: "10px 15px",
            borderRadius: "8px",
            border: `1px solid ${status === "error" ? "red" : figmaColors.borderLight}`,
            fontSize: "14px",
            outline: "none",
            backgroundColor: status === "success" ? "#f0fff4" : "white"
          }}
        />
        <Button 
          // @ts-ignore
          type="submit" 
          size="sm" 
          disabled={status === "loading" || status === "success"}
          style={{ 
            backgroundColor: status === "success" ? "#38a169" : figmaColors.accentCyan, 
            color: "white",
            opacity: status === "loading" ? 0.7 : 1,
            cursor: status === "success" ? "default" : "pointer"
          }}
        >
          {status === "loading" ? "..." : status === "success" ? "Subscribed" : "Subscribe"}
        </Button>
      </div>
      
      {message && (
        <span style={{ 
          fontSize: "12px", 
          color: status === "error" ? "red" : status === "success" ? "#38a169" : "inherit",
          marginTop: "4px"
        }}>
          {message}
        </span>
      )}
    </form>
  );
};
