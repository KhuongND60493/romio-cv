import { SectionHeading } from '@/components/section-heading/SectionHeading'
import type { CertificationItem, EducationItem } from '@/features/data/types.ts'
import { useTranslation } from 'react-i18next'
import styles from './EducationSection.module.css'

interface EducationSectionProps {
  education: EducationItem[]
  certifications: CertificationItem[]
}

export const EducationSection = ({
  education,
  certifications,
}: EducationSectionProps) => {
  const { t } = useTranslation()
  return (
    <section id="education" className={styles.section}>
      <SectionHeading
        eyebrow={t('sections.education')}
        title="Academic foundation combined with continuous architecture-focused learning."
        description="A mix of formal education and practical certifications that reinforce system-level thinking."
      />

      <div className={styles.grid}>
        <div className={styles.column}>
          <h3>Education</h3>
          {education.map((item) => (
            <article key={item.degree} className={styles.card}>
              <div className={styles.cardHeader}>
                {item.logoUrl && (
                  <img
                    src={
                      item.logoUrl.startsWith('http')
                        ? item.logoUrl
                        : `${import.meta.env.BASE_URL}${item.logoUrl}`
                    }
                    alt={item.institution}
                    className={styles.logo}
                  />
                )}
                <div>
                  <h4>{item.degree}</h4>
                  <p>{item.institution}</p>
                  {item.duration && <span>{item.duration}</span>}
                </div>
              </div>
              <p className={styles.note}>{item.note}</p>
            </article>
          ))}
        </div>

        <div className={styles.column}>
          <h3>Certifications</h3>
          {certifications.map((item) => (
            <article key={item.name} className={`${styles.card} ${styles.certCard}`}>
              <div className={styles.cardHeader}>
                {item.logoUrl ? (
                  <img
                    src={`${import.meta.env.BASE_URL}${item.logoUrl}`}
                    alt={item.issuer}
                    className={styles.logo}
                  />
                ) : null}
                <div>
                  <h4>{item.name}</h4>
                  <p>{item.issuer}</p>
                </div>
              </div>
              <span className={styles.yearBadge}>{item.year}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
