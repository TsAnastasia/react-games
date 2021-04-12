import React from "react";
import { translationApp, TranslationAppContext } from "../contexts/translation/TranslationAppContext";
import { translationCroossZero, TranslationCrossZeroContext } from "../contexts/translation/TranslationCrossZeroContext";
import './App.css';
import CrossZero from "./CrossZero/CrossZero";
import Footer from "./Footer";
import Header from "./Header";
import Memory from "./Memory/Memory";

const App = () => {
  const [lang, setLang] = React.useState('en');

  return (
    <TranslationAppContext.Provider value={translationApp[lang]}>
      <div className="app">
        <Header setLang={setLang} />
        <main className="app__content">
          <Memory />
          {/* <TranslationCrossZeroContext.Provider value={translationCroossZero[lang]}>
            <CrossZero lang={lang}/>
          </TranslationCrossZeroContext.Provider> */}
        </main>
        <Footer />
      </div>
    </TranslationAppContext.Provider>
  );
};

export default App;
