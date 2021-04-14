import React from "react";
import "../../styles/Memory.css";
import { TIME_DELAY } from "../../utils/constants";
import { MEMORY_MAX_PAIR_CARDS } from "../../utils/constants";
import { LoadingContext } from "../../contexts/LoadingContext";
import GameField from "./GameField";
import Setting from "./Setting";
import Picture from "../Picture";

const Memory = () => {
  const [countPairCards, setCountPairCards] = React.useState(6);
  const [values, setValues] = React.useState([])
  const [cards, setCards] = React.useState([]);
  const [openCards, setOpenCards] = React.useState({ counter: 0, values: [] });
  const [rotateCards, setRotateCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isEndGame, setIsEndGame] = React.useState(false);

  const handleCardRotate = (card) => {
    setRotateCards(
      rotateCards.concat([
        {
          id: card.id,
          value: card.value,
        },
      ])
    );
    setCards(
      cards.map((item) =>
        item.id === card.id ? { ...item, isHidden: !item.isHidden } : item
      )
    );
  };

  const handleCardsHide = () => {
    setIsLoading(true);
    setTimeout(() => {
      setCards(
        cards.map((item) =>
          item.id === rotateCards[0].id || item.id === rotateCards[1].id
            ? { ...item, isHidden: true }
            : item
        )
      );
      setIsLoading(false);
    }, TIME_DELAY);
  };

  const handleCardOpen = () => {
    setTimeout(() => {
      setCards(
        cards.map((item) =>
          item.id === rotateCards[0].id || item.id === rotateCards[1].id
            ? { ...item, isOpen: true }
            : item
        )
      );
      setOpenCards({
        ...openCards,
        counter: openCards.counter + 2,
        values: openCards.values.concat(rotateCards[0].value),
      });
      console.log()
      setIsLoading(false);
      if (openCards.counter + 2 === countPairCards * 2) {
        setIsEndGame(true);
      }
    }, TIME_DELAY);
  };

  const handleGameRestart = () => {
    const valuesGenerated = [...Array(MEMORY_MAX_PAIR_CARDS)].map((item, index) => index);
    valuesGenerated.sort(() => Math.random() - 0.5);
    const values = valuesGenerated.slice(0, countPairCards) 
    setValues(values);
    const valuesDublicated = values
      .concat(values)
      .sort(() => Math.random() - 0.5);
    setCards(
      valuesDublicated.map((value, index) => {
        return { value, id: index, isHidden: true, isOpen: false };
      })
    );
    setOpenCards({ counter: 0, values: [] });
    setIsEndGame(false);
  };

  const handleCountCardsChange = (count) => {
    setCountPairCards(count);
  };

  React.useEffect(() => {
    handleGameRestart();
  }, []);

  React.useEffect(() => {
    handleGameRestart();
  }, [countPairCards]);

  React.useEffect(() => {
    if (rotateCards.length === 2) {
      if (rotateCards[0].value === rotateCards[1].value) {
        handleCardOpen();
      } else {
        handleCardsHide();
      }
      setRotateCards([]);
    }
  }, [rotateCards]);

  return (
    <section className="game memory">
      <h2 className={`game__status ${isEndGame && "game__status_end-res_victory game__status_end"}`}>
        {isEndGame
          ? `you won`
          : `open = ${openCards.counter} do = ${
              countPairCards * 2 - openCards.counter
            }`}
      </h2>
      <Setting
        onRestart={handleGameRestart}
        onChangePairCards={handleCountCardsChange}
        countPairCard={countPairCards}
      />
      <LoadingContext.Provider value={isLoading}>
        <GameField rotateCard={handleCardRotate} cards={cards} />
      </LoadingContext.Provider>
      <p className="game__description">Description</p>
      <div className="memory__images">
        {values.map(value =>
          <Picture key={value} color={`${openCards.values.some(item => value === item)? "#ff0" : "#0ff"}`} index={value} />)}
      </div>
    </section>
  );
};

export default Memory;
