import React from 'react';
import "./Memory.css";

const Card = ({ card, onClick }) => {
  // const [isHidden, setIsHiddeen] = React.useState(false);

  const toggleClick = () => {
    
    onClick(card);
  }

  return (
    <li className="memory__item card" onClick={toggleClick}>
      <div className="card__area"></div>
      <div className={`card__image ${card.isHidden && "card__image_hidden"}`}>
        <p>simvol</p>
      </div>
    </li>
  );
};

const Memory = () => {
  const values = [1, 4, 3, 5, 3, 1, 2, 6, 5, 4, 6, 2];
  const [cards, setCards] = React.useState(
    values.map((value, index) => {
      return { value, id: index, isHidden: true };
    })
  );

  const toggleCardClick = (card) => {
    setCards(cards.map(item => 
      item.id === card.id ? {...item, isHidden: !item.isHidden} : item
    ));
  }

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
