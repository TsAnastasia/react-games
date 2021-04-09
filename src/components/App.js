/* TODO Cross-Zero:
1. Show position (column, row) for each move.
2. Style selected step in history.
3. Rewrite Board with cycles for create cells.
4. DONE: Add switch to sort moves in history.
5. Highlight cells on win.
6. DONE: Show message when noone win. */
import React from "react";
import './App.css';
import CrossZero from "./CrossZero/CrossZero";

const App = () => {
  return (
    <div className="app">
      <header className="app__header">
        <h1 className="app__title">Croos-Zero</h1>
      </header>
      <main className="app__content">
        <CrossZero />
      </main>
      <footer className="app__footer">
        <p className="app__copyright">
          &copy; {`${new Date().getFullYear()}`} {/* React Games */},
          Анастасия&nbsp;Циберная
        </p>
      </footer>
    </div>
  );
};

export default App;
