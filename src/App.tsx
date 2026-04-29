import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/header/Header'
import { AboutSection } from './sections/about/AboutSection'
import { ArchitectureSection } from './sections/architecture/ArchitectureSection'
import { CompetenciesSection } from './sections/skills/CompetenciesSection'
import { ContactSection } from './sections/contact/ContactSection'
import { EducationSection } from './sections/education/EducationSection'
import { ExperienceSection } from './sections/experience/ExperienceSection'
import { FooterSection } from './sections/footer/FooterSection'
import { HeroSection } from './sections/hero/HeroSection'
import { ProjectsSection } from './sections/projects/ProjectsSection'
import { TechStackSection } from './sections/tech-stack/TechStackSection'
import { ScrollToTop } from './components/scroll-to-top/ScrollToTop'
import { useTranslation } from 'react-i18next'
import { getNavigationItems, getPortfolioData } from './utils/portfolioData'

const THEME_STORAGE_KEY = 'romio-cv.theme'

const getInitialTheme = (): 'dark' | 'light' => {
  if (typeof window === 'undefined') {
    return 'dark'
  }

  const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)
  return savedTheme === 'light' ? 'light' : 'dark'
}

function App() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState<'dark' | 'light'>(getInitialTheme)

  const portfolioData = getPortfolioData(i18n.language)
  const navigationItems = getNavigationItems(t)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  return (
    <div className={styles.app}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.content}>
        <Header
          navigationItems={navigationItems}
          socialLinks={portfolioData.profile.socialLinks}
          theme={theme}
          onToggleTheme={() =>
            setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
          }
        />

        <main className={styles.main}>
          <HeroSection profile={portfolioData.profile} />
          <div className={styles.sectionGrid}>
            <AboutSection about={portfolioData.profile.about} />
            <CompetenciesSection competencies={portfolioData.competencies} />
            <TechStackSection techStack={portfolioData.techStack} />
            <ExperienceSection experiences={portfolioData.experiences} />
            <ProjectsSection projects={portfolioData.projects} />
            <ArchitectureSection highlights={portfolioData.architectureHighlights} />
            <EducationSection
              education={portfolioData.education}
              certifications={portfolioData.certifications}
            />
            <ContactSection profile={portfolioData.profile} />
          </div>
          <FooterSection navigationItems={navigationItems} />
        </main>
      </div>
      <ScrollToTop />
    </div>
  )
}

export default App
