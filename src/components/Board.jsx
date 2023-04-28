import BoardRow from './BoardRow'
import './Board.css'

function Board() {

  const boardRow1=["Q"," "," "," "," "];
  const boardRow2=["Q"," "," "," "," "];
  const boardRow3=["Q"," "," "," "," "];
  const boardRow4=["Q"," "," "," "," "];
  const boardRow5=["Q"," "," "," "," "];
  const boardRow6=["Q"," "," "," "," "];

  return (
    <div className="board">
      <BoardRow boardRow={boardRow1}/>
      <BoardRow boardRow={boardRow2}/>
      <BoardRow boardRow={boardRow3}/>
      <BoardRow boardRow={boardRow4}/>
      <BoardRow boardRow={boardRow5}/>
      <BoardRow boardRow={boardRow6}/>        
    </div>
  )
}

export default Board