import {Header} from '@/shared/components/header/Header'
import {AboutSection, ArchitectureSection} from '@/sections'
import {CompetenciesSection} from '@/sections/skills/CompetenciesSection'
import {ContactSection} from '@/sections/contact/ContactSection'
import {EducationSection} from '@/sections/education/EducationSection'
import {ExperienceSection} from '@/sections/experience/ExperienceSection'
import {FooterSection} from '@/sections/footer/FooterSection'
import {HeroSection} from '@/sections/hero/HeroSection'
import {ProjectsSection} from '@/sections/projects/ProjectsSection'
import {TechStackSection} from '@/sections/tech-stack/TechStackSection'
import {ScrollToTop} from '@/shared/components/scroll-to-top/ScrollToTop'
import {useTranslation} from 'react-i18next'
import {getNavigationItems, getPortfolioData} from '@/features/data'
import {ThemeType, useAppTheme} from '@/features/theme'
import {Box} from "@/shared/components/ui";
import {useTheme} from "@shopify/restyle";
import type {ReactNode} from 'react'

function App() {
    const {t, i18n} = useTranslation()
    const {themeMode, toggleTheme} = useAppTheme();
    const theme = useTheme<ThemeType>();
    const portfolioData = getPortfolioData(i18n.language);
    const navigationItems = getNavigationItems(t);

    return (
        <Box
            position="relative"
            backgroundColor="bg"
            style={{minHeight: '100vh', overflowX: 'clip'} as any}
        >
            <Box
                pointerEvents="none"
                zIndex={0}
                style={{
                    position: 'fixed',
                    inset: 0,
                    background: `
                        radial-gradient(circle at 50% 0%, ${theme.colors.glowPrimary}, transparent 40%),
                        radial-gradient(circle at 100% 50%, ${theme.colors.glowSecondary}, transparent 50%),
                        radial-gradient(circle at 0% 100%, ${theme.colors.glowTertiary}, transparent 40%)
                    `,
                } as any}
            />

            <Box position={'relative'} zIndex={1}>
                <Header
                    navigationItems={navigationItems}
                    socialLinks={portfolioData.profile.socialLinks}
                    theme={themeMode}
                    onToggleTheme={toggleTheme}
                />

                <Box
                    width="100%"
                    style={{width: 'min(var(--max-width), calc(100% - 4rem))', marginInline: 'auto'} as any}
                    paddingBottom="xl"
                >
                    <HeroSection profile={portfolioData.profile} />
                    <Box flexDirection="column" style={{gap: '6rem'} as any}>
                        <SectionWrapper>
                            <AboutSection about={portfolioData.profile.about}/>
                        </SectionWrapper>
                        <SectionWrapper>
                            <CompetenciesSection competencies={portfolioData.competencies}/>
                        </SectionWrapper>
                        <SectionWrapper>
                            <TechStackSection techStack={portfolioData.techStack}/>
                        </SectionWrapper>
                        <SectionWrapper>
                            <ExperienceSection experiences={portfolioData.experiences}/>
                        </SectionWrapper>
                        <SectionWrapper>
                            <ProjectsSection projects={portfolioData.projects}/>
                        </SectionWrapper>
                        <SectionWrapper>
                            <ArchitectureSection highlights={portfolioData.architectureHighlights}/>
                        </SectionWrapper>
                        <SectionWrapper>
                            <EducationSection
                                education={portfolioData.education}
                                certifications={portfolioData.certifications}
                            />
                        </SectionWrapper>
                        <SectionWrapper>
                            <ContactSection profile={portfolioData.profile}/>
                        </SectionWrapper>
                    </Box>
                    <FooterSection navigationItems={navigationItems}/>
                </Box>
            </Box>
            <ScrollToTop/>
        </Box>
    )
}

export default App

const SectionWrapper = ({children}: {
    children: ReactNode
}) => (
    <Box position="relative" pt="l">
        <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height={1}
            opacity={0.5}
            style={{background: 'linear-gradient(90deg, var(--accent) 0%, transparent 100%)'} as any}
        />
        {children}
    </Box>
)

