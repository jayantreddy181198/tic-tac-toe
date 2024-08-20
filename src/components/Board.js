import { useState } from 'react';
import Square from './Square';
import './Board.css';

function Board({ xIsNext, square, onPlay }) {
    const winner = calculatWinner(square);
    let status;
    if (winner) {
        status = "Winner is " + winner;
    } else {
        status = "Next Player is " + (xIsNext ? 'X': 'O');
    }

    function handleClick(i){

        if (square[i] || calculatWinner(square)){
            return;
        }
        const newSquare = square.slice();
        if (xIsNext){
            newSquare[i] = "X";
        }else{
            newSquare[i] = "O";
        }
        onPlay(newSquare);
    }

    return (
        <>  
            <div className='board-status'>{status}</div>
            <div className="board-row">
                <Square value={square[0]} onhandleClick={() => handleClick(0)} />
                <Square value={square[1]} onhandleClick={() => handleClick(1)} />
                <Square value={square[2]} onhandleClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={square[3]} onhandleClick={() => handleClick(3)} />
                <Square value={square[4]} onhandleClick={() => handleClick(4)} />
                <Square value={square[5]} onhandleClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={square[6]} onhandleClick={() => handleClick(6)} />
                <Square value={square[7]} onhandleClick={() => handleClick(7)} />
                <Square value={square[8]} onhandleClick={() => handleClick(8)} />
            </div>
        </> 
    );
}

function calculatWinner(square){
    const lines = [
        [0,1,2],
        [0,4,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [3,4,5],
        [6,7,8]
    ];
    for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i];
        if (square[a] && square[a] === square[b] && square[b] === square[c]){
            return square[a];
        }
    }
    return null;
}

export default Board;
