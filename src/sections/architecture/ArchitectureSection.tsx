import { SectionHeading } from '../../components/section-heading/SectionHeading'
import type { ArchitectureHighlight } from '../../types/cv'
import { useTranslation } from 'react-i18next'
import styles from './ArchitectureSection.module.css'

interface ArchitectureSectionProps {
  highlights: ArchitectureHighlight[]
}

export const ArchitectureSection = ({
  highlights,
}: ArchitectureSectionProps) => {
  const { t } = useTranslation()
  return (
    <section id="architecture" className={styles.section}>
      <SectionHeading
        eyebrow={t('sections.architecture')}
        title="Patterns I use to turn complex product requirements into resilient systems."
        description="This section emphasizes technical architecture thinking beyond feature delivery."
      />

      <div className={styles.grid}>
        {highlights.map((item) => (
          <article key={item.title} className={styles.card}>
            <div className={styles.icon} aria-hidden="true">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
