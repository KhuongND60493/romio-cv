import { SectionHeading } from '../components/SectionHeading'
import type { ArchitectureHighlight } from '../types/cv'
import styles from './ArchitectureSection.module.css'

interface ArchitectureSectionProps {
  highlights: ArchitectureHighlight[]
}

export const ArchitectureSection = ({
  highlights,
}: ArchitectureSectionProps) => (
  <section id="architecture" className={styles.section}>
    <SectionHeading
      eyebrow="Architecture Highlights"
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
