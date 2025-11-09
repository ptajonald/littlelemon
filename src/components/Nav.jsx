import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../styles/Nav.css";
import { useState } from "react";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav id={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>

        <div id="menu-icon" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul id={`nav-links ${menuOpen ? "visible" : ""}`}>
          <Link to="/">Home</Link>
          <Link to="/aboutpage">About</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservations">Reservations</Link>
          <Link to="/orderonline">Order Online</Link>
          <Link to="/login">Log In</Link>
        </ul>
      </nav>

      <Outlet />
    </>
  );
}

export default Nav;
