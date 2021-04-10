import React from "react";
import { TranslationAppContext } from "../contexts/translation/TranslationAppContext";

const Footer = () => {
  const translation = React.useContext(TranslationAppContext);

  return (
    <footer className="app__footer">
      <p className="app__copyright">
        &copy; {/* React Games */} {`${new Date().getFullYear()}, ${translation.AuthorName} ${translation.AuthorLastName}`}
      </p>
    </footer>
  );
};

export default Footer;
