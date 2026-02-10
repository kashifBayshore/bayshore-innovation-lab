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
    <Section background={figmaColors.backgroundWhite} noPadding style={{ position: "relative", overflow: "visible", padding: "20px 0" }}>
      <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px", 
          display: "flex",
          position: "relative",
          zIndex: 1,
          gap: "40px",
        }}
        className="flex-col lg:flex-row items-center min-h-[450px]"

      >

        {/* Left Side - Image Container (Original Place) */}
        <div
          style={{
            flex: "1",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            position: "relative",
          }}
          className="order-2 lg:order-1 h-[300px] lg:h-full"

        >

          <div
            style={{
              position: "absolute",
              width: "100%", 
              maxWidth: "650px",
              height: "clamp(300px, 40vw, 600px)", // Responsive height but maintains original 600px cap
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
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

        {/* Right Side - Content Container (Centered Globally on Desktop) */}
        <div
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 10,
          }}
          className="order-1 lg:order-2 px-4 lg:px-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:w-full h-auto lg:h-full py-10 lg:py-0"

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
                fontSize: "clamp(28px, 4vw, 56px)",
                lineHeight: "1.1",
                margin: 0,
              }}
              className="whitespace-normal lg:whitespace-nowrap"
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
                  maxWidth: "850px",
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
