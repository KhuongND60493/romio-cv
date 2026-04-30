import { createTheme } from '@shopify/restyle'

const palette = {
  bgDark: '#09090b',
  bgElevatedDark: 'rgba(18, 18, 22, 0.85)',
  bgSoftDark: 'rgba(24, 24, 28, 0.74)',
  surfaceDark: 'rgba(255, 255, 255, 0.03)',
  surfaceStrongDark: 'rgba(255, 255, 255, 0.06)',
  borderDark: 'rgba(220, 38, 38, 0.25)',
  textDark: '#e4e4e7',
  textMutedDark: '#a1a1aa',
  titleDark: '#ffffff',
  accentDark: '#dc2626',
  accentStrongDark: '#ef4444',
  accentSoftDark: 'rgba(220, 38, 38, 0.15)',
  successDark: '#10b981',

  bgLight: '#d5dae1',
  bgElevatedLight: 'rgba(226, 231, 238, 0.72)',
  bgSoftLight: 'rgba(207, 214, 224, 0.7)',
  surfaceLight: 'rgba(52, 65, 85, 0.08)',
  surfaceStrongLight: 'rgba(0, 0, 0, 0.06)',
  borderLight: 'rgba(220, 38, 38, 0.15)',
  textLight: '#18181b',
  textMutedLight: '#52525b',
  titleLight: '#09090b',
  accentLight: '#b91c1c',
  accentStrongLight: '#dc2626',
  accentSoftLight: 'rgba(220, 38, 38, 0.1)',
  successLight: '#059669',
}

export const darkTheme = createTheme({
  colors: {
    bg: palette.bgDark,
    bgElevated: palette.bgElevatedDark,
    bgSoft: palette.bgSoftDark,
    surface: palette.surfaceDark,
    surfaceStrong: palette.surfaceStrongDark,
    border: palette.borderDark,
    text: palette.textDark,
    textMuted: palette.textMutedDark,
    title: palette.titleDark,
    accent: palette.accentDark,
    accentStrong: palette.accentStrongDark,
    accentSoft: palette.accentSoftDark,
    success: palette.successDark,
    gradientBorder: 'linear-gradient(140deg, rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.4), rgba(220, 38, 38, 0.2))',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    md: 12,
    lg: 16,
    xl: 24,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  textVariants: {
    defaults: {
      color: 'text',
      fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    },
    heading: {
      color: 'title',
      fontFamily: "'Space Grotesk', Inter, sans-serif",
    },
  },
})

export type ThemeType = typeof darkTheme

export const lightTheme = createTheme({
  ...darkTheme,
  colors: {
    ...darkTheme.colors,
    bg: palette.bgLight,
    bgElevated: palette.bgElevatedLight,
    bgSoft: palette.bgSoftLight,
    surface: palette.surfaceLight,
    surfaceStrong: palette.surfaceStrongLight,
    border: palette.borderLight,
    text: palette.textLight,
    textMuted: palette.textMutedLight,
    title: palette.titleLight,
    accent: palette.accentLight,
    accentStrong: palette.accentStrongLight,
    accentSoft: palette.accentSoftLight,
    success: palette.successLight,
    gradientBorder: 'linear-gradient(140deg, rgba(220, 38, 38, 0.8), rgba(153, 27, 27, 0.4), rgba(220, 38, 38, 0.2))',
  },
})
