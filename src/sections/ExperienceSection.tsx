import { SectionHeading } from '../components/SectionHeading'
import { TagList } from '../components/TagList'
import type { ExperienceItem } from '../types/cv'
import { useTranslation } from 'react-i18next'
import styles from './ExperienceSection.module.css'

interface ExperienceSectionProps {
  experiences: ExperienceItem[]
}

export const ExperienceSection = ({
  experiences,
}: ExperienceSectionProps) => {
  const { t } = useTranslation();
  return (
  <section id="experience" className={styles.section}>
    <SectionHeading
      eyebrow={t('sections.experience')}
      title="Leading teams and systems from architecture strategy to production operations."
      description="A concise timeline of roles that combine delivery execution with platform thinking."
    />

    <div className={styles.timeline}>
      {experiences.map((item) => (
        <article key={`${item.company}-${item.role}`} className={styles.card}>
          <div className={styles.meta}>
            <span>{item.duration}</span>
            <span>{item.location}</span>
          </div>
          <h3>{item.role}</h3>
          <h4>{item.company}</h4>
          <p>{item.summary}</p>

          <div className={styles.columns}>
            <div>
              <h5>Responsibilities</h5>
              <ul>
                {item.responsibilities.map((responsibility) => (
                  <li key={responsibility}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h5>Achievements</h5>
              <ul>
                {item.achievements.map((achievement) => (
                  <li key={achievement}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          <TagList items={item.techStack} compact />
        </article>
      ))}
      </div>
    </section>
  )
}
