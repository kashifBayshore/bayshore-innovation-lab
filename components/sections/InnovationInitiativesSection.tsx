import React from "react";
import Image from "next/image";
import {
  figmaColors,
  figmaTypography,
  figmaSpacing,
} from "@/tokens/figma-design";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

const InnovationInitiativesSection: React.FC = () => {
  return (
    <Section background={figmaColors.backgroundWhite} size="sm" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          position: "relative",
          zIndex: 1,
          gap: "40px",
          minHeight: "400px",
        }}
        className="flex-col md:flex-row items-center"
      >
        {/* Left Side - Image Container (Original Place) */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
          }}
          className="order-2 md:order-1"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "388px",
              height: "500px", 
              maxHeight: "60vh",
            }}
          >
            <Image
              src="/Group 408.svg"
              alt="Innovation Graphic"
              fill
              style={{ objectFit: "contain", objectPosition: "left center" }}
              unoptimized
            />
          </div>
        </div>

        {/* Right Side - Content Container (Centered & Middle) */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center", // Vertical centering within the flex item
            alignItems: "center", // Horizontal centering within the flex item
            minHeight: "500px",
            zIndex: 10,
          }}
          className="order-1 md:order-2 px-4 md:px-0" // Removed md:px-10 for cleaner centering
        >
          {/* Unified Content Block - Precisely Centered */}
          <div 
            style={{ 
              display: "flex", 
              flexDirection: "column", 
              gap: "32px", // Increased gap to match Figma feel
              alignItems: "center",
              textAlign: "center",
              maxWidth: "600px" // Bound the content width
            }}
          >
            {/* Main Heading */}
            <Heading
              level={2}
              gradient
              centered
              style={{
                fontSize: "clamp(32px, 4vw, 56px)",
                lineHeight: "1.1",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              Innovation Initiatives
            </Heading>

            {/* Feature Content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
              <h3
                style={{
                  fontFamily: figmaTypography.fontFamily.openSans.join(", "),
                  fontSize: "24px",
                  fontWeight: figmaTypography.fontWeight.bold,
                  color: figmaColors.textPrimary,
                  margin: 0,
                }}
              >
                Rapid Prototyping
              </h3>
              <p
                style={{
                  fontFamily: figmaTypography.fontFamily.openSans.join(", "),
                  fontSize: "18px",
                  lineHeight: "1.6",
                  color: figmaColors.textSecondary,
                  margin: 0,
                  maxWidth: "500px",
                }}
              >
                Fast-track development of proof-of-concepts and MVPs to validate
                innovative ideas and bring them to market quickly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InnovationInitiativesSection;
