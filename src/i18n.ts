import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

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
    translation: {
      nav: {
        about: 'About',
        skills: 'Skills',
        experience: 'Experience',
        projects: 'Projects',
        architecture: 'Architecture',
        education: 'Education',
        contact: 'Contact',
      },
      hero: {
        systemStatus: 'System Status: Online // Portfolio v2.0',
        downloadCv: 'Download CV',
      },
      footer: {
        builtWith: 'Built with Github-Pages, React, TypeScript, and Vite.',
        rights: '© {{year}} Romio Nguyen',
      },
      sections: {
        about: 'About',
        experience: 'Experience',
        projects: 'Projects',
        architecture: 'Architecture Focus',
        education: 'Education',
        competencies: 'Core Competencies',
        techStack: 'Tech Stack',
        contact: 'Contact'
      }
    },
  },
  vi: {
    translation: {
      nav: {
        about: 'Giới thiệu',
        skills: 'Kỹ năng',
        experience: 'Kinh nghiệm',
        projects: 'Dự án',
        architecture: 'Kiến trúc',
        education: 'Học vấn',
        contact: 'Liên hệ',
      },
      hero: {
        systemStatus: 'Trạng thái hệ thống: Trực tuyến // Portfolio v2.0',
        downloadCv: 'Tải CV',
      },
      footer: {
        builtWith: 'Được xây dựng với Github-Pages, React, TypeScript, và Vite.',
        rights: '© {{year}} Romio Nguyen',
      },
      sections: {
        about: 'Giới thiệu',
        experience: 'Kinh nghiệm',
        projects: 'Dự án',
        architecture: 'Trọng tâm Kiến trúc',
        education: 'Học vấn',
        competencies: 'Năng lực cốt lõi',
        techStack: 'Công nghệ',
        contact: 'Liên hệ'
      }
    },
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
