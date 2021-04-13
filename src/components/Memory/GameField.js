import React from "react";
import "./Memory.css";
import Card from "./Card";

const GameField = ({ cards, rotateCard }) => {
  return (
    <ul className="memory__cards">
      {cards.map((item) => (
        <Card key={item.id} card={item} onRotate={rotateCard} />
      ))}
    </ul>
  );
};

export default GameField;
