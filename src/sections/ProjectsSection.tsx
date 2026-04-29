import { SectionHeading } from '../components/SectionHeading'
import { TagList } from '../components/TagList'
import type { ProjectItem } from '../types/cv'
import { useTranslation } from 'react-i18next'
import styles from './ProjectsSection.module.css'

interface ProjectsSectionProps {
  projects: ProjectItem[]
}

export const ProjectsSection = ({ projects }: ProjectsSectionProps) => {
  const { t } = useTranslation();
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
            <div>
              <h3>{project.name}</h3>
              <p>{project.role}</p>
            </div>
            <div className={styles.links}>
              {project.links.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <p className={styles.description}>{project.description}</p>

          <div className={styles.detail}>
            <h4>Architecture Highlights</h4>
            <ul>
              {project.architectureHighlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className={styles.detail}>
            <h4>Business Impact</h4>
            <p>{project.businessImpact}</p>
          </div>

          <TagList items={project.techStack} compact />
        </article>
      ))}
    </div>
  </section>
)

}