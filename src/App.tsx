import styles from './App.module.css'
import { Header } from '@/components/header/Header'
import { AboutSection } from '@/sections/about/AboutSection'
import { ArchitectureSection } from '@/sections/architecture/ArchitectureSection'
import { CompetenciesSection } from '@/sections/skills/CompetenciesSection'
import { ContactSection } from '@/sections/contact/ContactSection'
import { EducationSection } from '@/sections/education/EducationSection'
import { ExperienceSection } from '@/sections/experience/ExperienceSection'
import { FooterSection } from '@/sections/footer/FooterSection'
import { HeroSection } from '@/sections/hero/HeroSection'
import { ProjectsSection } from '@/sections/projects/ProjectsSection'
import { TechStackSection } from '@/sections/tech-stack/TechStackSection'
import { ScrollToTop } from '@/components/scroll-to-top/ScrollToTop'
import { useTranslation } from 'react-i18next'
import { getNavigationItems, getPortfolioData } from '@/features/data'
import { useAppTheme } from '@/features/theme'

function App() {
  const { t, i18n } = useTranslation()
  const { themeMode, toggleTheme } = useAppTheme()

  const portfolioData = getPortfolioData(i18n.language)
  const navigationItems = getNavigationItems(t)

  return (
    <div className={styles.app}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={styles.content}>
        <Header
          navigationItems={navigationItems}
          socialLinks={portfolioData.profile.socialLinks}
          theme={themeMode}
          onToggleTheme={toggleTheme}
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
