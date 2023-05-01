/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import BoardRow from "./BoardRow";
import "./Board.css";

function Board(props) {
  const [board, setBoard] = useState({
    boardRow1: ["", "", "", "", ""],
    boardRow2: ["", "", "", "", ""],
    boardRow3: ["", "", "", "", ""],
    boardRow4: ["", "", "", "", ""],
    boardRow5: ["", "", "", "", ""],
    boardRow6: ["", "", "", "", ""],
  });

  useEffect(() => {
    const updatedRowKey = `boardRow${props.currentRow}`;
    const updatedRow = [
      props.currentGuess[0],
      props.currentGuess[1],
      props.currentGuess[2],
      props.currentGuess[3],
      props.currentGuess[4],
    ];

    setBoard((prevBoard) => ({
      ...prevBoard,
      [updatedRowKey]: updatedRow,
    }));
  }, [props.currentGuess, props.currentRow]);

  const boardRowElements = Object.keys(board).map((rowKey, rowIndex) => (
    <BoardRow
      key={rowKey}
      boardRow={board[rowKey]}
      winningWord={props.winningWord}
      currentGuess={props.currentGuess}
      submittedRow={props.submittedRow[rowIndex]}
      updatedIndex={props.updatedIndex}
    />
  ));

  return <div className="board">{boardRowElements}</div>;
}

export default Board;
