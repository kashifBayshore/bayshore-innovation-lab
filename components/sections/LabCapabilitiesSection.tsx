import React from "react";
import Image from "next/image";
import {
  figmaColors,
  figmaSpacing,
} from "@/tokens/figma-design";
import { Section } from "@/components/ui/Section";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

const LabCapabilitiesSection: React.FC = () => {
  // SVG Metrics and Card Mapping
  // Center is Y=0.
  // Upwards:
  // 1. Advanced AI: 44(1) [W=325, H=205] -> Y = -205
  // 2. Real-time: 46 [W=369, H=122] -> Y = -122
  // 3. Cloud: 48(1) [W=289, H=41] -> Y = -41 (Actually 48(1) is the short UP line)
  
  // Downwards:
  // 4. Secure: 48 [W=369, H=41] -> Y = +41 (48 is the short DOWN line)
  // 5. Performance: 46(1) [W=289, H=122] -> Y = +122
  // 6. Cross-Platform: 44(2) [W=405, H=205] -> Y = +205

  const capabilities = [
    // Top Set
    { 
        title: "Advanced AI/ML Model Development", 
        svg: "/Rectangle 44 (1).svg", 
        width: 325, 
        height: 205, 
        direction: "up",
        svgStyle: { bottom: "-2px", left: 0 }
    },
    { 
        title: "Real-time Data Processing & Analytics", 
        svg: "/Rectangle 46.svg", 
        width: 369, 
        height: 122, 
        direction: "up",
        svgStyle: { bottom: "-2px", left: 0 }
    },
    { 
        title: "Cloud-Native Architecture Design", 
        svg: "/Rectangle 48 (1).svg", 
        width: 289, 
        height: 41, 
        direction: "up",
        svgStyle: { bottom: "-2px", left: 0 }
    },
    // Bottom Set
    { 
        title: "Secure & Scalable System Development", 
        svg: "/Rectangle 48.svg", 
        width: 369, 
        height: 41, 
        direction: "down",
        svgStyle: { top: "-2px", left: 0 }
    },
    { 
        title: "Performance Optimization & Benchmarking", 
        svg: "/Rectangle 46 (1).svg", 
        width: 289, 
        height: 122, 
        direction: "down",
        svgStyle: { top: "-2px", left: 0 }
    },
    { 
        title: "Cross-Platform Integration", 
        svg: "/Rectangle 44 (2).svg", 
        width: 405, 
        height: 205, 
        direction: "down",
        svgStyle: { top: "-2px", left: 0 }
    },
  ];

  return (
    <Section background={figmaColors.backgroundWhite} style={{ overflow: "hidden", minHeight: "700px" }}>
       <div
        style={{
          maxWidth: figmaSpacing.container.full,
          margin: "0 auto",
          padding: "0 20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "nowrap", // Ensure side-by-side on desktop
          gap: "0px",
          position: "relative",
          height: "600px", // Fixed height for alignment container
        }}
        className="flex-col md:flex-row h-auto md:h-[600px]"
      >
        {/* Left Content */}
        <div 
            style={{ width: "391px", flexShrink: 0, zIndex: 10, marginRight: "20px" }}
            className="mb-10 md:mb-0 text-center md:text-left"
        >
            <Heading level={2} gradient style={{ marginBottom: "20px", whiteSpace: "nowrap" }}>
                Lab Capabilities
            </Heading>
            <Text size="sm" color="secondary" style={{ width: "100%", maxWidth: "317px", lineHeight: "1.6", margin: "0 auto md:0" }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
            </Text>
        </div>

        {/* Center Dot */}
        <div className="hidden md:block" style={{ 
            width: "20px", 
            height: "20px", 
            backgroundColor: figmaColors.accentCyan, 
            borderRadius: "50%",
            flexShrink: 0,
            zIndex: 20,
            position: "relative",
        }}></div>

        {/* Tree Container (Desktop Only) */}
        <div className="hidden md:block" style={{ position: "relative", flexGrow: 1,  height: "100%" }}>
            
            {/* The "Center" of this container aligns with the Dot */}
            <div style={{ position: "absolute", top: "50%", left: 0, width: "100%", height: "0px" }}>
                {capabilities.map((cap, i) => (
                    <React.Fragment key={i}>
                        {/* Line */}
                        <div style={{ position: "absolute", ...cap.svgStyle }}>
                            <Image 
                                src={cap.svg} 
                                alt="" 
                                width={cap.width} 
                                height={cap.height} 
                                style={{ display: "block" }} 
                                unoptimized
                            />
                        </div>

                        {/* Card */}
                        <div style={{
                            position: "absolute",
                            left: `${cap.width}px`, // Staggered X position
                            // Calculate Top relative to Center (0)
                            // Up: -Height - (CardHeight/2)
                            // Down: +Height - (CardHeight/2)
                            top: cap.direction === "up" 
                                ? `-${cap.height + 34}px` // 34 is Half Card Height (68/2)
                                : `${cap.height - 34}px`,
                            width: "395px",
                            height: "68px",
                            backgroundColor: figmaColors.backgroundWhite,
                            borderRadius: "12px",
                            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start", // Left align text inside card
                            padding: "0 20px",
                            border: `1px solid ${figmaColors.borderLight}`,
                            zIndex: 10,
                        }}>
                             <Text size="sm" weight="medium" style={{ fontSize: "14px", color: figmaColors.textPrimary }}>
                                {cap.title}
                             </Text>
                        </div>
                    </React.Fragment>
                ))}
            </div>
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="flex md:hidden flex-col gap-4 mt-8">
            {capabilities.map((cap, i) => (
                 <div key={i} style={{
                     width: "100%",
                     maxWidth: "395px",
                     height: "68px",
                     backgroundColor: figmaColors.backgroundWhite,
                     borderRadius: "12px",
                     boxShadow: figmaColors.cardShadow,
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     padding: "0 20px",
                     border: `1px solid ${figmaColors.borderLight}`,
                 }}>
                     <Text size="sm" weight="medium" style={{ textAlign: "center", fontSize: "14px" }}>{cap.title}</Text>
                 </div>
            ))}
        </div>

      </div>
    </Section>
  );
};

export default LabCapabilitiesSection;
