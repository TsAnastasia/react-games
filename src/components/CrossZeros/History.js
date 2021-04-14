import React from "react";
import { TranslationCrossZeroContext } from "../../contexts/translation/TranslationCrossZeroContext";

const History = (props) => {
  const translation = React.useContext(TranslationCrossZeroContext);
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
          className={`history__step ${ props.currentStep === move && "history__step_active" }`}
          type="button"
          onClick={() => props.onJumpTo(move)}
        >
          {move ? `${translation.historyMove} ${move} (${step.activeCell.row + 1}, ${step.activeCell.column + 1})` : translation.historyStart}
        </button>
      </li>
    )});
    !isFromStart && movesCopy.reverse();
    setMoves(movesCopy);
  }, [props, isFromStart, translation]);

  return (
    <div className="history">
      <button
        className="history__title"
        type="button"
        onClick={changeSort}
      >
        {translation.historyTitle} {isFromStart ? <>&darr;</> : <>&uarr;</>}
      </button>
      <ol className="history__moves">{moves}</ol>
    </div>
  );
};

export default History;
