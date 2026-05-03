export interface SocialLink {
  label: string
  href: string
  ariaLabel: string
}

export interface ContactLink extends SocialLink {
  value: string
}

export interface CtaLink {
  label: string
  href: string
  variant: 'primary' | 'secondary' | 'ghost'
}

export interface HeroProfile {
  fullName: string
  title: string
  title_cv: string[]
  tagline: string
  summary: string
  avatarLabel: string
  location: string
  email: string
  phone: string
  resumeUrl: string
}

export interface AboutProfile {
  headline: string
  description: string
  focusAreas: string[]
}

export interface Profile {
  hero: HeroProfile
  about: AboutProfile
  ctas: CtaLink[]
  links: ContactLink[]
  socialLinks: SocialLink[]
  title_cv: string[]
}

export interface Competency {
  title: string
  description: string
}

export interface SkillCategory {
  category: string
  items: string[]
}

export interface SkillsData {
  competencies: Competency[]
  techStack: SkillCategory[]
}

export interface ExperienceItem {
  company: string
  role: string
  duration: string
  location: string
  summary: string
  responsibilities: string[]
  achievements: string[]
  techStack: string[]
}

export interface ProjectLink {
  label: string
  href: string
}

export interface ProjectItem {
  name: string
  description: string
  role: string
  architectureHighlights: string[]
  businessImpact: string
  techStack: string[]
  links: ProjectLink[]
}

export interface ArchitectureHighlight {
  title: string
  description: string
  icon: string
}

export interface EducationItem {
  degree: string
  institution: string
  duration?: string
  note: string
  logoUrl?: string
}

export interface CertificationItem {
  name: string
  issuer: string
  year: string
  logoUrl?: string
}

export interface PortfolioData {
  profile: Profile
  competencies: Competency[]
  techStack: SkillCategory[]
  experiences: ExperienceItem[]
  projects: ProjectItem[]
  architectureHighlights: ArchitectureHighlight[]
  education: EducationItem[]
  certifications: CertificationItem[]
}
