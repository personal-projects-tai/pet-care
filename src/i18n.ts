import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import englishTranslation from './locales/en/translation.json'
import spanishTranslation from './locales/es/translation.json'
import frenchTranslation from './locales/fr/translation.json'
import brazilianTranslation from './locales/pt-BR/translation.json'
import portugueseTranslation from './locales/pt-PT/translation.json'

const resources = {
  en: {
    translation: englishTranslation
  },
  'pt-BR': {
    translation: brazilianTranslation
  },
  'pt-PT': {
    translation: portugueseTranslation
  },
  es: {
    translation: spanishTranslation
  },
  fr: {
    translation: frenchTranslation
  }
}

i18n.use(initReactI18next).init({ resources, lng: 'pt-BR', interpolation: { escapeValue: false } })

export default i18n
