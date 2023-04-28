/* eslint-disable react/prop-types */
import './BoardRow.css'

function BoardRow(props) {
  const tiles = [];
  function createTiles(){
    for (let i=0;i<props.boardRow.length; i++){
      if (props.submit === true){
        if (props.word[i] === props.boardRow[i]){
          tiles.push(<div key={[i]} className="tile green">{props.boardRow[i]}</div>);
        }
        else if(props.word.includes(props.boardRow[i])){
          tiles.push(<div key={[i]} className="tile yellow">{props.boardRow[i]}</div>);
        }
        else{
          tiles.push(<div key={[i]} className="tile grey">{props.boardRow[i]}</div>);
        }
       
      }
      else{
        tiles.push(<div key={[i]} className="tile">{props.boardRow[i]}</div>);
      }
        
    }

  }

  createTiles();
  return (
    <div className="boardRow">
      {tiles}
    </div>
  )
}

export default BoardRow