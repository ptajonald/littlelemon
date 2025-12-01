import "../styles/Hero.css";
import image from "../images/gourmet.jpg";
import { Outlet, Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <section id="hero">
        <div id="hero-left">
          <h1>Little Lemon</h1>
          <h4>Cleveland</h4>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations">
            {" "}
            <button type="button" className="btn btn-warning btn">
              Reserve A Table
            </button>
          </Link>
        </div>

        <div id="hero-right">
          <img src={image} alt="appetizers" />
        </div>
      </section>
    </>
  );
}

export default Hero;
