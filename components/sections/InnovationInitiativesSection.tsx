"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  figmaColors,
  figmaTypography,
  figmaSpacing,
} from "@/tokens/figma-design";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";

const initiatives = [
  {
    title: "Rapid Prototyping",
    description:
      "Fast-track development of proof-of-concepts and MVPs to validate innovative ideas and bring them to market quickly.",
  },
  {
    title: "Open Source Contributions",
    description:
      "Contributing to open-source projects and building community-driven solutions that advance the field of AI and software development.",
  },
  {
    title: "Industry Partnerships",
    description:
      "Collaborating with academic institutions, research organizations, and industry leaders to drive innovation forward.",
  },
  {
    title: "Hackathons & Innovation Challenges",
    description:
      "Organizing and participating in hackathons to foster creativity, solve real-world problems, and discover emerging talent.",
  },
];

const InnovationInitiativesSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % initiatives.length);
    }, 2500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  return (
    <Section
      background={figmaColors.backgroundWhite}
      noPadding
      style={{ position: "relative", overflow: "visible", padding: "20px 0" }}
    >
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
        {/* Left Side - Image Container */}
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
              height: "clamp(300px, 40vw, 600px)",
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

        {/* Right Side - Content Container */}
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
          {/* Unified Content Block */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "40px",
              alignItems: "center",
              textAlign: "center",
              maxWidth: "600px",
              width: "100%",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
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

            {/* Carousel Content */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "180px", // Fixed height
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                perspective: "1000px", // Adds 3D depth for the flip
              }}
            >
              {initiatives.map((item, index) => {
                const isActive = activeIndex === index;
                // Determine if this item is "next" (coming in) or "previous" (going out) 
                // simplifies to a consistent "Rolodex" feel where items flip up/down
                
                return (
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      top: 0,
                      width: "100%",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: "16px",
                      opacity: isActive ? 1 : 0,
                      // Rolodex / 3D Flip Effect
                      // Active: Flat and clear
                      // Inactive: Rotated down and pushed back/down
                      transform: isActive
                        ? "rotateX(0deg) translateY(0) scale(1)"
                        : "rotateX(-45deg) translateY(40px) scale(0.9)",
                      pointerEvents: isActive ? "auto" : "none",
                      transition:
                        "opacity 0.5s ease-in-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)", // Faster flip
                      transformOrigin: "center top", // Pivots from the top
                      backfaceVisibility: "hidden", // Clean 3D rendering
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: figmaTypography.fontFamily.openSans.join(", "),
                        fontSize: "28px",
                        fontWeight: figmaTypography.fontWeight.bold,
                        color: figmaColors.textPrimary,
                        margin: 0,
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: figmaTypography.fontFamily.openSans.join(", "),
                        fontSize: "18px",
                        lineHeight: "1.6",
                        color: figmaColors.textSecondary,
                        margin: 0,
                        maxWidth: "540px",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Indicators */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                marginTop: "10px",
              }}
            >
              {initiatives.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  style={{
                    width: activeIndex === index ? "32px" : "10px",
                    height: "10px",
                    borderRadius: "5px",
                    backgroundColor:
                      activeIndex === index
                        ? figmaColors.accentCyan
                        : "#E3E3E3",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default InnovationInitiativesSection;
