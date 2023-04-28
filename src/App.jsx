//import { useState } from 'react'
import Header from './components/Header'
import Board from './components/Board'
import Keyboard from './components/Keyboard'

import './App.css'

function App() {

  return (
    <div className="app">
      <Header/>
      <Board/>
      <Keyboard/>
    </div>
  )
}

export default App
