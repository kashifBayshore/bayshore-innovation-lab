import React from "react";
import Image from "next/image";
import {
  figmaColors,
  figmaSpacing,
} from "@/tokens/figma-design";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

const ResearchAreasSection: React.FC = () => {
  const researchAreas = [
    {
      title: "Agentic AI & Autonomous Systems",
      description:
        "Exploring next-generation AI systems that can reason, plan, and act autonomously. Research focuses on multi-agent systems, goal-oriented behavior, and adaptive learning mechanisms.",
      icon: "/🧠.svg", // Brain icon in screenshot
    },
    {
      title: "Digital Twins & Simulation",
      description:
        "Developing advanced digital twin technologies for real-time monitoring, predictive analytics, and virtual modeling of complex systems across industries.",
      icon: "/🌐.svg", // Globe icon in screenshot
    },
    {
      title: "Generative AI & LLMs",
      description:
        "Investigating large language models, multimodal AI, and generative technologies to create intelligent content, automate workflows, and enhance human-AI collaboration.",
      icon: "/✨.svg", // Sparkles icon in screenshot
    },
    {
      title: "Edge Computing & IoT",
      description: "Researching distributed computing architectures, edge AI deployment, and IoT integration for real-time decision-making in resource-constrained environments.",
      icon: "/⚡.svg", // Lightning icon in screenshot
    },
    {
      title: "Quantum Computing Applications",
      description:
        "Exploring quantum algorithms and hybrid quantum-classical computing solutions for optimization, cryptography, and complex problem-solving.",
      icon: "/🔬.svg", // Microscope icon in screenshot
    },
    {
      title: "Ethical AI & Responsible Innovation",
      description:
        "Developing frameworks for bias mitigation, explainable AI, privacy-preserving technologies, and ensuring AI systems align with human values and ethics.",
      icon: "/🛡️.svg", // Shield icon in screenshot
    },
  ];

  return (
    <Section background={figmaColors.backgroundWhite} style={{ position: "relative", overflow: "visible" }}>
      <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading Area with Decorative Line */}
        <div style={{ marginBottom: "60px", position: "relative", display: "flex", alignItems: "center" }}>
          <Heading level={2} gradient style={{ marginRight: "20px", whiteSpace: "nowrap" }}>
            Research Areas
          </Heading>
          
          {/* Decorative Line (Rectangle 35.svg) */}
          <div style={{ flex: 1, height: "auto", position: "relative", top: "5px" }}>
             <Image
                src="/Rectangle 35.svg"
                alt="Decorative Line"
                width={800} // Approximate width to fill space
                height={20}
                style={{ width: "100%", height: "auto" }}
                unoptimized
             />
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            columnGap: "80px", // Increased gap between columns
            rowGap: "60px",    // Increased gap between rows
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {researchAreas.map((area, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                // Removed bg, border, shadow to match the clean "text on white" look of the screenshot
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  marginBottom: "24px",
                  position: "relative",
                }}
              >
                <Image
                  src={area.icon}
                  alt={area.title}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <Heading level={3} style={{ marginBottom: "16px", fontSize: "24px", color: figmaColors.textPrimary }}>
                {area.title}
              </Heading>

              <Text size="sm" color="secondary" style={{ lineHeight: "1.6", color: "#6B7280" }}>
                {area.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ResearchAreasSection;
