import React from "react";

export const translationMemory = {
  ru: {
    statusOpened: "открыто",
    statusToOpen: "еще открыть",
    statusWon: "Победа",
    settingAgain: "Заново",
    settingCountCards: "Количество карт",
    description: `Найдите парные карточки.\n Нажмите на карточку, чтобы перевернуть.`,
  },
  en: {
    statusOpened: "opened",
    statusToOpen: "to open",
    statusWon: "Victory",
    settingAgain: "Again",
    description: "Find the matching cards.\n Click on card to rotate.",
  },
};

export const TranslationMemoryContext = React.createContext();