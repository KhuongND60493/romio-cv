import type { AboutProfile } from '@/types/cv'
import { SectionHeading } from '@/components/section-heading/SectionHeading'
import { useTranslation } from 'react-i18next'
import styles from './AboutSection.module.css'

interface AboutSectionProps {
  about: AboutProfile
}

export const AboutSection = ({ about }: AboutSectionProps) => {
  const { t } = useTranslation();
  
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2012;
  const dynamicHeadline = about.headline.replace('{{years}}', experienceYears.toString());

  return (
  <section id="about" className={styles.section}>
    <SectionHeading
      eyebrow={t('sections.about')}
      title={dynamicHeadline}
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