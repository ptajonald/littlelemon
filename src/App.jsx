import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import AboutPage from "./pages/AboutPage";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import LogIn from "./pages/LogIn";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Reviews from "./components/Reviews";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={App} />
          <Route path="aboutpage" element={<AboutPage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="orderonline" element={<OrderOnline />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
      <Hero />
      <Highlights />
      <Reviews />
      <About />
      <Footer />
    </>
  );
}

export default App;
