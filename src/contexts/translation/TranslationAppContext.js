import React from "react";

export const translationApp = {
  ru: {
    authorName: "Анастасия",
    authorLastName: "Циберная",
    projectName: "Игры на Реакт", 
    projectDescription: "Это простое приложение с некоторыми интерактивными играми разработано для понимания Реакта.",
    projectGamesTitle: "Игры",
    home: "Игры на React",
    homeLink: "На главную",
    crossZeros: "Крестики-Нолики",
    memory: "Парочки",
    notFoundPageTitle: "404 - Страница не найдена",
    notFoundPageDescription: "Здесь ничего нет."
  },
  en: {
    authorName: "Anastasia",
    authorLastName: "Tsibernaya",
    projectName: "Games on React",
    projectDescription: "This simple app with some interactive games is designed to understand the React.",
    projectGamesTitle: "Games",
    home: "Games on React",
    homeLink: "Home",
    crossZeros: "Tic tac toe",
    memory: "Memory (pairs)",
    notFoundPageTitle: "404 - Page not found",
    notFoundPageDescription: "There's nothing here."
  },
};

export const TranslationAppContext = React.createContext();
