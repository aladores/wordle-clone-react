import { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";

import "./App.css";
function App() {
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [currentRowClass, setCurrentRowClass] = useState("");
  const [guessHistory, setGuessHistory] = useState([]);
  const [keyboardColors, setKeyboardColors] = useState({
    correctLetters: [],
    closeLetters: [],
    wrongLetters: [],
  });
  const winningWord = "FATED";

  function handleClick(event) {
    handleNewLetter(event);
  }

  function handleNewLetter(event) {
    let newLetter =
      event.type === "click" ? event.target.value : event.key.toUpperCase();

    //If tab is pressed
    if (event.keyCode == 9) {
      return;
    }
    //Keyboard press
    if (event.type === "keydown") {
      if (newLetter === "BACKSPACE") {
        handleDelete();
        return;
      }
      if (newLetter === "ENTER") {
        handleSubmit();
        return;
      }
      if (!/^[A-Za-z]$/.test(event.key)) {
        return;
      }
    }

    if (currentGuess.length >= 5) {
      console.log("Error: Current guess is full.");
      return;
    }

    setCurrentGuess((currentGuess) => [...currentGuess, newLetter]);
  }

  function handleSubmit() {
    if (gameWon || gameLost) {
      console.log("Error: Game already completed.");
      return;
    }
    //If word is not in the list
    //if()
    //setCurrentRowClass("shake");
    //setCurrentRowClass("");
    //Not enough letters
    if (currentGuess.length !== 5) {
      console.log("Error: Not enough letters.");
      return;
    }

    const currentGuessJoined = currentGuess.join("");
    if (currentGuess.length === 5) {
      //setTimeout(() => {
      //setCurrentRowClass("submitted");
      //}, 500); // Adjust the delay time as needed

      setGuessHistory((guessHistory) => [...guessHistory, currentGuess]);

      if (currentGuessJoined === winningWord) {
        return setGameWon(true);
      }
      if (guessHistory.length > 4) {
        return setGameLost(true);
      }
      setCurrentGuess("");
    }
  }

  function handleDelete() {
    if (gameWon || gameLost) {
      console.log("Error: Game already completed.");
      return;
    }
    if (currentGuess.length === 0) {
      console.log("Error: Current Guess is Empty.");
      return;
    }
    setCurrentGuess((currentGuess) => currentGuess.slice(0, -1));
  }

  function getKeyboardColor(guessHistory, winningWord) {
    const newKeyboardColors = {
      correctLetters: [],
      closeLetters: [],
      wrongLetters: [],
    };

    guessHistory.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === winningWord[i]) {
          newKeyboardColors.correctLetters.push(word[i]);
        } else if (winningWord.includes(word[i])) {
          //if(word[i].includes(newKeyboardColors.correctLetters))
          newKeyboardColors.closeLetters.push(word[i]);
        } else {
          newKeyboardColors.wrongLetters.push(word[i]);
        }
      }
    });
    return newKeyboardColors;
  }

  function getCellColor(guess, i) {
    let correctLetter = winningWord[i];
    let guessLetter = guess[i];
    if (winningWord.indexOf(guessLetter) === -1) {
      return "dark-grey";
    }
    if (correctLetter === guessLetter) {
      return "green";
    }
    return "yellow";
  }

  useEffect(() => {
    window.addEventListener("keydown", handleNewLetter);
    return () => window.removeEventListener("keydown", handleNewLetter);
  });
  useEffect(() => {
    const newKeyboardColors = getKeyboardColor(guessHistory, winningWord);
    setKeyboardColors(newKeyboardColors);
  }, [guessHistory]);

  useEffect(() => {
    if (gameLost) {
      console.log("You lost!");
    } else if (gameWon) {
      console.log("You won!");
    }
  }, [gameLost, gameWon]);

  return (
    <div className="app">
      <Header />
      <main className="main-container">
        <Board
          currentGuess={currentGuess}
          guessHistory={guessHistory}
          winningWord={winningWord}
          currentRowClass={currentRowClass}
          getCellColor={getCellColor}
        />
        <Keyboard
          guessHistory={guessHistory}
          handleClick={handleClick}
          currentGuess={currentGuess}
          winningWord={winningWord}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          keyboardColors={keyboardColors}
        />
      </main>
    </div>
  );
}

export default App;
