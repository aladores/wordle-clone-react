/* eslint-disable react/prop-types */
//import { useState, useEffect } from "react";

function Cell(props) {
  //const [isActive, setIsActive] = useState(true);
  //console.log(props.isAnimating);
  let cellElement = "";
  let hasLetter = props.currentGuess[props.index] !== undefined;
  let hasColor = props.getCellColor(props.currentGuess, props.index);
  if (hasLetter) {
    cellElement = props.currentGuess[props.index];
  }

  //Class names
  let flipContainerClass = "flip-container";
  let cellClassName = "tile";
  let cellStatusClass = "";
  let backClass = "back";
  let frontClass = "front";
  let isActive = false;

  if (hasLetter) {
    frontClass += " filled";
    frontClass += " active";
  }
  if (props.submitted) {
    backClass += ` ${hasColor}`;
    cellClassName += " submitted";

    const guessJoined = props.currentGuess.join("");

    if (props.winningWord === guessJoined) {
      console.log("Hereeeeeee:", props.gameWon);

      if (!props.isAnimating) {
        frontClass = "front no-border";
        flipContainerClass += " medium-green";
        flipContainerClass += " win";
      }
    }
  }

  if (props.isCurrentGuessRow) {
    cellClassName += ` ${props.currentRowClass}`;
  }

  //  <div className={`${cellClassName} ${isActive ? "active" : ""}`}>
  //<div className={`${cellClassName}`}>

  return (
    <div className={`${cellClassName}`}>
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
