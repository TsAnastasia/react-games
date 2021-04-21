import React from "react";
import errorImage from "../images/not-found-page.svg";
import { TranslationAppContext } from "../contexts/translation/TranslationAppContext";

const NotFoundPage = () => {
  const translation = React.useContext(TranslationAppContext);

  return (
    <section className="page-not-found">
      <img className="page-not-found__image" src={errorImage} alt="error"/>
      <div>
        <h2 className="page-not-found__title">{translation.notFoundPageTitle}</h2>
        <p className="page-not-found__description">{translation.notFoundPageDescription}</p>
      </div>
    </section>
  );
};

export default NotFoundPage;
