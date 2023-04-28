import KeyboardRow from './KeyboardRow'
import './Keyboard.css'

function Keyboard() {

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
        row={row1}/>
      <KeyboardRow
        row={row2}/>
      <KeyboardRow
        row={row3}/>
    </div>
  )
}

export default Keyboard