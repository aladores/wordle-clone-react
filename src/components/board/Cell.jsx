/* eslint-disable react/prop-types */
function Cell(props) {
  let cellElement = "";
  let hasLetter = props.guess[props.index] !== undefined;
  let hasColor = props.getCellColor(props.guess, props.index);

  if (hasLetter) {
    cellElement = props.guess[props.index];
  }

  return (
    <div
      className={
        "tile " +
        (hasLetter ? " filled" : "") +
        (props.submitted ? ` ${hasColor}` : "")
      }
    >
      {cellElement}
    </div>
  );
}

export default Cell;
