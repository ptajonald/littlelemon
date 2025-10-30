import "../styles/Hero.css";
import image from "../images/gourmet.jpg";

function Hero() {
  return (
    <>
      <section>
        <div id="description">
          <h1>Little Lemon</h1>
          <h4>Cleveland</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
            mollis dolor sem id odio. Cras.
          </p>
          <button>Reserve A Table</button>
        </div>

        <div id="image">
          <img src={image} alt="appetizers" />
        </div>
      </section>
    </>
  );
}

export default Hero;
