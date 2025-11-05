import Footer from "../components/Footer";
import salad from "../images/cat-csalad.jpg";
import bruchetta from "../images/bruschetta1.jpg";
import lemon from "../images/lemon.jpg";
import "../styles/Menu.css";

function Menu() {
  return (
    <>
      <section id="menu">
        {/* <div id="specials">
          <h2>Specials</h2>
          <button type="button" className="btn btn-warning btn-lg">
            View More
          </button>
        </div> */}
        <div id="title">
          <h1>Menu</h1>
        </div>
        <div id="entrees">
          <div className="entree">
            <img src={salad} alt="salad" className="" />
            <section>
              <div className="name-price">
                <h4>Greek Salad</h4>
                <h4>$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
                mollis dolor sem id odio. Cras.
              </p>
              <button type="button" class="btn btn-success">
                Order Delivery
              </button>
            </section>
          </div>
          <div className="entree">
            <img src={bruchetta} alt="bruchetta" />
            <section>
              <div className="name-price">
                <h4>Bruchetta</h4>
                <h4>$5.99</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
                mollis dolor sem id odio. Cras.
              </p>
              <button type="button" class="btn btn-success">
                Order Delivery
              </button>
            </section>
          </div>
          <div className="entree">
            <img src={lemon} alt="lemon" />
            <section>
              <div className="name-price">
                <h4>Lemon Cake</h4>
                <h4>$4.99</h4>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
                mollis dolor sem id odio. Cras.
              </p>
              <button type="button" class="btn btn-success">
                Order Delivery
              </button>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Menu;
