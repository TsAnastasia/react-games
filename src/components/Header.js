import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { TranslationAppContext } from '../contexts/translation/TranslationAppContext';
import { BASE_URL } from '../utils/constants';
import NavBar from './NavBar';

const Header = (props) => {
  const translation = React.useContext(TranslationAppContext);
  const langs = ['En', 'Ru'];
  const [activeLang, setActiveLang] = React.useState(0);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLangClick = (index) => {
    props.setLang(langs[index].toLowerCase());
    setActiveLang(index);
  };

  const handleButtonMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="app__header">
      <div className="header">
        <ul className="header__langs">
          {langs.map((lang, index) => (
            <li key={lang} className="header__langs-item">
              <span
                className={`app__link header__lang ${
                  activeLang === index && "header__lang_active"
                }`}
                onClick={() => handleLangClick(index)}
              >
                {lang}
              </span>
            </li>
          ))}
        </ul>
        <h1 className="header__title">
          <Switch>
            <Route exact path={`${BASE_URL}`}>
              {translation.home}
            </Route>
            <Route path={`${BASE_URL}/cross-zeros`}>
              {translation.crossZeros}
            </Route>
            <Route path={`${BASE_URL}/memory`}>{translation.memory}</Route>
            <Route path="*">
              <Link to={`${BASE_URL}`} className="app__link app__link_title">
                {translation.home}
              </Link>
            </Route>
          </Switch>
        </h1>
        <button className="header__button-menu" onClick={handleButtonMenuClick}>
          <svg width="25" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 2h25M0 18h25M0 10h25" stroke="#000" strokeWidth="2"/>
          </svg>
        </button>
      </div>
      {isMenuOpen &&
      <NavBar onClose={() => setIsMenuOpen(false)}/>}
    </header>
  );
};

export default Header;