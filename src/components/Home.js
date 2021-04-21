import React from "react";
import { Link } from "react-router-dom";
import { TranslationAppContext } from "../contexts/translation/TranslationAppContext";
import { BASE_URL } from '../utils/constants';

const Home = () => {
  const translation = React.useContext(TranslationAppContext);

  return (
    <section className="page-home">
      <p className="page-home__description">{translation.projectDescription}</p>
      <nav className="page-home__nav">
        <ul className="page-home__games">
          <h2 className="page-home__games-title">{translation.projectGamesTitle}</h2>
          <li className="page-home__games-item">
            <Link className="page-home__link app__link" to={`${BASE_URL}/cross-zeros`}>
              {translation.crossZeros}
            </Link>
          </li>
          <li className="page-home__games-item">
            <Link className="page-home__link app__link" to={`${BASE_URL}/memory`}>
              {translation.memory}
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Home;
