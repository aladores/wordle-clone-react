/* eslint-disable react/prop-types */
import "./KeyboardRow.css";

function KeyboardRow(props) {
  const correctLettersSet = new Set(props.letterStatus.correctLetters);
  const closeLettersSet = new Set(props.letterStatus.closeLetters);
  const wrongLettersSet = new Set(props.letterStatus.wrongLetters);

  const buttonElements = props.row.map((item) => {
    let newOnClick = props.handleClick;
    let newClassName = "keyboard-button";
    let newClassColor = "";
    if (item.length > 1) {
      newOnClick = item === "ENTER" ? props.handleSubmit : props.handleDelete;
      newClassName += " keyboard-special";
    }

    //props.letterStatus.correctLetters.map((letter) => console.log(letter));

    if (wrongLettersSet.has(item)) {
      newClassColor = "dark-grey";
      console.log(item);
    }
    if (closeLettersSet.has(item)) {
      newClassColor = "yellow";
      console.log(item);
    }
    if (correctLettersSet.has(item)) {
      newClassColor = "green";
      console.log(item);
    }
    const combinedClassName = `${newClassName} ${newClassColor}`;
    return (
      <button
        key={item}
        className={combinedClassName}
        value={item}
        onClick={newOnClick}
      >
        {item}
      </button>
    );
  });

  return <div className="keyboardRow">{buttonElements}</div>;
}

export default KeyboardRow;
