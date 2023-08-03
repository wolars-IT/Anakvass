import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../../../public/locales/en.json"
import uk from "../../../public/locales/uk.json"


i18n.use(initReactI18next).init({
  lng: "uk",
  debug: true,
  fallbackLng: "en",
  languages: ["en", "uk"],
  resources: { 
    en: {
      translation: en
    },
    uk: {
      translation: uk
    },
  },
});

export default i18n;
