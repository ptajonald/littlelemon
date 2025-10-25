import logo from "../images/favilogo.png";
import "../styles/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <img src={logo} alt="logo" />
        <div>
          <h1>How To Find Us</h1>
          <p>123 E 200th St, Euclid, OH 44123</p>
          <p>(216) 692-0395</p>
          <p>littlelemon@gmail.com</p>
        </div>
        <div>
          <h1>Social Media</h1>
          <a href="www.facebook.com">Facebook</a>
          <a href="www.twitter.com">Twitter</a>
          <a href="www.instagram.com">instagram</a>
        </div>
      </footer>
    </>
  );
}

export default Footer;
