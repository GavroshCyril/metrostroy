import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import { enLang } from "./lang/en";
import { ruLang } from "./lang/ru";

i18n
  .use(initReactI18next)
  .use(detector)
  .init({
    debug: true,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: enLang,
      },
      ru: {
        translation: ruLang,
      },
    },
  });

export default i18n;
