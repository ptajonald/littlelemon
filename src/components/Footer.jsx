import logo from "../images/favilogo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="logo" />
        <div>
          <h3>How To Find Us</h3>
          <p>123 E 200th St, Euclid, OH 44123</p>
          <p>(216) 692-0395</p>
          <p>littlelemon@gmail.com</p>
        </div>
        <div>
          <h3>Social Media</h3>
          <a href="https://www.facebook.com">Facebook</a><br/>
          <a href="https://www.twitter.com">Twitter</a><br/>
          <a href="https://www.instagram.com">Instagram</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
