import React from "react";
import Card from "./Card";

const GameField = ({ cards, rotateCard }) => {
  return (
    <ul className="memory__game-field">
      {cards.map((item) => (
        <Card key={item.id} card={item} onRotate={rotateCard} />
      ))}
    </ul>
  );
};

export default GameField;
