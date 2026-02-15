"use client";

import React, { useState } from 'react';
import { Heading } from '@/components/ui/Heading';
import { LeftDecoration, RightDecoration } from './JoinInnovationAssets';
import { Text } from '@/components/ui/Text';
import { Button } from '@/components/ui/Button';
import { figmaColors, figmaSpacing } from '@/tokens/figma-design';
import { Section } from '@/components/ui/Section';
import { Modal } from '@/components/ui/Modal';
import { ContactForm } from '@/components/features/ContactForm';

export const JoinInnovation: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="hidden md:block" style={{ marginRight: '-10px' }}>
                <LeftDecoration />
            </div>

            {/* Button */}
            <div style={{ zIndex: 10 }}>
                <Button 
                    size="lg"
                    onClick={() => setIsModalOpen(true)}
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
            <div className="hidden md:block" style={{ marginLeft: '-10px' }}>
                <RightDecoration />
            </div>

        </div>

        {/* Modal Integration */}
        <Modal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)}
          title="Get in Touch"
        >
          <ContactForm onSuccess={() => setTimeout(() => setIsModalOpen(false), 2000)} />
        </Modal>

      </div>
      
      {/* Bottom Separator Line */}
        <div
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${figmaColors.borderLight}, transparent)`,
          }}
        />

    </Section>
  );
};

