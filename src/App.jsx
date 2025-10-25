import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import OrderOnline from "./pages/OrderOnline";
import LogIn from "./pages/LogIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="aboutpage" element={<AboutPage />} />
          <Route path="menu" element={<Menu />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="orderonline" element={<OrderOnline />} />
          <Route path="login" element={<LogIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
