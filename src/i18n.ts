import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import fr from "./fr.json";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {en, fr};

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "offline": "12 Offline Rankings (October 2022 - April 2023)",
      "online": "6 Online Rankings (January 2023 - March 2023)",
      "top7": "The Top 7 will qualify for the finals",
      "lcq": "+1 place of qualification during the LCQ (April 2023)",
      "winner": "The winner of the PFL will win a plane ticket to EVO 2023"
    }
  },
  fr: {
    translation: {
      "offline": "12 Rankings offline (Octobre 2022 - Avril 2023)",
      "online": "6 Rankings online (Janvier 2023 - Mars 2023)",
      "top7": "Le Top 7 sera qualifié pour les phases finales",
      "lcq": "+1 place qualificative lors du LCQ (Avril 2023)",
      "winner": "Le gagnant de la PFL remportera un billet d'avion pour l'EVO 2023"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;
