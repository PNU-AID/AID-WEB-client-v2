import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import tranEn from './en.json';
import tranKo from './ko.json';

const resources = {
  en: { translation: tranEn },
  ko: { translation: tranKo },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ko',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
