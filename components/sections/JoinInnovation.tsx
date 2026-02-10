import React from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { figmaColors, figmaSpacing } from '@/tokens/figma-design';
import { Section } from '@/components/ui/Section';

export const JoinInnovation: React.FC = () => {
  return (
    <Section background={figmaColors.backgroundWhite} size="sm">
      <div 
        style={{ 
            maxWidth: figmaSpacing.container.full, 
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden', // Keep the wide SVGs from causing scroll
        }}
      >
        {/* Heading */}
        <Heading level={2} centered style={{ marginBottom: "12px" }}>
          Join Our Innovation Journey
        </Heading>
        
        {/* Description Text */}
        <Text 
          size="sm"
          centered
          color="secondary"
          style={{ 
              maxWidth: "1178px", 
              lineHeight: "24px",
              marginBottom: "24px"
          }}
        >
          Interested in collaborating on research projects, exploring innovative solutions, or learning more about our work? We're always open to partnerships and discussions that push the boundaries of technology.
        </Text>

        {/* Action Area: Lines + Button */}
        <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            width: '100%',
            position: 'relative'
        }}>
            
            {/* Left Decoration */}
            {/* Group 415.svg - Wide Left, Pointy Right -> Pointy connects to Button on Right */}
            <div className="hidden md:block" style={{ marginRight: '-10px' }}>
                <Image 
                    src="/Group 415.svg" 
                    alt="" 
                    width={708} 
                    height={193} 
                />
            </div>

            {/* Button */}
            <div style={{ zIndex: 10 }}>
                <Button 
                    size="lg"
                    style={{
                        backgroundColor: figmaColors.accentCyan, // From screenshot
                        borderRadius: "8px", // Slightly rounded
                        padding: "0 48px", // Increased padding
                        height: "56px", // Increased height (was 48px)
                        fontSize: "18px", // Increased font size
                        fontWeight: 600,
                        whiteSpace: "nowrap" // Ensure text stays on one line
                    }}
                >
                    Get in Touch
                </Button>
            </div>

            {/* Right Decoration */}
            {/* Group 416.svg - Pointy Left, Wide Right -> Pointy connects to Button on Left */}
            <div className="hidden md:block" style={{ marginLeft: '-10px' }}>
                <Image 
                    src="/Group 416.svg" 
                    alt="" 
                    width={708} 
                    height={193} 
                />
            </div>

        </div>

        {/* Bottom Line (Already existing in Page.tsx, maybe move it here if this component replaces current code) 
           The screenshot shows the bottom line at 707.5 x 192 location... wait.
           The screenshot shows the Group 415/416 ARE the lines.
           And there is a bottom border of 1px at the very bottom of the CONTAINER (1440x354).
           
           I will add the bottom border to the section itself or a div at bottom.
        */}
      </div>
      
      {/* Bottom Separator Line */}
       <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: figmaSpacing.container.full,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${figmaColors.borderLight}, transparent)`,
          }}
        />
    </Section>
  );
};
