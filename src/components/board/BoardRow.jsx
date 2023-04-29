/* eslint-disable react/prop-types */
import './BoardRow.css'

function BoardRow(props) {

  
  const tiles = props.boardRow.map((item,index)=>{
    let newTileClass = "tile";
    if (props.submittedRow === true){
      //Letter is correct and in right place
      if (props.word[index] === item){
        newTileClass += " green";
      }
      //Letter is correct but in wrong place
      else if (props.word.includes(item)){
        newTileClass += " yellow";
      }
      //Letter is incorrect
      else{
        newTileClass += " grey";
      }
    }
    return (
      <div 
        key={[index]} 
        className={newTileClass}>
        {item}
      </div>
      );
  });

  return (
    <div className="boardRow">
      {tiles}
    </div>
  )
}

export default BoardRow