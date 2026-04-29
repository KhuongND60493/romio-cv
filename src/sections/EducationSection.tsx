import { SectionHeading } from '../components/SectionHeading'
import type { CertificationItem, EducationItem } from '../types/cv'
import styles from './EducationSection.module.css'

interface EducationSectionProps {
  education: EducationItem[]
  certifications: CertificationItem[]
}

export const EducationSection = ({
  education,
  certifications,
}: EducationSectionProps) => (
  <section id="education" className={styles.section}>
    <SectionHeading
      eyebrow="Education & Certifications"
      title="Academic foundation combined with continuous architecture-focused learning."
      description="A mix of formal education and practical certifications that reinforce system-level thinking."
    />

    <div className={styles.grid}>
      <div className={styles.column}>
        <h3>Education</h3>
        {education.map((item) => (
          <article key={item.degree} className={styles.card}>
            <h4>{item.degree}</h4>
            <p>{item.institution}</p>
            <span>{item.duration}</span>
            <p>{item.note}</p>
          </article>
        ))}
      </div>

      <div className={styles.column}>
        <h3>Certifications</h3>
        {certifications.map((item) => (
          <article key={item.name} className={styles.card}>
            <h4>{item.name}</h4>
            <p>{item.issuer}</p>
            <span>{item.year}</span>
          </article>
        ))}
      </div>
    </div>
  </section>
)
