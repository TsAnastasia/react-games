import React from "react";
import "./Board.css";

const Board = (props) => {
  const renderSquare = (i) => {
    return (
      <button 
        key={i} 
        className="board__cell" 
        onClick={() => props.onClick(i)}
      >
        {props.squares[i]}
      </button>
    );
  };

  return (
    <div className="board">
      {[...Array(3)].map((item, row) => (
        <div className="board__row" key={row}>
          {[...Array(3)].map((item, column) => renderSquare(3 * row + column))}
        </div>
      ))}
    </div>
  );
};

export default Board;
