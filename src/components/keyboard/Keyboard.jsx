/* eslint-disable react/prop-types */
import KeyboardRow from './KeyboardRow'
import './Keyboard.css'

function Keyboard(props) {
  const rows = [
    ["Q","W","E","R","T","Y","U","I","O","P"],
    ["A","S","D","F","G","H","J","K","L"],
    ["ENTER","Z","X","C","V","B","N","M","BACK"]
  ];

  const keyBoardRowElements = rows.map((item)=>{
    return (
    <KeyboardRow 
      key = {item[0]}
      row={item} 
      handleClick={props.handleClick} 
      handleSubmit={props.handleSubmit}
      handleDelete={props.handleDelete}
    />)
  });
  
  return (
    <div className="keyboard">
      {keyBoardRowElements}
    </div>
  )
}

export default Keyboard