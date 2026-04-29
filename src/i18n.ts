import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './data/en/i18n.json'
import viTranslation from './data/vi/i18n.json'

const LANGUAGE_STORAGE_KEY = 'romio-cv.language'
const DEFAULT_LANGUAGE = 'vi'

const getInitialLanguage = (): 'en' | 'vi' => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
  if (savedLanguage === 'en' || savedLanguage === 'vi') {
    return savedLanguage
  }

  return DEFAULT_LANGUAGE
}

const resources = {
  en: {
    translation: enTranslation,
  },
  vi: {
    translation: viTranslation,
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: getInitialLanguage(),
    fallbackLng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

if (typeof window !== 'undefined') {
  i18n.on('languageChanged', (language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  })
}

export default i18n
