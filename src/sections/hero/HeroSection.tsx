import type { Profile } from '../../types/cv'
import { useTranslation } from 'react-i18next'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  profile: Profile
}

export const HeroSection = ({ profile }: HeroSectionProps) => {
  const { t } = useTranslation()

  const formattedTitle = profile.hero.title.replace(
    /(Architect|Engineer|Kiến trúc sư|Kỹ sư)/gi,
    '<span>$1</span>',
  )

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.hudElement} aria-hidden="true" />
      <div className={styles.hudElement2} aria-hidden="true" />

      <div className={styles.copy}>
        <div className={styles.kicker}>{t('hero.systemStatus')}</div>

        <h1>{profile.hero.fullName}</h1>

        <p
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: formattedTitle }}
        />

        <p className={styles.tagline}>{profile.hero.tagline}</p>

        <div className={styles.ctaGroup}>
          {profile.ctas.map((cta) => (
            <a
              key={cta.label}
              href={cta.href}
              className={styles[cta.variant]}
              download={cta.label === 'Download CV'}
            >
              {cta.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
