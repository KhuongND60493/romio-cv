import type {
  ArchitectureHighlight,
  CertificationItem,
  Competency,
  EducationItem,
  ExperienceItem,
  PortfolioData,
  Profile,
  ProjectItem,
  SkillCategory,
} from '../types/cv'

// EN
import enArchitectureHighlights from '../data/en/architectureHighlights.json'
import enCertifications from '../data/en/certifications.json'
import enEducation from '../data/en/education.json'
import enExperiences from '../data/en/experiences.json'
import enProfile from '../data/en/profile.json'
import enProjects from '../data/en/projects.json'
import enSkills from '../data/en/skills.json'

// VI
import viArchitectureHighlights from '../data/vi/architectureHighlights.json'
import viCertifications from '../data/vi/certifications.json'
import viEducation from '../data/vi/education.json'
import viExperiences from '../data/vi/experiences.json'
import viProfile from '../data/vi/profile.json'
import viProjects from '../data/vi/projects.json'
import viSkills from '../data/vi/skills.json'

const ensureArray = <T>(value: T[], label: string): T[] => {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid data: ${label} must be an array.`)
  }
  return value
}

export const getPortfolioData = (lang: string): PortfolioData => {
  const isVi = lang === 'vi'

  return {
    profile: (isVi ? viProfile : enProfile) as Profile,
    competencies: ensureArray(
      (isVi ? viSkills : enSkills).competencies as Competency[],
      'skills.competencies',
    ),
    techStack: ensureArray(
      (isVi ? viSkills : enSkills).techStack as SkillCategory[],
      'skills.techStack'
    ),
    experiences: ensureArray(
      (isVi ? viExperiences : enExperiences) as ExperienceItem[],
      'experiences'
    ),
    projects: ensureArray(
      (isVi ? viProjects : enProjects) as ProjectItem[],
      'projects'
    ),
    architectureHighlights: ensureArray(
      (isVi ? viArchitectureHighlights : enArchitectureHighlights) as ArchitectureHighlight[],
      'architectureHighlights',
    ),
    education: ensureArray(
      (isVi ? viEducation : enEducation) as EducationItem[],
      'education'
    ),
    certifications: ensureArray(
      (isVi ? viCertifications : enCertifications) as CertificationItem[],
      'certifications',
    ),
  }
}

export const getNavigationItems = (t: any) => [
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.architecture'), href: '#architecture' },
  { label: t('nav.education'), href: '#education' },
  { label: t('nav.contact'), href: '#contact' },
]
