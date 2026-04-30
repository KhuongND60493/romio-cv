import { SectionHeading } from '@/components/section-heading/SectionHeading'
import type { Competency } from '@/features/data/types.ts'
import { useTranslation } from 'react-i18next'
import styles from './CompetenciesSection.module.css'

interface CompetenciesSectionProps {
  competencies: Competency[]
}

export const CompetenciesSection = ({
  competencies,
}: CompetenciesSectionProps) => {
  const { t } = useTranslation();
  return (
  <section id="skills" className={styles.section}>
    <SectionHeading
      eyebrow={t('sections.competencies')}
      title={t('skills.competenciesTitle')}
      description={t('skills.competenciesDescription')}
    />

    <div className={styles.grid}>
      {competencies.map((item) => (
        <article key={item.title} className={styles.card}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
)
}
