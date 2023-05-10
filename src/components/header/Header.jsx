import "./Header.css";

function Header(props) {
  return (
    <header className="header">
      <div className="header-text">
        <h1>Wordle #{props.day + 1}</h1>
      </div>
    </header>
  );
}

export default Header;
