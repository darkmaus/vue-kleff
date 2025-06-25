import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import es from '../locales/es.json'
import ca from '../locales/ca.json'

export default createI18n({
  legacy: false,
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages: {
    en,
    es,
    ca
  }
}) 