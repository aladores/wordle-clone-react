import { useState } from 'react'
import Header from './components/Header'
import Board from './components/board/Board'
import Keyboard from './components/keyboard/Keyboard'

import './App.css'

function App() {
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
  const word = "GREAT";
  function handleClick(event){
    if (currentGuess.length >= 5){
      console.log("error");
      return;
    }
    setCurrentGuess(currentGuess =>[...currentGuess,event.target.value]);
    console.log(currentGuess);
  }

  function handleSubmit(){
    console.log(currentGuess.length);
    if (currentGuess.length !== 5){
      console.log("error");
      return;
    }
    setGuessHistory((guessHistory =>[...guessHistory,currentGuess]));
    setCurrentRow(currentRow => currentRow + 1);
    setCurrentGuess("");
    setSubmittedRow(prevSubmit=> ({
      ...prevSubmit,
      [currentRow-1]: true
    }));
  }

  function handleDelete(){
    if (currentGuess.length === 0){
      console.log("error");
      return;
    }
    setCurrentGuess(currentGuess=>currentGuess.slice(0,-1));
    console.log(currentGuess);
  }
  return (
    <div className="app">
      <Header/>
      <main className="main-container">
        <Board 
          currentGuess={currentGuess}
          guessHistory={guessHistory}
          currentRow={currentRow}
          word={word}
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
