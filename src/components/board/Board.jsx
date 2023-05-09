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
          currentGuess={props.guessHistory[i]}
          winningWord={props.winningWord}
          submitted={true}
          getCellColor={props.getCellColor}
          isAnimating={props.isAnimating}
          gameWon={props.gameWon}
        />
      );
    }
    //Current Row
    else if (i === props.guessHistory.length) {
      rows.push(
        <BoardRow
          key={i}
          currentGuess={props.currentGuess}
          submitted={false}
          getCellColor={props.getCellColor}
          currentRowClass={props.currentRowClass}
          winningWord={props.winningWord}
          isCurrentGuessRow={true}
          isAnimating={props.isAnimating}
        />
      );
    }
    //Empty row
    else {
      rows.push(
        <BoardRow
          key={i}
          currentGuess=""
          submitted={false}
          getCellColor={props.getCellColor}
        />
      );
    }
  }
  return <div className="board">{rows}</div>;
}

export default Board;
