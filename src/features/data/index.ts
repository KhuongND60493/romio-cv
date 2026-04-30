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
import enArchitectureHighlights from '@/features/data/en/architectureHighlights.json'
import enCertifications from '@/features/data/en/certifications.json'
import enEducation from '@/features/data/en/education.json'
import enExperiences from '@/features/data/en/experiences.json'
import enProfile from '@/features/data/en/profile.json'
import enProjects from '@/features/data/en/projects.json'
import enSkills from '@/features/data/en/skills.json'
import baseProfileCommon from '@/features/data/common/base_profile.json'
import baseSkillsCommon from '@/features/data/common/base_skills.json'

// VI
import viArchitectureHighlights from '@/features/data/vi/architectureHighlights.json'
import viCertifications from '@/features/data/vi/certifications.json'
import viEducation from '@/features/data/vi/education.json'
import viExperiences from '@/features/data/vi/experiences.json'
import viProfile from '@/features/data/vi/profile.json'
import viProjects from '@/features/data/vi/projects.json'
import viSkills from '@/features/data/vi/skills.json'

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
