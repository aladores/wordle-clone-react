import "./Modal.css";

function Modal(props) {
  return (
    <div className="modal" style={{position: `${props.index * 100}px`}} >
      <p>{props.message}</p>
    </div>
  );
}

export default Modal;
