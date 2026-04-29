import { useTranslation } from 'react-i18next'
import styles from './ThemeToggle.module.css'

export const LangToggle = () => {
  const { i18n } = useTranslation()
  const currentLang = i18n.language

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'vi' : 'en')
  }

  return (
    <button
      onClick={toggleLanguage}
      className={styles.toggle}
      aria-label="Toggle language"
    >
      {currentLang.toUpperCase()}
    </button>
  )
}
