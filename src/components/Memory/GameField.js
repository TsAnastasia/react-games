import React from "react";
import Card from "./Card";

const GameField = ({ cards, rotateCard, isEndGame }) => {
  return (
    <ul className="memory__game-field">
      {cards.map((item) => (
        <Card key={item.id} card={item} onRotate={rotateCard} isEndGame={isEndGame}/>
      ))}
    </ul>
  );
};

export default GameField;
