import { Outlet, Link } from "react-router-dom";
import logo from "../images/logo.jpg";

function Nav() {
  return (
    <>
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      <ul>
        <li>Home</li>
        <Link to="/aboutpage">About</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/reservations">Reservations</Link>
        <Link to="/orderonline">Order Online</Link>
        <Link to="/login">Log In</Link>
      </ul>
      <Outlet />
    </>
  );
}

export default Nav;
