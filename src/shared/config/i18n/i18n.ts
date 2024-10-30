import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const lng = 'ru';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng,
    fallbackLng: lng,
    //debug: __IS_DEV__,
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    returnNull: false,
  });

export default i18n;
