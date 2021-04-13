import React from "react";
import errorImage from "../images/not-found-page.svg";
import { TranslationAppContext } from "../contexts/translation/TranslationAppContext";

const NotFoundPage = () => {
  const translation = React.useContext(TranslationAppContext);

  return (
    <section>
      <img src={errorImage} alt="error"/>
      <div>
        <h2>{translation.notFoundPageTitle}</h2>
        <p>{translation.notFoundPageDescription}</p>
      </div>
    </section>
  );
};

export default NotFoundPage;
