/* eslint-disable react/prop-types */
import './KeyboardRow.css'


function KeyboardRow(props) {
  // eslint-disable-next-line react/prop-types
  const buttons = [];
  function createButtons(){
    for (let i=0;i<props.row.length; i++){
      if (props.row[i] === "ENTER" || props.row[i] === "BACK" ){
        buttons.push(<div key={props.row[i]} className="keyboard-button keyboard-special">{props.row[i]}</div>);
      }
      else{
        buttons.push(<div key={props.row[i]} className="keyboard-button">{props.row[i]}</div>);
      }
    }
  }
  createButtons();
  return (
    <div className="keyboardRow">
      {buttons}
    </div>
  )
}

export default KeyboardRow