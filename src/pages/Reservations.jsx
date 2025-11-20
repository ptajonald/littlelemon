import ReservationForm from "../components/ReservationForm";
import Footer from "../components/Footer";

function Reservations() {
  return (
    <>
      <div>
        <section>
          <h1>Make A Reservation</h1>
          <p>
            Please fill in the form below to make a reservation at the Little
            Lemon Cleveland Restaurant
          </p>
        </section>
      </div>
      <ReservationForm />
      <Footer />
    </>
  );
}

export default Reservations;
