import architectureHighlightsJson from '../data/architectureHighlights.json'
import certificationsJson from '../data/certifications.json'
import educationJson from '../data/education.json'
import experiencesJson from '../data/experiences.json'
import profileJson from '../data/profile.json'
import projectsJson from '../data/projects.json'
import skillsJson from '../data/skills.json'
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

const ensureArray = <T>(value: T[], label: string): T[] => {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid data: ${label} must be an array.`)
  }

  return value
}

export const portfolioData: PortfolioData = {
  profile: profileJson as Profile,
  competencies: ensureArray(
    skillsJson.competencies as Competency[],
    'skills.competencies',
  ),
  techStack: ensureArray(skillsJson.techStack as SkillCategory[], 'skills.techStack'),
  experiences: ensureArray(experiencesJson as ExperienceItem[], 'experiences'),
  projects: ensureArray(projectsJson as ProjectItem[], 'projects'),
  architectureHighlights: ensureArray(
    architectureHighlightsJson as ArchitectureHighlight[],
    'architectureHighlights',
  ),
  education: ensureArray(educationJson as EducationItem[], 'education'),
  certifications: ensureArray(
    certificationsJson as CertificationItem[],
    'certifications',
  ),
}

export const navigationItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
