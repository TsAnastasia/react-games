import React from "react";
import { TranslationCrossZeroContext } from "../../contexts/translation/TranslationCrossZeroContext";

const Status = (props) => {
  const translation = React.useContext(TranslationCrossZeroContext);

  return (
    <h2
      className={`cross-zero__status ${props.isEndGame && "cross-zero__status_end-game"}`}
    >
      {props.winner
        ? `${translation.statusWon}: ${props.winner}`
        : props.isEndGame
          ? `${translation.statusDraw}`
          : `${translation.statusPlay}: ${props.isXPlaying ? "X" : "O"}`}
    </h2>
  );
};

export default Status;
