import React from "react";
import { TranslationAppContext } from "../contexts/translation/TranslationAppContext";

const Footer = () => {
  const translation = React.useContext(TranslationAppContext);

  return (
    <footer className="app__footer">
      <p className="app__copyright">
        &copy;{` ${translation.projectName} ${new Date().getFullYear()}, ${translation.authorName} ${translation.authorLastName}`}
      </p>
    </footer>
  );
};

export default Footer;
