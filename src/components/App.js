import React from "react";
import { Route, Switch } from 'react-router-dom';
import { translationApp, TranslationAppContext } from "../contexts/translation/TranslationAppContext";
import { translationCroossZero, TranslationCrossZeroContext } from "../contexts/translation/TranslationCrossZeroContext";
import { translationMemory, TranslationMemoryContext } from "../contexts/translation/TranslationMemoryContext";
import './App.css';
import CrossZero from "./CrossZero/CrossZero";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Memory from "./Memory/Memory";
import NotFoundPage from "./NotFoundPage";

const App = () => {
  const [lang, setLang] = React.useState('en');

  return (
    <TranslationAppContext.Provider value={translationApp[lang]}>
      <div className="app">
        <Header setLang={setLang} />

        <main className="app__content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/cross-zeros">
              <TranslationCrossZeroContext.Provider value={translationCroossZero[lang]}>
                <CrossZero/>
              </TranslationCrossZeroContext.Provider>
            </Route>
            <Route exact path="/memory">
              <TranslationMemoryContext.Provider value={translationMemory[lang]}>
               <Memory />
              </TranslationMemoryContext.Provider>
            </Route>
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </main>

        <Footer />
      </div>
    </TranslationAppContext.Provider>
  );
};

export default App;
