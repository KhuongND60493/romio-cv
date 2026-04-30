import React from 'react';
import { Box, BoxProps } from './Box';

interface SectionContainerProps extends BoxProps {
  children: React.ReactNode;
  id?: string;
  hasArchitecturalLine?: boolean;
}

export const SectionContainer = ({
  children,
  hasArchitecturalLine = true,
  ...props
}: SectionContainerProps) => {

  return (
    <Box position="relative" pt="xl" {...props}>
      {hasArchitecturalLine && (
        <Box
          position="absolute"
          top={0}
          left={0}
          width="100%"
          height={1}
          opacity={0.5}
        />
      )}
      {children}
    </Box>
  );
};
