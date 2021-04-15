import React from "react";
import { NavLink } from "react-router-dom";
import { TranslationAppContext } from "../contexts/translation/TranslationAppContext";
import { BASE_URL } from "../utils/constants";

const NavBar = ({ onClose }) => {
  const translation = React.useContext(TranslationAppContext);
  const MenuItem = [
    {title: translation.homeLink, link: ""},
    {title: translation.crossZeros, link: "/cross-zeros"},
    {title: translation.memory, link: "/memory"},
  ];

  const handleLinkClick = () => {
    onClose();
  };

  const handleMenuClose = (event) => {
    if (!event.target.closest('.app__nav')) {
      onClose();
    }
  }

  React.useEffect(()=>{
    document.addEventListener("click", handleMenuClose);
    return () => {document.removeEventListener("click", handleMenuClose);}
  })

  return (
    <nav className="app__nav">
      <ul className="menu">
        {MenuItem.map((item, index) => 
          <li key={index} className="menu__item">
            <NavLink 
              exact to={`${BASE_URL}${item.link}`} 
              className="menu__link app__link" 
              activeClassName="menu__link_active" 
              onClick={handleLinkClick}
            >{item.title}</NavLink>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar;