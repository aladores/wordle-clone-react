import { useState } from 'react'
import Header from './components/Header'
import Board from './components/board/Board'
import Keyboard from './components/keyboard/Keyboard'

import './App.css'

function App() {
  const [currentGuess,setCurrentGuess] = useState([]);
  const [guessHistory,setGuessHistory] = useState([]);
  const [currentRow,setCurrentRow] = useState(1);

  function handleClick(event){
    if (currentGuess.length >= 5){
      console.log("error");
      return;
    }
    console.log(event.target.value);
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
 
  }
  return (
    <div className="app">
      <Header/>
      <main className="main-container">
        <Board 
          currentGuess={currentGuess}
          guessHistory={guessHistory}
          currentRow={currentRow}/>
        <Keyboard 
          handleClick={handleClick}
          handleSubmit={handleSubmit}/>
      </main>
    </div>
  )
}

export default App
