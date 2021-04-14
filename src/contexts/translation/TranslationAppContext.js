import React from "react";

export const translationApp = {
  ru: {
    authorName: "Анастасия",
    authorLastName: "Циберная",
    projectName: "Игры на React", 
    projectDescription: "ru description",
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
    projectDescription: "en description",
    home: "Games on React",
    crossZero: "Tic tac toe",
    memory: "Memory (pairs)",
    notFoundPageTitle: "404 - Page not found",
    notFoundPageDescription: "There's nothing here."
  },
};

export const TranslationAppContext = React.createContext();
