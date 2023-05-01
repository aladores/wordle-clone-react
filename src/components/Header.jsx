import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="menu"></div>
      <div className="header-text">
        <h1>Wordle</h1>
      </div>
      <div className="header-settings">
        <button className="color-theme-button">C</button>
      </div>
    </header>
  );
}

export default Header;
