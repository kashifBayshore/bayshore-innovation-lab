import React from 'react';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { figmaColors, figmaSpacing } from '@/tokens/figma-design';
import { Section } from '@/components/ui/Section';

export const Mission: React.FC = () => {
  return (
    <Section background="#F0F2F5" size="sm">
      <div 
        style={{ 
          maxWidth: "100%", 
          margin: "0 auto", 
        }}
        className="px-5 lg:px-[120px]"
      >
        <div style={{ textAlign: "center", width: "100%", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(28px, 5vw, 36px)",
              fontWeight: "700",
              color: "#313131",
              marginBottom: "32px",
              textAlign: "center"
            }}
          >
            Our Mission
          </h2>
          
          <p
            style={{
              fontFamily: "'Open Sans', sans-serif",
              fontSize: "clamp(16px, 2.5vw, 19px)",
              lineHeight: "1.6",
              color: "#7b868f",
              textAlign: "center",
              width: "100%",
              margin: "0 auto"
            }}
          >
            The Bayshore Innovation Lab serves as our research and development hub, dedicated to exploring emerging technologies, conducting cutting-edge research, and transforming innovative ideas into practical solutions. We bridge the gap between theoretical research and real-world applications, ensuring that our innovations deliver tangible value to businesses and society.
          </p>
        </div>

      </div>
    </Section>
  );
};
