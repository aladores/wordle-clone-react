/* eslint-disable react/prop-types */
//import { useState, useEffect } from "react";

function Cell(props) {
  //const [isActive, setIsActive] = useState(true);
  let cellElement = "";
  let hasLetter = props.currentGuess[props.index] !== undefined;
  let hasColor = props.getCellColor(props.currentGuess, props.index);
  if (hasLetter) {
    cellElement = props.currentGuess[props.index];
  }

  //Class names
  let flipContainerClass = "flip-container";
  let cellClass = "tile";
  let backClass = "back";
  let frontClass = "front";
  let currentRowClass = props.currentRowClass;

  if (hasLetter) {
    frontClass += " filled";
    frontClass += " active";
  }
  if (props.submitted) {
    backClass += ` ${hasColor}`;
    cellClass += " submitted";

    const guessJoined = props.currentGuess.join("");

    if (props.winningWord === guessJoined) {
      if (!props.isAnimating) {
        cellClass += " win";

        // flipContainerClass += " medium-green";
        // flipContainerClass += " win";
      }
    }
  }

  //  <div className={`${cellClass} ${isActive ? "active" : ""}`}>
  //<div className={`${cellClass}`}>

  return (
    <div
      className={`${cellClass} ${currentRowClass}`}
      style={{
        animationDelay: !currentRowClass ? props.index * 100 + "ms" : "",
        transitionDelay: !currentRowClass ? props.index * 100 + "ms" : "",
      }}
    >
      <div
        className={flipContainerClass}
        style={{
          animationDelay: props.index * 300 + "ms",
          transitionDelay: props.index * 300 + "ms",
        }}
      >
        <div className={frontClass}>{cellElement}</div>

        <div className={backClass}>{cellElement}</div>
      </div>
    </div>
  );
}

export default Cell;
