import type { AboutProfile } from '../types/cv'
import { SectionHeading } from '../components/SectionHeading'
import { useTranslation } from 'react-i18next'
import styles from './AboutSection.module.css'

interface AboutSectionProps {
  about: AboutProfile
}

export const AboutSection = ({ about }: AboutSectionProps) => {
  const { t } = useTranslation();
  return (
  <section id="about" className={styles.section}>
    <SectionHeading
      eyebrow={t('sections.about')}
      title={about.headline}
      description={about.description}
    />

    <div className={styles.grid}>
      {about.focusAreas.map((item, index) => (
        <article key={item} className={styles.card}>
          <span className={styles.marker} aria-hidden="true">
            {String(index + 1).padStart(2, '0')}
          </span>
          <p>{item}</p>
        </article>
      ))}
    </div>
  </section>
)

}