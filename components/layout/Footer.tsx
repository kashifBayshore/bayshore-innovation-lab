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
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px",
          marginBottom: "80px",
        }}
        className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4" // Tailwind responsive classes
      >
        {/* Column 1: Logo & Desc */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div style={{ position: "relative", width: "180px", height: "60px" }}>
            <Image
              src="/bayshore-logo.png" // Using the logo found in public
              alt="Bayshore Intelligence Solutions"
              fill
              style={{ objectFit: "contain", objectPosition: "left" }}
            />
          </div>
          <Text size="sm" color="secondary" style={{ lineHeight: "1.6" }}>
            Bayshore values great work, happy clients, equal jobs, team spirit,
            new ideas, work-life balance, and putting people first.
          </Text>
        </div>

        {/* Column 2: India Office */}
        <div>
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
        <div>
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

        {/* Column 4: Newsletter */}
        <div>
          <Heading level={4} style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "20px", textTransform: "uppercase" }}>
            JOIN OUR NEWSLETTER
          </Heading>
          <Text size="sm" color="secondary" style={{ marginBottom: "10px" }}>
            Your Email
          </Text>
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
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
          
          {/* Social Icons Placeholders - Using simple circles as placeholders if SVGs not available, or text */}
          <div style={{ display: "flex", gap: "10px" }}>
             {/* Facebook */}
             <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                f
             </div>
             {/* Youtube */}
             <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                y
             </div>
             {/* LinkedIn */}
             <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                in
             </div>
             {/* X/Twitter */}
             <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: `1px solid ${figmaColors.accentCyan}`, display: "flex", alignItems: "center", justifyContent: "center", color: figmaColors.accentCyan }}>
                x
             </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div
        style={{
          borderTop: `1px solid ${figmaColors.borderLight}`,
          padding: "20px 0",
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
             gap: "10px"
          }}
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
