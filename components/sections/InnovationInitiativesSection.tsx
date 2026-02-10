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
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: "40px",
          alignItems: "center", // Vertically center the graphic and text
          position: "relative",
          zIndex: 1,
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left Side Graphic - Group 408.svg */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "400px",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
          className="order-2 md:order-1"
        >
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "388px",
              height: "804px", // Full height from SVG
              maxHeight: "80vh",
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

        {/* Content Area - Right Side */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "40px",
            zIndex: 10,
          }}
          className="order-1 md:order-2 text-center md:text-left px-4 md:px-20"
        >
          {/* Main Heading */}
          <Heading
            level={2}
            gradient
            style={{
              fontSize: "clamp(32px, 4vw, 56px)",
              lineHeight: "1.2",
              margin: 0,
              whiteSpace: "nowrap", // ENSURING ONE LINE
            }}
          >
            Innovation Initiatives
          </Heading>

          {/* Feature List Container */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            {/* Rapid Prototyping */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                  maxWidth: "600px",
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
