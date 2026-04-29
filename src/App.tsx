import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { AboutSection } from './sections/AboutSection'
import { ArchitectureSection } from './sections/ArchitectureSection'
import { CompetenciesSection } from './sections/CompetenciesSection'
import { ContactSection } from './sections/ContactSection'
import { EducationSection } from './sections/EducationSection'
import { ExperienceSection } from './sections/ExperienceSection'
import { FooterSection } from './sections/FooterSection'
import { HeroSection } from './sections/HeroSection'
import { ProjectsSection } from './sections/ProjectsSection'
import { TechStackSection } from './sections/TechStackSection'
import { ScrollToTop } from './components/ScrollToTop'
import { useTranslation } from 'react-i18next'
import { getNavigationItems, getPortfolioData } from './utils/portfolioData'

function App() {
  const { t, i18n } = useTranslation()
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const portfolioData = getPortfolioData(i18n.language)
  const navigationItems = getNavigationItems(t)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
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
