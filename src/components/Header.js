import React from 'react';
import { TranslationAppContext } from '../contexts/translation/TranslationApp';
import './Header.css'

const Header = (props) => {
  const translation = React.useContext(TranslationAppContext);

  return (
    <header className="app__header header">
      <li className="header__langs">
        <button type="button" onClick={() => props.setLang("en")}>
          en
        </button>
        <button type="button" onClick={() => props.setLang("ru")}>
          ru
        </button>
      </li>
      <h1 className="header__title">{translation.CrossZero}</h1>
    </header>
  );
};

export default Header;