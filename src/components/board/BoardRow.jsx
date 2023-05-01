/* eslint-disable react/prop-types */
import "./BoardRow.css";

function BoardRow(props) {
  // const winningWordCount = props.winningWord.split("").reduce((count, char) => {
  //   count[char] = (count[char] || 0) + 1;
  //   return count;
  // }, {});
  // const boardRowCount = props.boardRow.reduce((count, char) => {
  //   count[char] = (count[char] || 0) + 1;
  //   return count;
  // }, {});
  const tiles = props.boardRow.map((item, index) => {
    let newTileClass = "tile";
    let newClassColor = "";
    if (props.submittedRow === true) {
      //Letter is correct and in right position
      if (props.winningWord[index] === item) {
        newClassColor = "green";
      }
      // Letter is correct but in the wrong place
      else if (props.winningWord.includes(item)) {
        if (props.winningWord.indexOf(item) !== index) {
          // Check if the item is in the correct position already
          newClassColor = "grey";
        } else {
          newClassColor = "yellow";
        }
      }
      //Letter is incorrect
      else {
        newClassColor = "grey";
      }
    }
    const combinedClassName = `${newTileClass} ${newClassColor}`;
    return (
      <div key={[index]} className={combinedClassName}>
        {item}
      </div>
    );
  });

  return <div className="boardRow">{tiles}</div>;
}

export default BoardRow;
