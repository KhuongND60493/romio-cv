import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@/features/theme/theme'
import { GlobalStyle } from '@/features/theme/globalStyles'

import { ThemeProvider as RestyleThemeProvider } from '@shopify/restyle'

type ThemeMode = 'light' | 'dark'

interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = 'romio-cv.theme'

const getInitialTheme = (): ThemeMode => {
  if (typeof window === 'undefined') {
    return 'dark'
  }
  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return savedTheme === 'light' ? 'light' : 'dark'
}

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode)
    window.localStorage.setItem(THEME_STORAGE_KEY, themeMode)
  }, [themeMode])

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const currentTheme = themeMode === 'light' ? lightTheme : darkTheme

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      <RestyleThemeProvider theme={currentTheme}>
        <StyledThemeProvider theme={currentTheme}>
          <GlobalStyle themeMode={themeMode} theme={currentTheme} />
          {children}
        </StyledThemeProvider>
      </RestyleThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useAppTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useAppTheme must be used within a ThemeProvider')
  }
  return context
}
