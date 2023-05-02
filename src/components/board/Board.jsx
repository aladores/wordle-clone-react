/* eslint-disable react/prop-types */
import BoardRow from "./BoardRow";
import "./Board.css";

function Board(props) {
  const rows = [];
  for (let i = 0; i < 6; i++) {
    //Previous row
    if (i < props.guessHistory.length) {
      rows.push(
        <BoardRow
          key={i}
          guess={props.guessHistory[i]}
          submitted={true}
          getCellColor={props.getCellColor}
        />
      );
    }
    //Current Row
    else if (i === props.guessHistory.length) {
      rows.push(
        <BoardRow
          key={i}
          guess={props.currentGuess}
          submitted={false}
          getCellColor={props.getCellColor}
          isCurrentGuessRow={true}
        />
      );
    }
    //Empty row
    else {
      rows.push(
        <BoardRow
          key={i}
          guess=""
          submitted={false}
          getCellColor={props.getCellColor}
        />
      );
    }
  }
  return <div className="board">{rows}</div>;
}

export default Board;
