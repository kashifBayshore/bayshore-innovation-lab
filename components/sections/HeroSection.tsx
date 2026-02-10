import React from "react";
import Image from "next/image";
import {
  figmaColors,
  figmaTypography,
  figmaSpacing,
} from "@/tokens/figma-design";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        backgroundColor: figmaColors.backgroundPrimary,
        minHeight: "750px", // Slightly reduced for better fit
        overflow: "hidden",
        display: "flex",
        flexDirection: "column", // Stack vertically for top-down flow
      }}
    >
      {/* Background for entire section - keeping it subtle */}
      <div
        style={{
          position: "absolute",
          right: "-10%",
          top: "-10%",
          width: "400px",
          height: "400px",
          zIndex: 0,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(78,194,193,0.05) 0%, rgba(58,180,205,0.02) 100%)",
        }}
      />

      {/* Main Content Container */}
      <div
        style={{
          width: "100%",
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "50px 20px 60px", 
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr", // Increased space for left content
            gap: "40px",
            alignItems: "flex-start", // Align visual with logo at the top
          }}
          className="grid-cols-1 md:grid-cols-2 text-center md:text-left"
        >
          {/* Left Content Column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {/* Logo/Header Area */}
            <div 
                style={{ 
                    width: "100%",
                    display: "flex",
                }}
                className="justify-center md:justify-start"
            >
             <div style={{ 
                position: "relative", 
                width: "clamp(140px, 15vw, 180px)", 
                aspectRatio: "205/72", // Maintains the original logo proportion
             }}>
                <Image
                    src="/bayshore-logo.png"
                    alt="Bayshore Logo"
                    fill
                    style={{ objectFit: "contain", objectPosition: "left" }}
                    priority
                />
             </div>
            </div>

            {/* Heading and Body */}
            <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "20px" }}>
                <h1
                  style={{
                    fontFamily: figmaTypography.fontFamily.openSans.join(", "),
                    fontWeight: figmaTypography.fontWeight.bold,
                    fontSize: "clamp(32px, 4.5vw, 56px)", // Slightly reduced for single line stability
                    lineHeight: "1.2",
                    background: figmaColors.primaryGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    margin: 0,
                    whiteSpace: "nowrap", // Force single line
                  }}
                  className="whitespace-normal md:whitespace-nowrap"
                >
                  Bayshore Innovation Lab
                </h1>

                <div
                  style={{
                    fontFamily: figmaTypography.fontFamily.openSans.join(", "),
                    fontSize: figmaTypography.fontSize.lg,
                    fontWeight: figmaTypography.fontWeight.normal,
                    lineHeight: "1.5",
                    color: figmaColors.textPrimary,
                  }}
                >
                  <p style={{ margin: 0 }}>
                    Where cutting-edge research meets practical innovation.
                  </p>
                  <p style={{ margin: 0 }}>
                    Exploring the frontiers of AI and Digital Transformation.
                  </p>
                </div>

                <div style={{ marginTop: "10px" }}>
                    <Button 
                        size="lg"
                        style={{
                            background: figmaColors.buttonGradient,
                            color: "white",
                            padding: "0 48px", 
                            height: "56px",
                            borderRadius: "8px",
                            fontSize: "18px",
                            fontWeight: 600,
                            fontStyle: "italic"
                        }}
                    >
                        Get in Touch
                    </Button>
                </div>
            </div>
          </div>

          {/* Right Content - Visual - Group 421.svg with Ellipse 2 (2).svg Background */}
          <div
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              maxWidth: "600px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "80px", // Added 80px top spacing as requested
            }}
          >
            {/* Background Ellipse - Centered behind the visual */}
             <div
                style={{
                    position: "absolute",
                    width: "180%", // Larger than visual to act as halo
                    height: "180%",
                    zIndex: 0,
                    opacity: 0.8,
                }}
            >
                <Image 
                    src="/Ellipse 2 (2).svg" 
                    alt="" 
                    fill
                    style={{ objectFit: "contain" }}
                    unoptimized 
                />
            </div>

            {/* Main Visual - Group 421.svg */}
            <div style={{ 
                position: "relative", 
                width: "100%", 
                height: "100%", 
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Image
                src="/Group 421.svg"
                alt="Innovation Visual"
                width={430}
                height={588}
                style={{ objectFit: "contain", maxWidth: "100%", height: "auto" }}
                unoptimized
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
