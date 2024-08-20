import { useState } from 'react';
import './Square.css';

export default function Square(props){
    return (
        <>
          <button className="square" onClick={props.onhandleClick}>{props.value}</button>
        </>    
    )
}