import "./Header.css";

/**
 * Componenta Header
 * Afiseaza titlul aplicatiei si butoanele principale (menu + login)
 */
function Header() {
  return (
    <div className="header">

      {/* Buton pentru meniu (stanga) */}
      <button className="leftBtn">Menu</button>

      {/* Sectiune centrala cu titlu si descriere */}
      <div className="center">
        <h1>Event Finder</h1>
        <p>Find your perfect experience</p>
      </div>

      {/* Buton pentru autentificare (dreapta) */}
      <button className="rightBtn">Login</button>

    </div>
  );
}

export default Header;