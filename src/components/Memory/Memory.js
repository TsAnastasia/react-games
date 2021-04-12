import React from 'react';
import { LoadingContext } from '../../contexts/LoadingContext';
import "./Memory.css";

const Card = ({ card, onRotate }) => {
  const isLoading = React.useContext(LoadingContext);
  const handleClick = () => {
    if (card.isOpen || isLoading) return;
    onRotate(card);
  }

  return (
    <li className="memory__item card" onClick={handleClick}>
      <div className="card__area">{`Memory`} {card.value}</div>
      <div className={`card__image ${card.isHidden && "card__image_hidden"}`}>
        <p>{card.value}</p>
        {/* {`${card.value} O=${card.isOpen} h=${card.isHidden}`} */}
      </div>
    </li>
  );
};

const CardsArea = ({cards, rotateCard}) => {
  return (
    <>
    <ul className="memory__cards">
      {cards.map((item) => (
        <Card key={item.id} card={item} onRotate={rotateCard} />
      ))}
    </ul>
    </>
  );
};

const Memory = () => {
  const timeDelay = 500;
  const simvols = [1, 2, 3, 4, 5, 6];
  //const [simvolsPlay, setSimvolsPlay] = React.useState([]);
  //const countCard = 4;
  const countCardPairs = 2;
  const [openCards, setOpenCards] = React.useState({counter: 0})
  const [rotateCards, setRotateCards] = React.useState([])
  const [cards, setCards] = React.useState([]);
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
  }

  const handleCardsHide = () => {
    setIsLoading(true);
    setTimeout( () => {
      setCards(
        cards.map((item) =>
          item.id === rotateCards[0].id || item.id === rotateCards[1].id
            ? { ...item, isHidden: true }
            : item
        )
      )
      setIsLoading(false)},
      timeDelay
    );
  }

  const handleCardOpen = () => {
    setTimeout(() => {
      setCards(
        cards.map((item) =>
          item.id === rotateCards[0].id || item.id === rotateCards[1].id
            ? { ...item, isOpen: true }
            : item
        )
      );
      setOpenCards({ ...openCards, counter: openCards.counter + 2 });
      setIsLoading(false);
      if (openCards.counter + 2 === countCardPairs * 2) {
        setIsEndGame(true);
      }
    }, timeDelay);
  };

  const handleGameAgain = () => {
    simvols.sort(() => Math.random() - 0.5);
    const simvolsGame = simvols.slice(0, countCardPairs);
    const values = simvolsGame.concat(simvolsGame).sort(() => Math.random() - 0.5);
    setCards(
      values.map((value, index) => {
        return { value, id: index, isHidden: true, isOpen: false };
      })
    );
    setOpenCards({...openCards, counter: 0});
    setIsEndGame(false);
  }

  React.useEffect(()=>{
    handleGameAgain();
  }, [])

  React.useEffect(()=> {    
    if (rotateCards.length === 2) {
      
      if (rotateCards[0].value === rotateCards[1].value) {
        handleCardOpen();
      } else {
        handleCardsHide();
      }
      setRotateCards([]);
    }
  }, [rotateCards])


  return (
    <section className="game memory">
      <h2 className="game__status">{isEndGame ? `you won`: `open = ${openCards.counter} do = ${countCardPairs * 2 - openCards.counter}`}</h2>
      <LoadingContext.Provider value={isLoading}>
        <CardsArea rotateCard={handleCardRotate} cards={cards}/>
      </LoadingContext.Provider>
      <div className="game__settings">
        <button type="button" className="setting__again" onClick={handleGameAgain}>again</button>
      </div>
      <p className="game__description">Соотвнеси одинаковые</p>
    </section>
  );
};

export default Memory;
