/* eslint-disable react/prop-types */
import KeyboardRow from "./KeyboardRow";
import "./Keyboard.css";

function Keyboard(props) {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
  ];

  const keyBoardRowElements = rows.map((item) => {
    return (
      <KeyboardRow
        key={item[0]}
        row={item}
        winningWord={props.winningWord}
        guessHistory={props.guessHistory}
        handleClick={props.handleClick}
        handleNewLetter={props.handleNewLetter}
        handleSubmit={props.handleSubmit}
        handleDelete={props.handleDelete}
        keyboardColors={props.keyboardColors}
      />
    );
  });

  return <div className="keyboard">{keyBoardRowElements}</div>;
}

export default Keyboard;
