import React from "react";
import { TranslationCrossZeroContext } from "../../contexts/translation/TranslationCrossZeroContext";

const Status = (props) => {
  const translation = React.useContext(TranslationCrossZeroContext);

  return (
    <h2
      className={`game__status ${props.isEndGame && "game__status_end"} ${props.isEndGame && (props.winner ? "game__status_end-res_victory" : "game__status_end-res_lose")}`}
    >
      {props.winner
        ? `${props.winner} ${translation.statusWon}`
        : props.isEndGame
          ? `${translation.statusDraw}`
          : `${translation.statusPlay}: ${props.isXPlaying ? "X" : "O"}`}
    </h2>
  );
};

export default Status;
