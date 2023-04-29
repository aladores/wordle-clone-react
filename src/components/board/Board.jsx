/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react'
import BoardRow from './BoardRow'
import './Board.css'

function Board(props) {
  const [board, setBoard] = useState({
    boardRow1: ["", "", "", "", ""],
    boardRow2: ["", "", "", "", ""],
    boardRow3: ["", "", "", "", ""],
    boardRow4: ["", "", "", "", ""],
    boardRow5: ["", "", "", "", ""],
    boardRow6: ["", "", "", "", ""],
  });

  function fillCurrentGuess(){
      // if (props.currentRow === 7){
      //   return;
      // }
      let updatedRow = [
        props.currentGuess[0],
        props.currentGuess[1],
        props.currentGuess[2],
        props.currentGuess[3],
        props.currentGuess[4]
      ];

      setBoard(prevBoard => ({
        ...prevBoard,
        [`boardRow${props.currentRow}`]: updatedRow
      }));
  }

  useEffect(() => {
    fillCurrentGuess();
  }, [props.currentGuess]);

  const boardRowElements = Object.keys(board).map((rowKey,rowIndex) => (
    <BoardRow 
      key={rowKey} 
      boardRow={board[rowKey]}
      word={props.word}
      currentGuess={props.currentGuess}
      submittedRow={props.submittedRow[rowIndex]}
    />
  ))

  return (
    <div className="board">
      {boardRowElements}
    </div>
  )
}

export default Board