import "./Memory.css";

const Card = () => {
  return (
    <li className="card-item">
      <div className="card">
        <p>simvol</p>
      </div>
    </li>
  );
};

const Memory = () => {
  return (
    <section className="game">
      <h2>Осталось </h2>
      <ul className="cards">
        {[...Array(12)].map((item, index) => 
          <Card key={index} />
        )}
      </ul>
    </section>
  );
};

export default Memory;
