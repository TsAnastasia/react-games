import React from "react";
import BoardCell from "./BoardCell";

const Board = (props) => {
  return (
    <div className={`board ${props.isEndGame && "board_game-end"}`}>
      {[...Array(3)].map((item, row) => (
        <div className="board__row" key={row}>
          {[...Array(3)].map((item, column) => (
            <BoardCell
              key={column}
              onClick={props.onClick}
              row={row}
              column={column}
              squares={props.squares}
              isActive={props.activeCell && props.activeCell.row === row && props.activeCell.column === column}
              isWinner={props.winnerCells && props.winnerCells.some(item => item === 3 * row + column)}
              isEndGame={props.isEndGame}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
