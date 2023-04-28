/* eslint-disable react/prop-types */
import './BoardRow.css'

function BoardRow(props) {
  const tiles = [];
  function createTiles(){
    console.log(props.boardRow.length);
    for (let i=0;i<props.boardRow.length; i++){
        tiles.push(<div key={[i]} className="tile">{props.boardRow[i]}</div>);
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