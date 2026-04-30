import React, { useState } from 'react';
import { Box, BoxProps } from './Box';

interface SectionCardProps extends BoxProps {
  children: React.ReactNode;
  hoverable?: boolean;
}

export const SectionCard = ({ children, hoverable = true, ...props }: SectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const InteractiveBox = Box as any;

  return (
    <InteractiveBox
      onMouseEnter={() => hoverable && setIsHovered(true)}
      onMouseLeave={() => hoverable && setIsHovered(false)}
      position="relative"
      backgroundColor={isHovered ? 'surfaceStrong' : 'surface'}
      borderWidth={1}
      borderColor="surfaceStrong"
      padding={{ phone: 'm', tablet: 'l' }}
      flexDirection={{ phone: 'column', tablet: 'row' }}
      gap={{ phone: 'm', tablet: 'l' }}
      alignItems="flex-start"
      style={{ transition: 'all 0.3s ease' } as any}
      {...props}
    >
      {hoverable && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width={4}
          height={isHovered ? '100%' : 0}
          backgroundColor="accent"
          style={{ transition: 'height 0.3s ease' } as any}
        />
      )}
      {children}
    </InteractiveBox>
  );
};
