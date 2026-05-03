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
  SkillsData,
} from '@/features/data/types.ts'

// EN
import enArchitectureHighlights from '@/features/data/en/architectureHighlights.js'
import enCertifications from '@/features/data/en/certifications.js'
import enEducation from '@/features/data/en/education.js'
import enExperiences from '@/features/data/en/experiences.js'
import enProfile from '@/features/data/en/profile.js'
import enProjects from '@/features/data/en/projects.js'
import enSkills from '@/features/data/en/skills.js'
import baseProfileCommon from '@/features/data/common/base_profile.js'
import baseSkillsCommon from '@/features/data/common/base_skills.js'

// VI
import viArchitectureHighlights from '@/features/data/vi/architectureHighlights.js'
import viCertifications from '@/features/data/vi/certifications.js'
import viEducation from '@/features/data/vi/education.js'
import viExperiences from '@/features/data/vi/experiences.js'
import viProfile from '@/features/data/vi/profile.js'
import viProjects from '@/features/data/vi/projects.js'
import viSkills from '@/features/data/vi/skills.js'

const ensureArray = <T>(value: T[], label: string): T[] => {
  if (!Array.isArray(value)) {
    throw new Error(`Invalid data: ${label} must be an array.`)
  }
  return value
}

type SharedProfileFields = Pick<Profile, 'links' | 'socialLinks'>
type LocalizedSkillsFields = Pick<SkillsData, 'competencies'> &
  Partial<Pick<SkillsData, 'techStack'>>
type SharedSkillsFields = Pick<SkillsData, 'techStack'>

const sharedProfileFields = baseProfileCommon as SharedProfileFields
const sharedSkillsFields = baseSkillsCommon as SharedSkillsFields

const composeProfile = (localizedProfile: Profile): Profile => ({
  ...localizedProfile,
  links: localizedProfile.links ?? sharedProfileFields.links,
  socialLinks: localizedProfile.socialLinks ?? sharedProfileFields.socialLinks,
})

const composeSkills = (localizedSkills: LocalizedSkillsFields): SkillsData => ({
  ...localizedSkills,
  techStack: localizedSkills.techStack ?? sharedSkillsFields.techStack,
})

export const getPortfolioData = (lang: string): PortfolioData => {
  const isVi = lang === 'vi'
  const localizedSkills = composeSkills(
    (isVi ? viSkills : enSkills) as LocalizedSkillsFields,
  )

  return {
    profile: composeProfile((isVi ? viProfile : enProfile) as Profile),
    competencies: ensureArray(
      localizedSkills.competencies as Competency[],
      'skills.competencies',
    ),
    techStack: ensureArray(
      localizedSkills.techStack as SkillCategory[],
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

export const getNavigationItems = (t: (key: string) => string) => [
  { label: t('nav.about'), href: '#about' },
  { label: t('nav.skills'), href: '#skills' },
  { label: t('nav.experience'), href: '#experience' },
  { label: t('nav.projects'), href: '#projects' },
  { label: t('nav.architecture'), href: '#architecture' },
  { label: t('nav.education'), href: '#education' },
  { label: t('nav.contact'), href: '#contact' },
]
