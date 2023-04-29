import { useState,useEffect } from 'react'
import Header from './components/Header'
import Board from './components/board/Board'
import Keyboard from './components/keyboard/Keyboard'

import './App.css'
function App() {
  const [gameWon,setGameWon] = useState(false);
  const [gameLost,setGameLost] = useState(false);
  const [currentGuess,setCurrentGuess] = useState([]);
  const [guessHistory,setGuessHistory] = useState([]);
  const [currentRow,setCurrentRow] = useState(1);
  const [submittedRow, setSubmittedRow] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
});
  const winningWord = "GREAT";

  function handleClick(event){
    if (currentGuess.length >= 5){
      console.log("error");
      return;
    }
    setCurrentGuess(currentGuess =>[...currentGuess,event.target.value]);
  }

  function handleSubmit(){
  
    if (gameWon||gameLost){
      console.log("Game already completed");
      return;
    }
    //If word is not in the list
    //if()


    //Not enough letters
    if (currentGuess.length !== 5){
      console.log("error");
      return;
    }

    if(currentGuess.length ===5){
      const currentGuessJoined = currentGuess.join("");
      console.log("joined: ", currentGuessJoined);
      setGuessHistory((guessHistory =>[...guessHistory,currentGuess]));
      setCurrentRow(currentRow => currentRow + 1);
      setSubmittedRow(prevSubmit=> ({
        ...prevSubmit,
        [currentRow-1]: true
      }));
      if (currentGuessJoined === winningWord){
        return setGameWon(true);
      }
      if (guessHistory.length > 4){
        return setGameLost(true);
      }
      setCurrentGuess("");
    }
   
    
  }

  function handleDelete(){
    if (gameWon||gameLost){
      console.log("Game already completed");
      return;
    }
    if (currentGuess.length === 0){
      console.log("error");
      return;
    }
    setCurrentGuess(currentGuess=>currentGuess.slice(0,-1));
  }

  useEffect(() => {
    if (gameLost){
      console.log("You lost!");
    }
    else if (gameWon){
      console.log("You won!");
    }
  }, [gameLost,gameWon]);

  return (
    <div className="app">
      <Header/>
      <main className="main-container">
        <Board 
          currentGuess={currentGuess}
          guessHistory={guessHistory}
          currentRow={currentRow}
          word={winningWord}
          submittedRow = {submittedRow}/>
        <Keyboard 
          handleClick={handleClick}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}/>
      </main>
    </div>
  )
}

export default App
