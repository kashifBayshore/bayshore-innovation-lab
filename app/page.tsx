import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import ResearchAreasSection from "@/components/sections/ResearchAreasSection";
import LabCapabilitiesSection from "@/components/sections/LabCapabilitiesSection";
import InnovationInitiativesSection from "@/components/sections/InnovationInitiativesSection";
import { JoinInnovation } from "@/components/sections/JoinInnovation";
import { OurProductsSection } from "../components/sections/OurProductsSection";
import {
  figmaColors,
  figmaTypography,
  figmaSpacing,
} from "@/tokens/figma-design";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export default function Home() {
  return (
    <div
      style={{
        backgroundColor: figmaColors.backgroundPrimary,
        minHeight: "100vh",
        width: "100%",
      }}
    >
      {/* Hero Section - EXACT FIGMA */}
      <HeroSection />

      {/* Our Products Section - Added to match design */}
      <OurProductsSection />

      {/* Research Areas Section - EXACT FIGMA */}
      <ResearchAreasSection />

      {/* Mission Section - EXACT FIGMA */}
      {/* Note: Moved Mission after Research Areas to match typical flow, or check Design? 
          Design image shows: Hero -> Products -> Research Areas -> Mission -> Initiatives -> Capabilities -> Journey
          The original code had Mission after Hero. I will follow the Design Image flow if possible.
          Let's look at Home.png again. 
          Home.png: Hero -> Products -> Research Areas -> Mission -> Initiatives -> Capabilities -> Journey.
          So I will reorder to match Home.png.
      */}
      
      {/* Re-ordering based on Home.png flow */}
      {/* But first, let's keep the existing sections and just insert Products. 
         Wait, user said "implement this to make the webiste same as we have in the image".
         So I SHOULD reorder.
      */}

      {/* Our Mission Section */}
      <Section>
        <div
          style={{
            maxWidth: figmaSpacing.container.content,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <Heading level={2} centered style={{ marginBottom: "20px" }}>
            Our Mission
          </Heading>
          <Text
            size="lg"
            centered
            maxWidth="1270px"
            style={{
              color: figmaColors.textSecondary,
              fontWeight: figmaTypography.fontWeight.semibold,
              margin: "0 auto",
            }}
          >
            The Bayshore Innovation Lab serves as our research and development
            hub, dedicated to exploring emerging technologies, conducting
            cutting-edge research, and transforming innovative ideas into
            practical solutions. We bridge gap between theoretical research and
            real-world applications, ensuring that our innovations deliver
            tangible value to businesses and society.
          </Text>
        </div>
      </Section>

      {/* Innovation Initiatives Section - EXACT FIGMA */}
      <InnovationInitiativesSection />

      {/* Lab Capabilities Section - EXACT FIGMA */}
      <LabCapabilitiesSection />

      {/* Join Our Innovation Journey Section - EXACT FIGMA */}
      <JoinInnovation />
    </div>
  );
}
