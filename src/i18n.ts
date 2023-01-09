import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          "langTitle":  "EN",
          "menuHome": "Home",
          "menuRanking": "Ranking",
          "register": "Register for the next tournament",
          "rankingButton": "Ranking",
          "mainTitle": "The PFL is back!",
          "pflPresentation": "The PFL is an event project created by Yuzu Gaming and NSxC. This year the PFL is giving to the players the chance to win a travail for the EVO 2023",
          "offline": "12 Offline Rankings (October 2022 - April 2023)",
          "online": "6 Online Rankings (January 2023 - March 2023)",
          "top7": "The Top 7 will qualify for the finals",
          "lcq": "+1 place of qualification during the LCQ (April 2023)",
          "winner": "The winner of the PFL will win a plane ticket to EVO 2023"
        }
      },
      fr: {
        translation: {
          "langTitle":  "FR",
          "menuHome": "Accueil",
          "menuRanking": "Ranking",
          "register": "S'inscrire au prochain tournoi",
          "rankingButton": "Classement",
          "mainTitle": "La PFL est de retour !",
          "pflPresentation": "La PFL est un projet événementiel créé par Yuzu Gaming et NSxC. Cette année, la PFL offre aux joueurs la possibilité de gagner un voyage pour l'EVO 2023",
          "offline": "12 Rankings offline (Octobre 2022 - Avril 2023)",
          "online": "6 Rankings online (Janvier 2023 - Mars 2023)",
          "top7": "Le Top 7 sera qualifié pour les phases finales",
          "lcq": "+1 place qualificative lors du LCQ (Avril 2023)",
          "winner": "Le gagnant de la PFL remportera un billet d'avion pour l'EVO 2023"
        }
      }
    }
  });

export default i18n;
