import { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";

import "./App.css";
function App() {
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [guessHistory, setGuessHistory] = useState([]);
  const [updatedIndex, setUpdatedIndex] = useState(0);
  const [letterStatus, setLetterStatus] = useState({
    correctLetters: [],
    closeLetters: [],
    wrongLetters: [],
  });
  const [currentRow, setCurrentRow] = useState(1);
  const [submittedRow, setSubmittedRow] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });
  const winningWord = "FATED";

  console.log(updatedIndex);
  // const winningWordCount = winningWord.split("").reduce((count, char) => {
  //   count[char] = (count[char] || 0) + 1;
  //   return count;
  // }, {});
  function checkLetterStatus(guessHistory, winningWord) {
    const newLetterStatus = {
      correctLetters: [],
      closeLetters: [],
      wrongLetters: [],
    };

    guessHistory.forEach((word) => {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === winningWord[i]) {
          newLetterStatus.correctLetters.push(word[i]);
        } else if (winningWord.includes(word[i])) {
          //if(word[i].includes(newLetterStatus.correctLetters))
          newLetterStatus.closeLetters.push(word[i]);
        } else {
          newLetterStatus.wrongLetters.push(word[i]);
        }
      }
    });

    return newLetterStatus;
  }
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

    const index = currentGuess.length - 1;
    setUpdatedIndex(index);
  }

  function handleSubmit() {
    if (gameWon || gameLost) {
      console.log("Error: Game already completed.");
      return;
    }
    //If word is not in the list
    //if()

    //Not enough letters
    if (currentGuess.length !== 5) {
      console.log("Error: Not enough letters.");
      return;
    }

    if (currentGuess.length === 5) {
      const currentGuessJoined = currentGuess.join("");
      setGuessHistory((guessHistory) => [...guessHistory, currentGuess]);
      setCurrentRow((currentRow) => currentRow + 1);
      setSubmittedRow((prevSubmit) => ({
        ...prevSubmit,
        [currentRow - 1]: true,
      }));

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

  useEffect(() => {
    window.addEventListener("keydown", handleNewLetter);
    return () => window.removeEventListener("keydown", handleNewLetter);
  });
  useEffect(() => {
    const newLetterStatus = checkLetterStatus(guessHistory, winningWord);
    setLetterStatus(newLetterStatus);
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
          currentRow={currentRow}
          winningWord={winningWord}
          submittedRow={submittedRow}
          updatedIndex={updatedIndex}
        />
        <Keyboard
          guessHistory={guessHistory}
          handleClick={handleClick}
          currentGuess={currentGuess}
          winningWord={winningWord}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          letterStatus={letterStatus}
        />
      </main>
    </div>
  );
}

export default App;
