import { useTranslation } from 'react-i18next'
import styles from './LangToggle.module.css'

export const LangToggle = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  return (
    <div className={styles.container}>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={styles.button}
        data-active={currentLang === 'en'}
        aria-label="Switch to English"
      >
        <span className={styles.flag}>🇺🇸</span>
      </button>
      <span className={styles.separator}>|</span>
      <button
        onClick={() => i18n.changeLanguage('vi')}
        className={styles.button}
        data-active={currentLang === 'vi'}
        aria-label="Switch to Vietnamese"
      >
        <span className={styles.flag}>🇻🇳</span>
      </button>
    </div>
  )
}

