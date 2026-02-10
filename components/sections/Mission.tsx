import React from 'react';
import { Heading } from '@/components/ui/Heading';
import { Text } from '@/components/ui/Text';
import { colors, spacing } from '@/types/design-tokens';

export const Mission: React.FC = () => {
  return (
    <section 
      className="w-full"
      style={{ 
        backgroundColor: colors.background.white,
        paddingTop: spacing['3xl'],
        paddingBottom: spacing['3xl'],
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-5xl mx-auto">
          <Heading 
            level={3}
            className="mb-8 text-center"
          >
            Our Mission
          </Heading>
          
          <Text 
            size="sm"
            color="secondary"
            className="text-center leading-6"
          >
            The Bayshore Innovation Lab serves as our research and development hub, dedicated to exploring emerging technologies, conducting cutting-edge research, and transforming innovative ideas into practical solutions. We bridge the gap between theoretical research and real-world applications, ensuring that our innovations deliver tangible value to businesses and society.
          </Text>
        </div>
      </div>
    </section>
  );
};
