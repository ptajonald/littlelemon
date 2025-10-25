import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.jpg";
import "../styles/Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <ul>
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
