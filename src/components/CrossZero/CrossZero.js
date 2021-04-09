import React from 'react';
import './CrossZero.css';
import Board from './Board';

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

class CrossZero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true,
    }
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ 
        squares: squares, 
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const isEndGame = winner || history.length === 10;
    const moves = history.map((step, move) => {
      const desc = move ? "Перейти к ходу #" + move : "К началу игры";
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
    return (
      <section className="cross-zero">
        <h2 className={`cross-zero__status ${isEndGame && "cross-zero__status_end-game"}`}>
          {winner ? (
            <>
              Won: <span className="cross-zero__winner">
                {winner}
              </span>
            </>
          ) : isEndGame ? (
            <>No one won</>
          ) : (
            <>
              Next move: <span className="cross-zero__player">
                {this.state.xIsNext ? "X" : "O"}
              </span>
            </>
          )}
        </h2>
        <div className="cross-zero__field">
          <button className="cross-zero__button cross-zero__button_back" type="button">&larr;</button>
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
          <button className="cross-zero__button cross-zero__button_next" type="button">&rarr;</button>
        </div>
        <button className="cross-zero__again" type="button">Again</button>
        <ol className="cross-zero__moves">{moves}</ol>
      </section>
    );
  }
}

export default CrossZero;