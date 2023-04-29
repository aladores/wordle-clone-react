/* eslint-disable react/prop-types */
import "./KeyboardRow.css";

function KeyboardRow(props) {
  console.log(props.closeLetters);
  const buttonElements = props.row.map((item) => {
    let newOnClick = props.handleClick;
    let newClassName = "keyboard-button";
    let newClassColor = "";
    if (item.length > 1) {
      newOnClick = item === "ENTER" ? props.handleSubmit : props.handleDelete;
      newClassName += " keyboard-special";
    }
    for (let i = 0; i < props.correctLetters.length; i++) {
      if (item == props.correctLetters[i]) {
        newClassColor = "green";
      }
    }
    for (let i = 0; i < props.closeLetters.length; i++) {
      if (item == props.closeLetters[i]) {
        newClassColor = "yellow";
      }
    }

    for (let i = 0; i < props.wrongLetters.length; i++) {
      if (item == props.wrongLetters[i]) {
        newClassColor = "dark-grey";
      }
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
