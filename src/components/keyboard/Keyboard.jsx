/* eslint-disable react/prop-types */
import KeyboardRow from './KeyboardRow'
import './Keyboard.css'

function Keyboard(props) {

  const row1= ["Q","W","E","R","T","Y","U","I","O","P"];
  const row2= ["A","S","D","F","G","H","J","K","L"];
  const row3= ["ENTER","Z","X","C","V","B","N","M","BACK"];

  // const keyboardRows=()=>{
  //     for (let i = 0; i < 3; i++){
        
  //     }
  // }
  return (
    <div className="keyboard">
      <KeyboardRow
        row={row1}
        handleClick={props.handleClick}/>
      <KeyboardRow
        row={row2}
        handleClick={props.handleClick}/>
      <KeyboardRow
        row={row3}
        handleClick={props.handleClick}
        handleSubmit={props.handleSubmit}/>
    </div>
  )
}

export default Keyboard