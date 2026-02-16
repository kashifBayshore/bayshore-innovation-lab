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
    title: "Precision Mapping AI",
    description:
      "Advanced geospatial analysis tool that leverages machine learning to create high-fidelity maps for urban planning and environmental monitoring.",
    link: "https://mappingresearch.com/precision",
  },
  {
    title: "EcoSmart Solutions",
    description:
      "A comprehensive suite of IoT-driven sensors and analytical platforms designed to optimize energy consumption and reduce the carbon footprint of industrial facilities.",
    link: "https://mappingresearch.com/ecosmart",
  },
  {
    title: "CyberShield Research",
    description:
      "Next-generation cybersecurity framework utilizing agentic AI to detect and mitigate zero-day vulnerabilities across distributed cloud networks.",
    link: "https://mappingresearch.com/cybershield",
  },
  {
    title: "Quantum Insight Engine",
    description:
      "A hybrid quantum-classical computing platform for solving complex optimization problems in logistics and large-scale data processing.",
    link: "https://mappingresearch.com/quantum",
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
            // Alternating pattern for Desktop (lg+): 
            // 20-column grid allows for 45/55 split (9/20 and 11/20)
            // Card 1: 9 cols, Card 2: 11 cols, Card 3: 11 cols, Card 4: 9 cols
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
