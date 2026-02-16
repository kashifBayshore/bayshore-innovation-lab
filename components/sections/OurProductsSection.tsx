import React from "react";
import Image from "next/image";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { Section } from "@/components/ui/Section";
import { figmaColors, figmaSpacing } from "@/tokens/figma-design";

// Using the identified asset from public folder
const PRODUCT_ICON = "/Mapping search.svg";

const products = [
  {
    title: "ShapeUp",
    description:
      "A modern fitness tracking app designed to help users achieve their health goals efficiently. It allows users to track their weight progress, monitor their daily calorie intake with time-wise logging, and get a personalized diet plan based on their body goals. The app provides an easy-to-use interface for maintaining daily fitness routines and improving overall lifestyle through structured nutrition guidance.",
    link: "#", // Placeholder
  },
  {
    title: "Gesture Arcade",
    description:
      "AI-powered gesture-based arcade game where players can slice and interact with flying objects using real-time finger tracking through the camera. Powered by computer vision and AI, it delivers a touch-free, immersive gaming experience with fast-paced action, smooth hand-movement controls, and engaging gameplay.",
    link: "#",
  },
  {
    title: "Bayshore Resume Builder",
    description:
      "A fully responsive, AI-powered web application that enables users to create professional, ATS-optimized resumes tailored to specific job descriptions through a guided multi-step interface with real-time previews. It features AI-driven content enhancement, multiple professionally designed templates, a centralized dashboard to manage and update resumes, high-quality PDF export, and shareable resume links, delivering a seamless end-to-end resume creation experience across desktop, tablet, and mobile devices.",
    link: "http://15.207.98.138/",
  },
  {
    title: "Mapping Research",
    description:
      "A comprehensive research platform dedicated to advanced geospatial analysis and mapping technologies. It provides tools for high-fidelity data visualization, environmental monitoring, and urban planning, enabling users to derive actionable insights from complex spatial data.",
    link: "https://mappingresearch.com/",
  },
];

export const OurProductsSection: React.FC = () => {
  return (
    <Section background={figmaColors.backgroundPrimary} size="md">
      <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Gradient Heading */}
        <Heading level={2} gradient centered style={{ marginBottom: "40px" }}>
          Our Products
        </Heading>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(20,minmax(0,1fr))] gap-[30px]"
        >
          {products.map((product, index) => {
            // Layout Logic:
            // Row 1: ShapeUp (9) + Gesture Arcade (11)
            // Row 2: Resume Builder (11) + Mapping Research (9)
            // This creates a balanced, alternating layout.
            const colSpanClass = (index === 0 || index === 3) ? "lg:col-span-[9]" : "lg:col-span-[11]";
            
            return (

              <div
                key={index}
                className={colSpanClass}
                style={{
                  backgroundColor: figmaColors.backgroundWhite,
                  borderRadius: "20px",
                  padding: "24px",
                  boxShadow: "0 20px 40px -5px rgba(0,0,0,0.08)", // Cleaner shadow to remove top-edge artifacts
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "16px",
                  height: "100%", 
                  border: "none",
                  outline: "none",
                  position: "relative",
                  zIndex: 2,
                }}
              >
              {/* Asset Icon */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "10px",
                  marginTop: "4px", // Push down slightly
                  overflow: "hidden", // Clip any stray SVG paths
                }}
              >
                <Image
                  src={PRODUCT_ICON}
                  alt="Product Icon"
                  width={50}
                  height={50}
                />
              </div>

              <Heading level={3} style={{ fontSize: "24px" }}>
                {product.title}
              </Heading>

              <Text
                size="sm"
                color="secondary"
                style={{ lineHeight: "1.6" }}
              >
                {product.description}
              </Text>

              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: figmaColors.accentCyan,
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "auto", // Push to bottom
                }}
              >
                {product.link}
                {/* Simple Arrow Icon */}
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 11L11 1M11 1H3.5M11 1V8.5"
                    stroke={figmaColors.accentCyan}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          );
        })}
        </div>
      </div>
    </Section>
  );
};
