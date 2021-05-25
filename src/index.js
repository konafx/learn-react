import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import 'bulma/css/bulma.min.css';

const Square = (props) => {
  return (
    <button
    className="square"
    onClick={props.onClick}
    >
    {props.value}
    </button>
  );
}

const Board = ({ squares, onClick }) => {
  const renderSquare = i => {
    return (
      <Square
      value={squares[i]}
      onClick={() => onClick(i)}
      />
    );
  };

  return (
    <div>
    <div className="board-row">
    {renderSquare(0)}
    {renderSquare(1)}
    {renderSquare(2)}
    </div>
    <div className="board-row">
    {renderSquare(3)}
    {renderSquare(4)}
    {renderSquare(5)}
    </div>
    <div className="board-row">
    {renderSquare(6)}
    {renderSquare(7)}
    {renderSquare(8)}
    </div>
    </div>
  );
}

const Game = () => {
  const [state, setState] = useState({
    history: [{
      squares: Array(9).fill(null),
    }],
    stepNumber: 0,
    xIsNext: true,
  });
  console.log(state);

  const handleClick = i => {
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = [...current.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = state.xIsNext ? 'X' : 'O';
    setState({
      history: [
        ...history, { squares }
      ],
      stepNumber: history.length,
      xIsNext: !state.xIsNext,
    });
  }

  const jumpTo = (step) => {
    setState({
      history: [...state.history],
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    });
  }

  const current = state.history[state.stepNumber];
  const winner = calculateWinner(current.squares);

  let status = 'Next player: ' + (state.xIsNext ? 'X':'O');
  if (winner) {
    status = 'Winner: ' + winner;
  } 

  const moves = state.history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
      <button
      className="button is-small"
      onClick={() => jumpTo(move)}
      >
      {desc}
      </button>
      </li>
    );
  });

  return (
    <section className="section">
      <div className="container">
    <h1 className="title"> 三目並べ </h1>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => handleClick(i)}
          />
        </div>
        <div className="game-info content">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
    </section>
  );
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


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
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
