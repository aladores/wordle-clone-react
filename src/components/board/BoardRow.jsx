/* eslint-disable react/prop-types */
import "./BoardRow.css";

function BoardRow(props) {
  const tiles = props.boardRow.map((item, index) => {
    let newTileClass = "tile";
    let bounceClass = "";
    let newClassColor = "";
    if (props.submittedRow === true) {
      if (props.winningWord.indexOf(item) === -1) {
        newClassColor = "dark-grey";
      } else if (props.winningWord[index] === item) {
        newClassColor = "green";
      } else {
        newClassColor = "yellow";
      }
    }

    const combinedClassName = `${newTileClass} ${bounceClass} ${newClassColor}`;
    return (
      <div key={[index]} className={combinedClassName}>
        {item}
      </div>
    );
  });

  return <div className="boardRow">{tiles}</div>;
}

export default BoardRow;
