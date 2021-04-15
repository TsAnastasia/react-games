import React from "react";
import { LoadingContext } from "../../contexts/LoadingContext";
import Picture from "../Picture";

const Card = ({ card, onRotate, isEndGame }) => {
  const isLoading = React.useContext(LoadingContext);

  const handleClick = () => {
    if (card.isOpen || !card.isHidden || isLoading) return;
    onRotate(card);
  };

  return (
    <li className="card" onClick={handleClick}>
      <div className={`card__area ${!card.isHidden && "card__area_hidden"}`}>
      {card.isHidden && <div className="card__area-image">
          <svg width="40" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 20h10.666m6.667-9.333l-6.667 9.32 6.667 9.347m9.333-22.67a5.334 5.334 0 01-10.666 0 5.334 5.334 0 0110.666 0zm0 26.649a5.334 5.334 0 01-10.666 0 5.334 5.334 0 0110.666 0zM12 19.988a5.334 5.334 0 01-10.667 0 5.334 5.334 0 0110.667 0z"
              stroke="#ccc"
              strokeWidth="2"
              strokeLinecap="square"
            />
          </svg>
        </div>}
      </div>
      <div className={`card__image ${card.isHidden && "card__image_hidden"} ${card.isOpen && "card__image_open"} ${isEndGame && "card__image_winner"}`}>
        {!card.isHidden && <Picture index={card.value} size="60" color={card.isOpen ? "#09f" : "#059"} />}
      </div>
    </li>
  );
};

export default Card;
