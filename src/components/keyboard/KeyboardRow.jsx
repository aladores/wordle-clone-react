/* eslint-disable react/prop-types */
import './KeyboardRow.css'


function KeyboardRow(props) {
  const buttonElements = props.row.map((item)=>{
    let newOnClick = props.handleClick;
    let newClassName = "keyboard-button"
    if (item.length>1){
      newOnClick = (item === "ENTER" ? props.handleSubmit : props.handleDelete);
      newClassName += " keyboard-special"
    }
    return (
      <button 
        key={item} 
        className={newClassName} 
        value={item} 
        onClick={newOnClick}> 
        {item}
      </button>);
  });
  
  return (
    <div className="keyboardRow">
      {buttonElements}
    </div>
  )
}

export default KeyboardRow