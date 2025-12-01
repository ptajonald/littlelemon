import "../styles/Highlights.css";
import salad from "../images/cat-csalad.jpg";
import bruschetta from "../images/bruschetta1.jpg";
import lemon from "../images/lemon.jpg";

function Highlights() {
  return (
    <>
      <section id="highlights">
        <div id="specials">
          <h2>Specials</h2>
          <button type="button" className="btn btn-warning btn-lg">
            View More
          </button>
        </div>
        <div id="items">
          <div className="item">
            <img src={salad} alt="salad" />
            <section>
              <div className="name-price">
                <h4>Greek Salad</h4>
                <h4>$12.99</h4>
              </div>
              <p>
                The famous greek salad of crispy lettuce, peppers, olives and
                our Chicago style feta cheese, garnished with crunchy garlic and
                rosemary croutons.
              </p>
              <button type="button" class="btn btn-success">
                Order Delivery
              </button>
            </section>
          </div>
          <div className="item">
            <img src={bruschetta} alt="bruschetta" />
            <section>
              <div className="name-price">
                <h4>Bruschetta</h4>
                <h4>$5.99</h4>
              </div>
              <p>
                Our Bruschetta is made from grilled bread that has been smeared
                with garlic and seasoned with salt and olive oil.
              </p>
              <button type="button" class="btn btn-success">
                Order Delivery
              </button>
            </section>
          </div>
          <div className="item">
            <img src={lemon} alt="lemon" />
            <section>
              <div className="name-price">
                <h4>Lemon Cake</h4>
                <h4>$4.99</h4>
              </div>
              <p>
                This comes straight from grandma’s recipe book, every last
                ingredient has been sourced and is as authentic as can be
                imagined.
              </p>
              <button type="button" class="btn btn-success">
                Order Delivery
              </button>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Highlights;
