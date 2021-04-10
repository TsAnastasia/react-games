import React from 'react';
import { TranslationAppContext } from '../contexts/translation/TranslationAppContext';
import './Header.css'

const Header = (props) => {
  const translation = React.useContext(TranslationAppContext);
  const langs = ['En', 'Ru'];
  const [activeLang, setActiveLang] = React.useState(0);

  const handleLangClick = (index) =>{
    props.setLang(langs[index].toLowerCase());
    setActiveLang(index);
  }

  return (
    <header className="app__header header">
      <ul className="header__langs">
        {langs.map((lang, index) => (
          <li key={lang} className="header__langs-item">
            <span 
              className={`header__lang ${activeLang === index && "header__lang_active"}`}
              onClick={()=>{handleLangClick(index)}}
            >{lang}</span>
          </li>
        ))}
      </ul>
      <h1 className="header__title">{translation.CrossZero}</h1>
    </header>
  );
};

export default Header;