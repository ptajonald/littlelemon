import "../styles/Hero.css";
import image from "../images/gourmet.jpg";

function Hero() {
  return (
    <>
      <section id="hero">
        <div id="hero-left">
          <h1>Little Lemon</h1>
          <h4>Cleveland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
            mollis dolor sem id odio. Cras.
          </p>
          <button type="button" className="btn btn-warning btn">Reserve A Table</button>
        </div>

        <div id="hero-right">
          <img src={image} alt="appetizers" />
        </div>
      </section>
    </>
  );
}

export default Hero;
