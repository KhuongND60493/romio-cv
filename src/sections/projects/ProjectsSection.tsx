import { SectionHeading } from '@/components/section-heading/SectionHeading'
import { TagList } from '@/components/tag-list/TagList'
import type { ProjectItem } from '@/features/data/types.ts'
import { useTranslation } from 'react-i18next'
import styles from './ProjectsSection.module.css'

interface ProjectsSectionProps {
  projects: ProjectItem[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const { t } = useTranslation()
  return (
    <section id="projects" className={styles.section}>
      <SectionHeading
        eyebrow={t('sections.projects')}
        title="Selected product and platform work with measurable business value."
        description="Representative examples that highlight architecture choices, ownership scope, and product outcomes."
      />

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.name} className={styles.card}>
            <div className={styles.header}>
              <h3>{project.name}</h3>
              <p>{project.role}</p>
            </div>

            <p className={styles.description}>{project.description}</p>

            <div className={styles.detailSplit}>
              <div className={`${styles.detail} ${styles.architectureDetail}`}>
                <h4>Architecture Highlights</h4>
                <ul>
                  {project.architectureHighlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className={`${styles.detail} ${styles.impactDetail}`}>
                <h4>Business Impact</h4>
                <p>{project.businessImpact}</p>
              </div>
            </div>

            <div className={styles.techTags}>
              <TagList items={project.techStack} compact />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
