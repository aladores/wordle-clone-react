import { useState, useEffect } from "react";
import Header from "./components/Header";
import Board from "./components/board/Board";
import Keyboard from "./components/keyboard/Keyboard";
import Modal from "./components/modal/Modal";

import "./App.css";
function App() {
  const [gameWon, setGameWon] = useState(false);
  const [gameLost, setGameLost] = useState(false);
  const [currentGuess, setCurrentGuess] = useState([]);
  const [currentRowClass, setCurrentRowClass] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
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
    if (gameLost || gameWon) {
      console.log("Error: Game already completed.");
      return;
    }
    if (isAnimating) {
      console.log("Error: Cannot enter letter until animation is complete.");
      return;
    }
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
    return;
  }

  async function handleSubmit() {
    if (gameWon || gameLost) {
      console.log("Error: Game already completed.");
      return;
    }

    if (currentGuess.length !== 5) {
      console.log("Error: Not enough letters.");
      return;
    }

    if (currentGuess.length === 5) {
      console.log(isAnimating);
      setCurrentRowClass("");
      const currentGuessJoined = currentGuess.join("");
      const isValidWord = await checkValidWord(currentGuessJoined);
      if (isValidWord === false) {
        setCurrentRowClass("shake");
        return;
      }

      //Todo: Can reduce state handling here
      setGuessHistory((guessHistory) => [...guessHistory, currentGuess]);
      setCurrentGuess("");
      setIsAnimating(true);

      if (currentGuessJoined === winningWord) {
        return setGameWon(true);
      }

      if (guessHistory.length > 4) {
        return setGameLost(true);
      }
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
      return "medium-green";
    }
    return "medium-yellow";
  }

  async function checkValidWord(currentGuessJoined) {
    let isValid = false;
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${currentGuessJoined}`
      );
      const wordResult = await response.json();
      if (wordResult["title"] !== "No Definitions Found") {
        isValid = true;
      }
    } catch {
      console.log("Error");
    }
    return isValid;
  }

  useEffect(() => {
    if (isAnimating === true) {
      setTimeout(() => {
        setIsAnimating(false);
      }, 2000);
    }
  }, [isAnimating]);

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
      {/* <Modal /> */}
      <Header />
      <main className="main-container">
        <Board
          currentGuess={currentGuess}
          guessHistory={guessHistory}
          winningWord={winningWord}
          currentRowClass={currentRowClass}
          isAnimating={isAnimating}
          gameWon={gameWon}
          getCellColor={getCellColor}
        />
        {
          <Keyboard
            guessHistory={guessHistory}
            handleClick={handleClick}
            currentGuess={currentGuess}
            winningWord={winningWord}
            handleSubmit={handleSubmit}
            handleDelete={handleDelete}
            keyboardColors={keyboardColors}
          />
        }
      </main>
    </div>
  );
}

export default App;
