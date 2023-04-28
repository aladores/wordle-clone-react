//import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/Keyboard'

import './App.css'

function App() {

  return (
    <div className="app">
      <Header/>
      <main className="main-container">
        <Board/>
        <Keyboard/>
      </main>
    </div>
  )
}

export default App
