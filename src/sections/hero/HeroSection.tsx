import { useState } from 'react'
import type { Profile } from '@/features/data/types.ts'
import { useTranslation } from 'react-i18next'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  profile: Profile
}

export const HeroSection = ({ profile }: HeroSectionProps) => {
  const { t } = useTranslation()
  const [isCvModalOpen, setIsCvModalOpen] = useState(false)

  const formattedTitle = profile.hero.title.replace(
    /(Architect|Engineer|Kiến trúc sư|Kỹ sư)/gi,
    '<span>$1</span>',
  )

  const handleDownloadCv = (lang: 'en' | 'vi') => {
    const fileName = lang === 'en' ? 'en_khuongnd_cv.pdf' : 'vi_khuongnd_cv.pdf'
    const href = `${import.meta.env.BASE_URL}cv/${fileName}`
    const link = document.createElement('a')
    link.href = href
    link.download = fileName
    document.body.appendChild(link)
    link.click()
    link.remove()
    setIsCvModalOpen(false)
  }

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
            cta.variant === 'primary' ? (
              <button
                key={cta.label}
                type="button"
                className={styles[cta.variant]}
                onClick={() => setIsCvModalOpen(true)}
              >
                {cta.label}
              </button>
            ) : (
              <a
                key={cta.label}
                href={cta.href}
                className={styles[cta.variant]}
              >
                {cta.label}
              </a>
            )
          ))}
        </div>
      </div>

      {isCvModalOpen && (
        <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-label={t('hero.cvModalTitle')}>
          <div className={styles.modal}>
            <h3>{t('hero.cvModalTitle')}</h3>
            <p>{t('hero.cvModalDescription')}</p>
            <div className={styles.modalActions}>
              <button type="button" className={styles.primary} onClick={() => handleDownloadCv('en')}>
                {t('hero.cvModalEn')}
              </button>
              <button type="button" className={styles.secondary} onClick={() => handleDownloadCv('vi')}>
                {t('hero.cvModalVi')}
              </button>
              <button type="button" className={styles.ghost} onClick={() => setIsCvModalOpen(false)}>
                {t('hero.cvModalCancel')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
