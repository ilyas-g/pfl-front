import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// declare module 'i18next' {
//   interface DefaultTFuncReturn {
//     returnNull: false;
//   }
// }

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
    returnNull: false,
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
          "rankingButton": "Players qualified for the finals",
          "standingGGST": "Guilty Gear Strive Standing",
          "mainTitle": "The PFL is back!",
          "pflPresentation": "The PFL is an event project created by Yuzu Gaming and NSxC. This year the PFL is giving to the players the chance to win a travel for the EVO 2023!",
          "pflDates": "FROM NOVEMBER 2022, TO MAY 2023",
          "offline": "12 Offline Rankings (October 2022 - April 2023)",
          "online": "6 Online Rankings (January 2023 - March 2023)",
          "top7": "The Top 7 will be qualified for the finals",
          "lcq": "+1 place of qualification during the LCQ (April 2023)",
          "winner": "The winner of the PFL will win a plane ticket to EVO 2023",
          "copyright": "Parisienne Fighting Ligue © Yuzu Gaming.",
          "rights": "All rights reserved",
          "websiteby": "Website made by",
          "photosby": "Photos by",
          "venueTitle": "Venue",
          "venueText": "The PFL will take place from November 2022 to May 2023 at the following address:",
          "standingLCQ": "Last Chance Qualifier Standing",
          "titleFinalsPage": "Finals",
          "lastChanceToQualify": "Last chance to qualify for the finals",
          "lastChanceWinner": "Winner of the LCQ",
          "finalsResults": "Ranking of finalists",
          "first": "1st",
          "second": "2nd",
          "third": "3rd",
          "fourth": "4th",
          "fifth": "5th",
          "seventh": "7th",
          "finalsCongrats": "Congratulations Skyll who wins the second edition of the Parisienne Fighting League!",
          "finalsWinnerEVO": "He wins a trip to the EVO 2023!"
        }
      },
      fr: {
        translation: {
          "langTitle":  "FR",
          "menuHome": "Accueil",
          "menuRanking": "Classement",
          "rankingButton": "Joueurs qualifiés pour les finales",
          "standingGGST": "Classement Guilty Gear Strive",
          "mainTitle": "La PFL est de retour !",
          "pflPresentation": "La PFL est un projet événementiel créé par Yuzu Gaming et NSxC. Cette année, la PFL offre aux joueurs la possibilité de gagner un voyage pour l'EVO 2023 !",
          "pflDates": "De Novembre 2022 à Mai 2023",
          "offline": "12 Rankings offline (Octobre 2022 - Avril 2023)",
          "online": "6 Rankings online (Janvier 2023 - Mars 2023)",
          "top7": "Le Top 7 sera qualifié pour les phases finales",
          "lcq": "+1 place qualificative lors du LCQ (Avril 2023)",
          "winner": "Le gagnant de la PFL remportera un billet d'avion pour l'EVO 2023",
          "copyright": "Parisienne Fighting Ligue © Yuzu Gaming.",
          "rights": "Tout droits réservés",
          "websiteby": "Site réalisé par",
          "photosby": "Photos prises par",
          "venueTitle": "Plan d'accès",
          "venueText": "La PFL se déroulera du mois de Novembre 2022 à Mai 2023 à l'adresse suivante :",
          "standingLCQ": "Classement du Last Chance Qualifier",
          "titleFinalsPage": "Finales",
          "lastChanceToQualify": "Une dernière chance de se qualifier pour les finales",
          "lastChanceWinner": "Gagnant du LCQ",
          "finalsResults": "Classement des finalistes",
          "first": "1er",
          "second": "2ème",
          "third": "3ème",
          "fourth": "4ème",
          "fifth": "5ème",
          "seventh": "7ème",
          "finalsCongrats": "Félicitations à Skyll qui gagne cette second édition de la Parisienne Fighting Ligue !",
          "finalsWinnerEVO": "Il remporte également un voyage pour l'EVO 2023 !"
        }
      }
    }
  });

export default i18n;
