
"use client";

import React, { useState } from "react";
// @ts-ignore - Assuming Button exists at this path from previous context
import { Button } from "@/components/ui/Button";
import { figmaColors } from "@/tokens/figma-design";

export const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus("success");
      setMessage(data.message);
      // Don't clear email on success so user sees what they subscribed with, but can clear if desired.
      // Or clear it? Let's keep it but disabled.
    } catch (error: any) {
      setStatus("error");
      setMessage(error.message || "An error occurred.");
    } finally {
      if (status !== "success") {
        setStatus("idle"); 
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
