/* eslint-disable react/prop-types */
import "./KeyboardRow.css";

function KeyboardRow(props) {
  const correctLettersSet = new Set(props.keyboardColors.correctLetters);
  const closeLettersSet = new Set(props.keyboardColors.closeLetters);
  const wrongLettersSet = new Set(props.keyboardColors.wrongLetters);

  const buttonElements = props.row.map((item) => {
    let newOnClick = props.handleClick;
    let newClassName = "keyboard-button";
    let newClassColor = "";
    if (item.length > 1) {
      newOnClick = item === "ENTER" ? props.handleSubmit : props.handleDelete;
      newClassName += " keyboard-special";
    }

    if (wrongLettersSet.has(item)) {
      newClassColor = "dark-grey";
    }
    if (closeLettersSet.has(item)) {
      newClassColor = "yellow";
    }
    if (correctLettersSet.has(item)) {
      newClassColor = "green";
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
