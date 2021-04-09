import React from "react";
import "./CrossZero.css";
import Board from "./Board";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const CrossZero = (props) => {
  const [history, setHistory] = React.useState([
    { squares: Array(9).fill(null) },
  ]);
  const [current, setCurrent] = React.useState({
    squares: Array(9).fill(null),
  });
  const [stepNumber, setStepNumber] = React.useState(0);
  const [isXPlaying, setIsXPlaying] = React.useState(true);
  // const [xIsNext, setXIsNext] = React.useState(true);
  const [winner, setWinner] = React.useState(null);
  const [isEndGame, setIsEndGame] = React.useState(false);

  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const squares = historyCopy[historyCopy.length - 1].squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = isXPlaying ? "X" : "O";
    setHistory(
      historyCopy.concat([
        { squares: squares }
      ])
    );
    setStepNumber(historyCopy.length);
    setIsXPlaying(!isXPlaying);
  };

  const handleAgain = () => {
    setStepNumber(0);
    setIsXPlaying(true);
    setHistory([
      { squares: Array(9).fill(null) },
    ]);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXPlaying(step % 2 === 0);
  };

  React.useEffect(() => {
    setCurrent(history[stepNumber]);
    setWinner(calculateWinner(current.squares));
    setIsEndGame(winner || stepNumber === 9);
  }, [history, stepNumber, current.squares, winner]);

  return (
    <section className="cross-zero">
      <h2
        className={`cross-zero__status ${
          isEndGame && "cross-zero__status_end-game"
        }`}
      >
        {winner ? (
          <>
            Won: <span className="cross-zero__winner">{winner}</span>
          </>
        ) : isEndGame ? (
          <>No one won</>
        ) : (
          <>
            Playing:{" "}
            <span className="cross-zero__player">{isXPlaying ? "X" : "O"}</span>
          </>
        )}
      </h2>
      <div className="cross-zero__field">
        <button
          className="cross-zero__button cross-zero__button_back"
          type="button"
        >
          &larr;
        </button>
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
        <button
          className="cross-zero__button cross-zero__button_next"
          type="button"
        >
          &rarr;
        </button>
      </div>
      <button
        className="cross-zero__again"
        type="button"
        onClick={handleAgain}
      >
        Again
      </button>
      <ol className="cross-zero__moves">
        {history.map((step, move) =>{
          return (
            <li className="cross-zero__moves-item" key={move}>
              <button className={`cross-zero__step ${stepNumber === move && "cross-zero__step_active"}`}type="button" onClick={() => jumpTo(move)}>
                {move ? `Go to step ${move}`: 'To start'}
              </button>
            </li>
          )
        })}
      </ol>
    </section>
  );
};

export default CrossZero;
