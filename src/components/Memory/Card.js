import React from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import Picture from "../Picture";

const Card = ({ card, onRotate }) => {
  const isLoading = React.useContext(LoadingContext);

  const handleClick = () => {
    if (card.isOpen || !card.isHidden || isLoading) return;
    onRotate(card);
  };

  return (
    <li className="card" onClick={handleClick}>
      <div className="card__area">
        {`Memory`} {card.value}
      </div>
      <div className={`card__image ${card.isHidden && "card__image_hidden"}`}>
        {!card.isHidden && <Picture index={card.value} size="60" color={card.isOpen ? "#000" : "#0ff"} />}
      </div>
    </li>
  );
};

export default Card;
