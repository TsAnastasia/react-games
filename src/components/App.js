/* TODO Cross-Zero:
1. DONE: Show position (column, row) for each move.
2. DONE: Style selected step in history.
3. DONE: Rewrite Board with cycles for create cells.
4. DONE: Add switch to sort moves in history.
5. DONE: Highlight cells on win.
6. DONE: Show message when noone win. 
7. Add translation*/
import React from "react";
import { translationApp, TranslationAppContext } from "../contexts/translation/TranslationApp";
import { translationCroossZero, TranslationCrossZeroContext } from "../contexts/translation/TranslationCrossZeroContext";
import './App.css';
import CrossZero from "./CrossZero/CrossZero";

const App = () => {
  const [lang, setLang] = React.useState('en');

  return (
    <TranslationAppContext.Provider value={translationApp[lang]}>
      <div className="app">
        <header className="app__header">
            <div>
            <button type="button" onClick={()=> setLang('en')}>en</button>
            <button type="button" onClick={()=> setLang('ru')}>ru</button>
          </div>
          <h1 className="app__title">Croos-Zero</h1>
        </header>
        <main className="app__content">
          <TranslationCrossZeroContext.Provider value={translationCroossZero[lang]}>
            <CrossZero lang={lang}/>
          </TranslationCrossZeroContext.Provider>
        </main>
        <footer className="app__footer">
          <p className="app__copyright">
            &copy;{`${new Date().getFullYear()}`}{/* React Games */}, 
            {/* Анастасия&nbsp;Циберная */}
            {" "}Anastasia&nbsp;Tsibernaya
          </p>
        </footer>
      </div>
    </TranslationAppContext.Provider>
  );
};

export default App;
