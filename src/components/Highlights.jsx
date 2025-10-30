import "../styles/Highlights.css";
import salad from "../images/salad.jpg";
import bruchetta from "../images/bruschetta.jpg";
import lemon from "../images/lemon.jpg";

function Highlights() {
  return (
    <>
      <section>
        <div id="specials">
          <h2>Specials</h2>
          <button>View More</button>
        </div>
        <div id="items">
          <div className="item">
            <img src={salad} alt="salad" />
            <div className="nameprice"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
              mollis dolor sem id odio. Cras.
            </p>
            <button>Order Delivery</button>
          </div>
          <div className="item">
            <img src={bruchetta} alt="bruchetta" />
            <div className="nameprice"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
              mollis dolor sem id odio. Cras.
            </p>
            <button>Order Delivery</button>
          </div>
          <div className="item">
            <img src={lemon} alt="lemon" />
            <div className="nameprice"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              cursus, ligula sed rutrum volutpat, lorem nisl egestas dui, ut
              mollis dolor sem id odio. Cras.
            </p>
            <button>Order Delivery</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Highlights;
