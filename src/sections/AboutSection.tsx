import type { AboutProfile } from '../types/cv'
import { SectionHeading } from '../components/SectionHeading'
import styles from './AboutSection.module.css'

interface AboutSectionProps {
  about: AboutProfile
}

export const AboutSection = ({ about }: AboutSectionProps) => (
  <section id="about" className={styles.section}>
    <SectionHeading
      eyebrow="About"
      title={about.headline}
      description={about.description}
    />

    <div className={styles.grid}>
      {about.focusAreas.map((item) => (
        <article key={item} className={styles.card}>
          <span className={styles.marker} aria-hidden="true" />
          <p>{item}</p>
        </article>
      ))}
    </div>
  </section>
)
