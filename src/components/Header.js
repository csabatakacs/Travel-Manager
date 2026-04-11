import "./Header.css";

function Header() {
  return (
    <div className="header">
      <button className="leftBtn">Menu</button>

      <div className="center">
        <h1>Event Finder</h1>
        <p>Find your perfect experience</p>
      </div>

      <button className="rightBtn">Login</button>
    </div>
  );
}
export default Header;