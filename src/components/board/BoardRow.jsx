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
        guess={props.guess}
        submitted={props.submitted}
        getCellColor={props.getCellColor}
        currentRowClass={props.currentRowClass}
        isCurrentGuessRow={props.isCurrentGuessRow}
      />
    );
  }
  // <div className={"boardRow" + (props.submitted ? ` submitted` : "")}>

  return <div className={"boardRow"}>{cells}</div>;
}

export default BoardRow;
