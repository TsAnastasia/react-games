import React from "react";

export const translationApp = {
  ru: {
    authorName: "Анастасия",
    authorLastName: "Циберная",
    projectName: "Игры на React",
    home: "Игры на React",
    crossZero: "Крестики-Нолики",
    memory: "Парочки",
    notFoundPageTitle: "404 - Страница не найдена",
    notFoundPageDescription: "Здесь ничего нет."
  },
  en: {
    authorName: "Anastasia",
    authorLastName: "Tsibernaya",
    projectName: "Games on React",
    home: "Some games on React",
    crossZero: "Tic tac toe",
    memory: "Memory (pairs)",
    notFoundPageTitle: "404 - Page not found",
    notFoundPageDescription: "There's nothing here."
  },
};

export const TranslationAppContext = React.createContext();
