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
 
  return (
    <div className="board">
      <BoardRow boardRow={board.boardRow1}
        word={props.word}
        currentGuess={props.currentGuess}
        submit={props.submit.rowSubmit1}/>
      <BoardRow boardRow={board.boardRow2}/>
      <BoardRow boardRow={board.boardRow3}/>
      <BoardRow boardRow={board.boardRow4}/>
      <BoardRow boardRow={board.boardRow5}/>
      <BoardRow boardRow={board.boardRow6}/>        
    </div>
  )
}

export default Board