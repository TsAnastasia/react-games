/* TODO Cross-Zero:
1. Show position (column, row) for each move.
2. Style selected step in history.
3. Rewrite Board with cycles for create cells.
4. Add switch to sort moves in history.
5. Highlight cells on win.
6. Show message when noone win. */
import React from 'react';
import CrossZero from './CrossZero/CrossZero';

const App = () =>{
  return (
    <>
      <header></header>
      <main>
        <CrossZero />
      </main>
      <footer></footer>
    </>
  )
}

export default App;