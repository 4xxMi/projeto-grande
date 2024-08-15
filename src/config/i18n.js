import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import { I18nManager } from 'react-native';

const resources = {
  en: {
    translation: {
      "Welcome": "Welcome",
      "Map": "Map",
      "Calendar": "Calendar",
      "Document Picker": "Document Picker",
      "File System": "File System",
      "Localization": "Localization"
    }
  },
  pt: {
    translation: {
      "Welcome": "Bem-vindo",
      "Map": "Mapa",
      "Calendar": "Calendário",
      "Document Picker": "Seletor de Documentos",
      "File System": "Sistema de Arquivos",
      "Localization": "Localização"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: Localization.locale,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;