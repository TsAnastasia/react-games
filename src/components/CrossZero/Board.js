import React from "react";
import "./Board.css";
import BoardCell from "./BoardCell";

const Board = (props) => {
  return (
    <div className="board">
      {[...Array(3)].map((item, row) => (
        <div className="board__row" key={row}>
          {[...Array(3)].map((item, column) => (
            <BoardCell
              key={column}
              onClick={props.onClick}
              row={row}
              column={column}
              squares={props.squares}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
