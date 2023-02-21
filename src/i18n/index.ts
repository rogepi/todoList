import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from '../assets/locales/en-US.json'
import zh from '../assets/locales/zh-CN.json'

const resources = {
  'en-US': {
    translation: enUS
  },
  'zh-CN': {
    translation: zh
  },
  zh: {
    translation: zh
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en-US", // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export default i18n