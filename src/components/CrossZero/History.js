import React from "react";
import "./History.css";

const History = (props) => {
  const [isFromStart, setIsFromStart] = React.useState(true);
  const [moves, setMoves] = React.useState([]);

  const changeSort = () => {
    setIsFromStart(!isFromStart);
  };

  React.useEffect(() => {
    const movesCopy = props.history.map((step, move) => {
    return(
      <li className="history__moves-item" key={move}>
        <button
          className={`history__step ${
            props.currentStep === move && "history__step_active"
          }`}
          type="button"
          onClick={() => props.onJumpTo(move)}
        >
          {move ? `Go to step ${move} (${step.activeCell.row + 1}, ${step.activeCell.column + 1})` : "To start"}
        </button>
      </li>
    )});
    !isFromStart && movesCopy.reverse();
    setMoves(movesCopy);
  }, [props, isFromStart]);

  return (
    <div className="history">
      <button
        className="history__change-sort"
        type="button"
        onClick={changeSort}
      >
        History {isFromStart ? <>&darr;</> : <>&uarr;</>}
      </button>
      <ol className="history__moves">{moves}</ol>
    </div>
  );
};

export default History;
