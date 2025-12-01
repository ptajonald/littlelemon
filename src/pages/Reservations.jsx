import ReservationForm from "../components/ReservationForm";
import Footer from "../components/Footer";
import "../styles/Reservations.css";

function Reservations() {
  return (
    <>
        <section id="first">
          <h1>Make A Reservation</h1>
          <p>
            Please fill in the form below to make a reservation at the Little
            Lemon Cleveland Restaurant
          </p>
        </section>
      <ReservationForm />
      <Footer />
    </>
  );
}

export default Reservations;
