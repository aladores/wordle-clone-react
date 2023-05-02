/* eslint-disable react/prop-types */
//import { useState, useEffect } from "react";

function Cell(props) {
  //const [isActive, setIsActive] = useState(true);
  let cellElement = "";
  let hasLetter = props.guess[props.index] !== undefined;
  let hasColor = props.getCellColor(props.guess, props.index);
  if (hasLetter) {
    cellElement = props.guess[props.index];
  }

  //Class names
  let cellClassName = "tile";
  let backClass = "back";
  let isActive = false;
  if (hasLetter) {
    cellClassName += " filled";
    isActive = true;
  } else {
    cellClassName += " empty";
  }

  if (props.submitted) {
    backClass += ` ${hasColor}`;
    cellClassName += " submitted";
    isActive = false;
  }
  if (props.isCurrentGuessRow) {
    cellClassName += ` ${props.currentRowClass}`;
  }

  //  <div className={`${cellClassName} ${isActive ? "active" : ""}`}>
  //<div className={`${cellClassName}`}>

  return (
    <div className={`${cellClassName}${isActive ? "active" : ""}`}>
      <div
        className="flip-container"
        style={{
          transitionDelay: props.index * 300 + "ms",
        }}
      >
        <div className="front">{cellElement}</div>
        <div className={backClass} style={{ borderColor: hasColor }}>
          {cellElement}
        </div>
      </div>
    </div>
  );
}

export default Cell;
