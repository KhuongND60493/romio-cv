import { useEffect, useState } from 'react'
import type { Profile } from '@/features/data/types.ts'
import { useTranslation } from 'react-i18next'
import { useAppModal } from '@/features/modal'
import styles from './HeroSection.module.css'

interface HeroSectionProps {
  profile: Profile
}

export const HeroSection = ({ profile }: HeroSectionProps) => {
  const { t } = useTranslation()
  const { openModal } = useAppModal()

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
  }

  const openCvChooserModal = () => {
    openModal(<CvChooserModal onDownload={handleDownloadCv} />)
  }

  const openCvViewerModal = () => {
    openModal(<CvViewerModal />)
  }

  useEffect(() => {
    const handleOpenCvModal = () => {
      openCvChooserModal()
    }
    const handleOpenCvViewer = () => {
      openCvViewerModal()
    }

    window.addEventListener('open-cv-modal', handleOpenCvModal)
    window.addEventListener('open-cv-viewer', handleOpenCvViewer)
    return () => {
      window.removeEventListener('open-cv-modal', handleOpenCvModal)
      window.removeEventListener('open-cv-viewer', handleOpenCvViewer)
    }
  }, [])

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
              <span key={cta.label} className={styles.cvActionPair}>
                <button
                  type="button"
                  className={styles[cta.variant]}
                  onClick={openCvChooserModal}
                >
                  {cta.label}
                </button>
                <button
                  type="button"
                  className={styles.secondary}
                  onClick={openCvViewerModal}
                >
                  {t('hero.viewCv')}
                </button>
              </span>
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

    </section>
  )
}

interface CvChooserModalProps {
  onDownload: (lang: 'en' | 'vi') => void
}

const CvChooserModal = ({ onDownload }: CvChooserModalProps) => {
  const { t } = useTranslation()
  const { closeModal } = useAppModal()

  return (
    <div
      className={styles.modalOverlay}
      role="dialog"
      aria-modal="true"
      aria-label={t('hero.cvModalTitle')}
    >
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>{t('hero.cvModalTitle')}</h3>
          <button
            type="button"
            className={styles.modalClose}
            onClick={closeModal}
            aria-label={t('hero.cvModalCancel')}
          >
            ×
          </button>
        </div>
        <p>{t('hero.cvModalDescription')}</p>
        <div className={styles.modalActions}>
          <button
            type="button"
            className={styles.primary}
            onClick={() => {
              onDownload('en')
              closeModal()
            }}
          >
            {t('hero.cvModalEn')}
          </button>
          <button
            type="button"
            className={styles.secondary}
            onClick={() => {
              onDownload('vi')
              closeModal()
            }}
          >
            {t('hero.cvModalVi')}
          </button>
        </div>
      </div>
    </div>
  )
}

const CvViewerModal = () => {
  const { t } = useTranslation()
  const { closeModal } = useAppModal()
  const [lang, setLang] = useState<'en' | 'vi'>('en')

  const fileName = lang === 'en' ? 'en_khuongnd_cv.pdf' : 'vi_khuongnd_cv.pdf'
  const pdfSrc = `${import.meta.env.BASE_URL}cv/${fileName}`

  return (
    <div className={styles.viewerModal} role="dialog" aria-modal="true" aria-label={t('hero.viewCv')}>
      <div className={styles.viewerHeader}>
        <div className={styles.viewerLangSwitch}>
          <button
            type="button"
            className={`${styles.viewerLangButton} ${lang === 'en' ? styles.viewerLangButtonActive : ''}`}
            onClick={() => setLang('en')}
          >
            {t('hero.cvModalEn')}
          </button>
          <button
            type="button"
            className={`${styles.viewerLangButton} ${lang === 'vi' ? styles.viewerLangButtonActive : ''}`}
            onClick={() => setLang('vi')}
          >
            {t('hero.cvModalVi')}
          </button>
        </div>
        <button
          type="button"
          className={styles.viewerClose}
          onClick={closeModal}
          aria-label={t('hero.cvModalCancel')}
        >
          ×
        </button>
      </div>

      <div className={styles.viewerBody}>
        <iframe
          title={t('hero.viewCv')}
          src={pdfSrc}
          className={styles.viewerFrame}
        />
      </div>
    </div>
  )
}
