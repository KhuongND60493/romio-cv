import { createGlobalStyle } from 'styled-components'
import { ThemeType } from '@/features/theme/theme'

export const GlobalStyle = createGlobalStyle<{ theme: ThemeType; themeMode: 'light' | 'dark' }>`
  :root {
    --bg: ${({ theme }) => theme.colors.bg};
    --bg-elevated: ${({ theme }) => theme.colors.bgElevated};
    --bg-soft: ${({ theme }) => theme.colors.bgSoft};
    --surface: ${({ theme }) => theme.colors.surface};
    --surface-strong: ${({ theme }) => theme.colors.surfaceStrong};
    --border: ${({ theme }) => theme.colors.border};
    --text: ${({ theme }) => theme.colors.text};
    --text-muted: ${({ theme }) => theme.colors.textMuted};
    --title: ${({ theme }) => theme.colors.title};
    --accent: ${({ theme }) => theme.colors.accent};
    --accent-strong: ${({ theme }) => theme.colors.accentStrong};
    --accent-soft: ${({ theme }) => theme.colors.accentSoft};
    --gradient-border: ${({ theme }) => theme.colors.gradientBorder};
    --success: ${({ theme }) => theme.colors.success};
    
    --shadow: 0 28px 64px rgba(0, 0, 0, 0.8);
    --shadow-soft: 0 14px 36px rgba(0, 0, 0, 0.5);
    
    --radius-xl: ${({ theme }) => theme.borderRadii.xl}px;
    --radius-lg: ${({ theme }) => theme.borderRadii.lg}px;
    --radius-md: ${({ theme }) => theme.borderRadii.md}px;
    
    --max-width: 1200px;
  }

  /* Reset & Base Styles */
  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-width: 320px;
    min-height: 100vh;
    background-color: var(--bg);
    
    background-image: ${({ themeMode }) =>
      themeMode === 'light'
        ? `linear-gradient(rgba(148, 163, 184, 0.28) 1px, transparent 1px),
           linear-gradient(90deg, rgba(148, 163, 184, 0.28) 1px, transparent 1px),
           linear-gradient(rgba(255, 255, 255, 0.22), rgba(255, 255, 255, 0.22))`
        : `linear-gradient(rgba(220, 38, 38, 0.05) 1px, transparent 1px),
           linear-gradient(90deg, rgba(220, 38, 38, 0.05) 1px, transparent 1px)`};
           
    background-size: 40px 40px;
    background-position: center center;
    color: var(--text);
    line-height: 1.6;
    letter-spacing: 0.01em;
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.textVariants.heading.fontFamily};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  textarea {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }

  #root {
    min-height: 100vh;
  }

  @media (prefers-reduced-motion: no-preference) {
    section {
      animation: section-rise 420ms ease both;
      animation-timeline: view();
      animation-range: entry 0% cover 30%;
    }
  }

  @keyframes section-rise {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`
