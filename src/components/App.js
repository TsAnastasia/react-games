/* TODO Cross-Zero:
1. Show position (column, row) for each move.
2. Style selected step in history.
3. Rewrite Board with cycles for create cells.
4. Add switch to sort moves in history.
5. Highlight cells on win.
6. Show message when noone win. */
import React from "react";
import CrossZero from "./CrossZero/CrossZero";

const App = () => {
  return (
    <div className="page">
      <header className="page__header">
        <h1 class="page__title">Croos-Zero</h1>
      </header>
      <main className="page__content">
        <CrossZero />
      </main>
      <footer className="page__footer">
        <p className="page__footer-copyright">
          &copy; {`${new Date().getFullYear()}`} {/* React Games */},
          Анастасия&nbsp;Циберная
        </p>
      </footer>
    </div>
  );
};

export default App;
