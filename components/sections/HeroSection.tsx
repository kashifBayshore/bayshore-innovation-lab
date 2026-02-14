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
      className="py-8 md:py-14 lg:py-16 landscape:py-6"

      style={{
        position: "relative",
        width: "100%",
        backgroundColor: figmaColors.backgroundPrimary,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
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
          padding: "0 20px", 
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
                    fontSize: "clamp(28px, 5vw, 56px)", // Slightly more aggressive reduction for very small mobiles
                    lineHeight: "1.2",
                    background: figmaColors.primaryGradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    margin: 0,
                  }}
                  className="whitespace-normal lg:whitespace-nowrap" // Allow wrap on tablet, force single line only on large screens
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
            }}
            className="pt-10 md:pt-0 landscape:pt-4"
          >

            {/* Background Ellipse - Centered behind the visual */}
             <div
                style={{
                    position: "absolute",
                    width: "180%", 
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
                width: "min(100%, 430px)", 
                height: "auto", 
                aspectRatio: "430/588",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            className="landscape:max-h-[60vh] md:landscape:max-h-none"
            >

                <Image
                src="/Group 421.svg"
                alt="Innovation Visual"
                fill
                style={{ objectFit: "contain" }}
                unoptimized
                />
            </div>
          </div>

        </div>

        {/* Social Sidebar - ALIGNED TO CONTENT RIGHT EDGE (84px offset) */}
        <div
          style={{
            position: "absolute",
            right: "6px", // Matches figmaSpacing.positioning.logoLeft for symmetry
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
            zIndex: 50,
          }}
          className="hidden xl:flex" // Only visible on large desktop
        >
          {/* Social Links */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", alignItems: "center" }}>
            <a href="https://www.facebook.com/bayshoreintel" target="_blank" rel="noopener noreferrer" style={{ color: figmaColors.accentCyan }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/channel/UC4auv0_znZ_iwpeG_6wVHzQ" target="_blank" rel="noopener noreferrer" style={{ color: figmaColors.accentCyan }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/14620370/admin/dashboard/" target="_blank" rel="noopener noreferrer" style={{ color: figmaColors.accentCyan }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063a2.061 2.061 0 0 1-2.064 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://x.com/bayshoreintel" target="_blank" rel="noopener noreferrer" style={{ color: figmaColors.accentCyan }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.933zm-1.292 19.49h2.039L6.486 3.24H4.298l13.311 17.403z"/>
              </svg>
            </a>
          </div>

          {/* Separator Line */}
          <div style={{ width: "1px", height: "60px", background: figmaColors.borderLight, opacity: 0.5 }}></div>

          {/* Mouse/Scroll Indicator */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
            <div style={{ 
              width: "24px", 
              height: "40px", 
              border: `2px solid ${figmaColors.accentCyan}`, 
              borderRadius: "12px",
              position: "relative",
              display: "flex",
              justifyContent: "center",
            }}>
              <div style={{ 
                width: "4px", 
                height: "8px", 
                backgroundColor: figmaColors.accentCyan, 
                borderRadius: "2px",
                marginTop: "8px",
                animation: "scrollAnim 1.5s infinite"
              }}></div>
            </div>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={figmaColors.accentCyan} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </div>

          {/* Animation Style */}
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes scrollAnim {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(8px); opacity: 0; }
            }
          `}} />
        </div>
      </div>
    </section>
  );
};
