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
    title: "Mapping Research",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    link: "https://mappingresearch.com",
  },
  {
    title: "Mapping Research",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    link: "https://mappingresearch.com",
  },
  {
    title: "Mapping Research",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    link: "https://mappingresearch.com",
  },
  {
    title: "Mapping Research",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
    link: "https://mappingresearch.com",
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
          className="grid grid-cols-1 md:grid-cols-2 gap-[30px]"
        >
          {products.map((product, index) => (
            <div
              key={index}
              style={{
                backgroundColor: figmaColors.backgroundWhite,
                borderRadius: "20px",
                padding: "40px",
                boxShadow: figmaColors.cardShadow,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
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
          ))}
        </div>
      </div>
    </Section>
  );
};
