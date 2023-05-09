/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import "./BoardRow.css";

import Cell from "./Cell";

function BoardRow(props) {
  let cells = [];
  for (let i = 0; i < 5; i++) {
    cells.push(
      <Cell
        key={i}
        index={i}
        currentGuess={props.currentGuess}
        submitted={props.submitted}
        getCellColor={props.getCellColor}
        currentRowClass={props.currentRowClass}
        winningWord={props.winningWord}
        isCurrentGuessRow={props.isCurrentGuessRow}
        isAnimating={props.isAnimating}
        gameWon={props.gameWon}
      />
    );
  }
  // <div className={"boardRow" + (props.submitted ? ` submitted` : "")}>

  return <div className={"boardRow"}>{cells}</div>;
}

export default BoardRow;
