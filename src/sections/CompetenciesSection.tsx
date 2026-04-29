import { SectionHeading } from '../components/SectionHeading'
import type { Competency } from '../types/cv'
import styles from './CompetenciesSection.module.css'

interface CompetenciesSectionProps {
  competencies: Competency[]
}

export const CompetenciesSection = ({
  competencies,
}: CompetenciesSectionProps) => (
  <section id="skills" className={styles.section}>
    <SectionHeading
      eyebrow="Core Competencies"
      title="A fullstack architecture mindset across product, platform, and delivery."
      description="Each competency combines system thinking with practical implementation experience."
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
