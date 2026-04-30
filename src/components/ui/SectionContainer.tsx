import React from 'react';
import { Box, BoxProps } from './Box';
import { useTheme } from '@shopify/restyle';
import { ThemeType } from '@/features/theme';

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
  const theme = useTheme<ThemeType>();

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
          style={{
            background: `linear-gradient(90deg, ${theme.colors.accent} 0%, transparent 100%)`,
          }}
        />
      )}
      {children}
    </Box>
  );
};
