import React from 'react';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { figmaColors, figmaSpacing } from '@/tokens/figma-design';
import { Section } from '@/components/ui/Section';

export const Mission: React.FC = () => {
  return (
    <Section background={figmaColors.backgroundWhite}>
      <div 
        style={{ 
          maxWidth: figmaSpacing.container.full, 
          margin: "0 auto", 
          padding: "0 20px" 
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "1000px", margin: "0 auto" }}>
          <Heading 
            level={3}
            centered
            style={{ marginBottom: "32px" }}
          >
            Our Mission
          </Heading>
          
          <Text 
            size="sm"
            color="secondary"
            centered
            style={{ lineHeight: "1.6" }}
          >
            The Bayshore Innovation Lab serves as our research and development hub, dedicated to exploring emerging technologies, conducting cutting-edge research, and transforming innovative ideas into practical solutions. We bridge the gap between theoretical research and real-world applications, ensuring that our innovations deliver tangible value to businesses and society.
          </Text>
        </div>
      </div>
    </Section>
  );
};
