/* eslint-disable react/prop-types */
import './KeyboardRow.css'


function KeyboardRow(props) {
  // eslint-disable-next-line react/prop-types
  const buttons = [];
  function createButtons(){
    for (let i=0;i<props.row.length; i++){
      if (props.row[i].length >1){
        if (props.row[i] === "ENTER"){
          buttons.push(<button key={props.row[i]} className="keyboard-button keyboard-special" value={props.row[i]} onClick={props.handleSubmit}>{props.row[i]}</button>);
        }
        else {
          buttons.push(<button key={props.row[i]} className="keyboard-button keyboard-special" value={props.row[i]} onClick={props.handleClick}>{props.row[i]}</button>);
        }
        
      }
      else{
        buttons.push(<button key={props.row[i]} className="keyboard-button" value={props.row[i]} onClick={props.handleClick}>{props.row[i]}</button>);
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