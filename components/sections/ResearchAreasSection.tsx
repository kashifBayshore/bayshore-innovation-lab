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
    <Section background={figmaColors.backgroundWhite} size="md" style={{ position: "relative", overflow: "visible" }}>
      <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Heading Area with Decorative Stepped Line */}
        <div style={{ 
          marginBottom: "64px", 
          display: "flex", 
          alignItems: "center", 
          gap: "0px",
          width: "100%"
        }}>
          <Heading 
            level={2} 
            gradient 
            style={{ 
              fontSize: "clamp(32px, 4vw, 42px)",
              margin: 0,
              whiteSpace: "nowrap" 
            }}
          >
            Research Areas
          </Heading>
          
          {/* Decorative Line with Terminal Node */}
          <div style={{ flex: 1, position: "relative", height: "64px", top: "34px" }}>
            <svg
              width="100%"
              height="64"
              viewBox="0 0 1000 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M1 1L841 1.00083C849.837 1.00084 857 8.16428 857 17.0008L857 40.0009C857 48.8374 864.163 56.0008 873 56.0009L998 56.0016"
                stroke="url(#paint0_linear_header)"
                strokeWidth="2"
                strokeLinecap="round"
              />
              {/* Terminal Node Dot */}
              <circle cx="998" cy="56" r="4.5" fill="#03C5CE" />
              <circle cx="998" cy="56" r="8" fill="#03C5CE" fillOpacity="0.2" /> {/* Subtle Glow/Outer Node */}
              
              <defs>
                <linearGradient
                  id="paint0_linear_header"
                  x1="-4"
                  y1="1.0027"
                  x2="1020"
                  y2="1.00274"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" stopOpacity="0" />
                  <stop offset="0.1" stopColor="white" />
                  <stop offset="0.3" stopColor="#FF8D02" />
                  <stop offset="0.6" stopColor="#03C5CE" />
                  <stop offset="0.9" stopColor="#03C5CE" />
                  <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-20"
          style={{
            maxWidth: "1272px",
            margin: "0 auto",
          }}
        >
          {researchAreas.map((area, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
              }}
            >
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  position: "relative",
                }}
              >
                <Image
                  src={area.icon}
                  alt={area.title}
                  fill
                  style={{ objectFit: "contain" }}
                  unoptimized
                />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3
                  style={{
                    fontFamily: "'Open Sans', sans-serif",
                    fontSize: "24px",
                    fontWeight: "700",
                    color: figmaColors.textPrimary,
                    margin: 0,
                  }}
                >
                  {area.title}
                </h3>
                <Text 
                  size="sm" 
                  color="secondary" 
                  style={{ 
                    lineHeight: "1.6", 
                    color: figmaColors.textSecondary,
                    maxWidth: "520px"
                  }}
                >
                  {area.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ResearchAreasSection;
