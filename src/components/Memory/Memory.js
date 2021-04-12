import React from 'react';
import "./Memory.css";

const Card = ({ card, onClick }) => {
  // const [isHidden, setIsHiddeen] = React.useState(false);

  const toggleClick = () => {
    if (card.isOpen) return;
    onClick(card);
  }

  return (
    <li className="memory__item card" onClick={toggleClick}>
      <div className="card__area">{`Memory`}</div>
      <div className={`card__image ${card.isHidden && "card__image_hidden"}`}>
        <p>{card.value}</p>
        {/* {`${card.value} O=${card.isOpen} h=${card.isHidden}`} */}
      </div>
    </li>
  );
};

const Memory = () => {
  const timeDelay = 1000;
  const [rotateCards, setRotateCards] = React.useState([])
  const values = [1, 4, 3, 5, 3, 1, 2, 6, 5, 4, 6, 2];
  const [cards, setCards] = React.useState(
    values.map((value, index) => {
      return { value, id: index, isHidden: true, isOpen: false };
    })
  );

  const toggleCardClick = (card) => {
    setRotateCards(
      rotateCards.concat([
        {
          id: card.id,
          value: card.value,
        },
      ])
    );
    setCards(cards.map(item => 
      item.id === card.id ? {...item, isHidden: !item.isHidden} : item
    ));
  }

  React.useEffect(()=> {    
    if (rotateCards.length === 2) {
      console.log()
      if (rotateCards[0].value === rotateCards[1].value) {
        setCards(
          cards.map((item) =>
            item.id === rotateCards[0].id || item.id === rotateCards[1].id
              ? { ...item, isOpen: true }
              : item
          )
        );
      } else {
        setTimeout( () =>
          setCards(
            cards.map((item) =>
              item.id === rotateCards[0].id || item.id === rotateCards[1].id
                ? { ...item, isHidden: true }
                : item
            )
          ),
          timeDelay
        );
      }

      setRotateCards([]);
    }

  }, [cards])


  return (
    <section className="game memory">
      <h2 className="game__status">Осталось </h2>
      <ul className="memory__cards">
        {cards.map((item) => 
          <Card key={item.id} card={item} onClick={toggleCardClick}/>
        )}
      </ul>
      <p className="game__description">Соотвнеси одинаковые</p>
    </section>
  );
};

export default Memory;
