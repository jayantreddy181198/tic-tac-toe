import { useState } from "react";
import Board from "./Board";
import './Game.css';

export default function Game(){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const [xIsNext, setXIsNext] = useState(true);
    const currentSquares = history[currentMove];
  
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
        setXIsNext(!xIsNext);
    }
  
    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
        setXIsNext(nextMove % 2 === 0);
    }
  
    const moves = history.map((squares, move) => {
      let description;
      if (move > 0) {
        description = 'Go to move #' + move;
      } else {
        description = 'Go to game start';
      }
      return (
        <li key={move}>
          <button className="jump-button" onClick={() => jumpTo(move)}>{description}</button>
        </li>
      );
    });

    return(
        <div className="game">
            <h1 className="game-header">Lets Play Tic Tac Toe !</h1>
            <div className="game-board">
                <Board xIsNext={xIsNext} square={currentSquares} onPlay={handlePlay}></Board>
            </div>
            <div className="game-info">
                <ol>{moves}</ol>
            </div>
        </div>
    )
}