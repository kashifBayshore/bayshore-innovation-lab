import React from "react";
import Image from "next/image";
import { Text } from "@/components/ui/Text";
import { Heading } from "@/components/ui/Heading";
import { figmaColors, figmaSpacing } from "@/tokens/figma-design";
import { Button } from "@/components/ui/Button";

export const Footer: React.FC = () => {
  return (
    <footer
      style={{
        backgroundColor: figmaColors.backgroundWhite,
        paddingTop: "80px",
        borderTop: `1px solid ${figmaColors.borderLight}`,
      }}
    >
      <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px",
          display: "grid",
          gap: "40px",
          marginBottom: "80px",
        }}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" 
      >

        {/* Column 1: Logo & Desc */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }} className="items-center md:items-start text-center md:text-left">
          <div 
            style={{ 
                position: "relative", 
                width: "clamp(140px, 15vw, 180px)", 
                height: "60px" 
            }}
          >
            <Image
              src="/bayshore-logo.png"
              alt="Bayshore Intelligence Solutions"
              fill
              style={{ objectFit: "contain", objectPosition: "inherit" }}
              className="md:object-left"
            />
          </div>
          <Text size="sm" color="secondary" style={{ lineHeight: "1.6" }}>
            Bayshore values great work, happy clients, equal jobs, team spirit,
            new ideas, work-life balance, and putting people first.
          </Text>
        </div>


        {/* Column 2: India Office */}
        <div className="text-center md:text-left">
          <Heading level={4} style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px", textTransform: "uppercase" }}>
            INDIA OFFICE
          </Heading>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Text size="sm" color="secondary" style={{ lineHeight: "1.6" }}>
              PS Srijan Corporate Park,<br />
              Salt Lake City, Sector V,<br />
              Kolkata - 700091, India
            </Text>
            <Text size="sm" color="secondary">
              sales@bayshoreintel.com
            </Text>
            <Text size="sm" color="secondary">
              +91 3346033529 / +91 9674517449
            </Text>
          </div>
        </div>


        {/* Column 3: USA Office */}
        <div className="text-center md:text-left">
          <Heading level={4} style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px", textTransform: "uppercase" }}>
            USA OFFICE
          </Heading>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <Text size="sm" color="secondary" style={{ lineHeight: "1.6" }}>
              6200 Village Parkway, STE 200<br />
              Dublin, CA - 94568, USA
            </Text>
            <Text size="sm" color="secondary">
              sales@bayshoreintel.com
            </Text>
            <Text size="sm" color="secondary">
              +1 (925) 888-6555
            </Text>
          </div>
        </div>


        <div className="flex flex-col items-center md:items-start">
          <Heading level={4} style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px", textTransform: "uppercase" }}>
            JOIN OUR NEWSLETTER
          </Heading>
          <Text size="sm" color="secondary" style={{ marginBottom: "10px" }}>
            Your Email
          </Text>
          <div className="flex flex-col sm:flex-row gap-[10px] mb-5 w-full">
             <input 
                type="email" 
                placeholder="Enter Your Email"
                style={{
                    flex: 1,
                    padding: "10px 15px",
                    borderRadius: "8px",
                    border: `1px solid ${figmaColors.borderLight}`,
                    fontSize: "14px",
                    outline: "none"
                }}
             />
             <Button size="sm" style={{ backgroundColor: figmaColors.accentCyan, color: "white" }}>
                Subscribe
             </Button>
          </div>
          
          {/* Social Icons - Unified 24px spacing */}
          <div style={{ display: "flex", gap: "24px" }} className="justify-center md:justify-start">
             {/* Facebook */}
             <a href="#" style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
             </a>
             {/* Youtube */}
             <a href="#" style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
             </a>
             {/* LinkedIn */}
             <a href="#" style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063a2.061 2.061 0 0 1-2.064 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
             </a>
             {/* X/Twitter */}
             <a href="#" style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
                </svg>
             </a>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div
        style={{
          borderTop: `1px solid ${figmaColors.borderLight}`,
          paddingTop: "20px",
          paddingBottom: "calc(20px + env(safe-area-inset-bottom, 0px))",
        }}
      >

        <div 
          style={{
             maxWidth: figmaSpacing.container.full,
             margin: "0 auto",
             padding: "0 20px",
             display: "flex",
             justifyContent: "space-between",
             alignItems: "center",
             flexWrap: "wrap",
             gap: "20px"
          }}
          className="justify-center sm:justify-between"
        >
            <Text size="xs" color="secondary">
                © Copyright 2025. All Rights Reserved.
            </Text>
            <Text size="xs" color="secondary" style={{ cursor: "pointer" }}>
                Privacy Policy
            </Text>
        </div>

      </div>
    </footer>
  );
};
