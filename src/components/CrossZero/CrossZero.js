import React from "react";
import "./CrossZero.css";
import Board from "./Board";
import History from "./History";
import { TranslationCrossZeroContext } from "../../contexts/translation/TranslationCrossZeroContext";

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
      return {winner: squares[a], winnerCells: [a,b,c]};
    }
  }
  return {winner: null, winnerCells: null};
}

const CrossZero = (props) => {
  const translation = React.useContext(TranslationCrossZeroContext);

  const [history, setHistory] = React.useState([
    { squares: Array(9).fill(null) },
  ]);
  const [current, setCurrent] = React.useState({
    squares: Array(9).fill(null),
  });
  const [stepNumber, setStepNumber] = React.useState(0);
  const [isXPlaying, setIsXPlaying] = React.useState(true);
  const [winner, setWinner] = React.useState(null);
  const [winnerCells, setWinnerCells] = React.useState(null);
  const [isEndGame, setIsEndGame] = React.useState(false);

  const handleCellClick = (row, col) => {
    const index = row * 3 + col;
    const historyCopy = history.slice(0, stepNumber + 1);
    const squares = historyCopy[historyCopy.length - 1].squares.slice();
    if (calculateWinner(squares).winner || squares[index]) {
      return;
    }
    squares[index] = isXPlaying ? "X" : "O";
    setHistory(
      historyCopy.concat([{ 
        squares: squares, 
        activeCell: { row: row, column: col } 
      },])
    );
    setStepNumber(historyCopy.length);
    setIsXPlaying(!isXPlaying);
  };

  const handleAgainClick = () => {
    setStepNumber(0);
    setIsXPlaying(true);
    setHistory([history[0]]);
  }

  const hadbleBackClick = () => {
    jumpTo(stepNumber - 1);
  }

  const handleNextClick = () => {
    jumpTo(stepNumber + 1);
  }

  const jumpTo = (step) => {
    setStepNumber(step);
    setIsXPlaying(step % 2 === 0);
  };

  React.useEffect(() => {
    setCurrent(history[stepNumber]);
    const calcWin= calculateWinner(current.squares);
    setWinner(calcWin.winner);
    setWinnerCells(calcWin.winnerCells);
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
          className={`cross-zero__button ${stepNumber === 0 && "cross-zero__button_hidden"}`}
          type="button"
          onClick={hadbleBackClick}
        >
          &larr;
        </button>
        <Board 
          squares={current.squares} 
          onClick={handleCellClick}
          activeCell={current.activeCell || null}
          winnerCells={winnerCells} 
        />
        <button
          className={`cross-zero__button ${stepNumber === (history.length - 1) && "cross-zero__button_hidden"}`}
          type="button"
          onClick={handleNextClick}
        >
          &rarr;
        </button>
      </div>
      <button
        className="cross-zero__again"
        type="button"
        onClick={handleAgainClick}
      >
        {translation.againTitle}
      </button>
      <History 
        history={history} 
        onJumpTo={jumpTo} 
        currentStep={stepNumber}
      />
    </section>
  );
};

export default CrossZero;
