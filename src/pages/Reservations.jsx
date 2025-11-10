import { useState } from "react";
import Footer from "../components/Footer";

function Reservations() {
  const [inputs, setInputs] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const email = e.target.email;
    const phone = e.target.phone;
    const date = e.target.date;
    const time = e.target.time;
    const guests = e.target.guests;
    const occasion = e.target.occasion;
    const requests = e.target.requests;
    const value = e.target.value;
    setInputs((values) => ({
      ...values,
      [name]: value,
      [email]: value,
      [phone]: value,
      [date]: value,
      [time]: value,
      [guests]: value,
      [occasion]: value,
      [requests]: value,
    }));
  };

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
        <form action="" className="" onSubmit={handleSubmit}>
          <section className="guest-info">
            <h1>Customer Infomation</h1>
            <section className="info">
              <div>
                <label htmlFor="name">Name</label>
              </div>
              <input
                name="name"
                type="text"
                id="name"
                placeholder=""
                className="form-input"
                value={inputs.name}
                onChange={handleChange}
                autocomplete="on"
                required
              />
            </section>
            <section className="info">
              <div>
                <label for="email">Email Address</label>
              </div>
              <input
                name="email"
                type="text"
                id="email"
                placeholder=""
                className="form-input"
                value={inputs.email}
                autocomplete="on"
                required
              />
            </section>
            <section className="info">
              <div>
                <label for="phone">Phone Number</label>
              </div>
              <input
                name="phone"
                type="text"
                id="phone"
                placeholder=""
                className="form-input"
                value={inputs.phone}
                autocomplete="on"
                required
              />
            </section>
          </section>
          <section className="guest-info">
            <h1>Reservation Details</h1>
            <section className="">
              <section className="data-inp">
                <label htmlFor="date">Select a date</label>
                <div className="">
                  <input
                    type="date"
                    id="date"
                    className="date-input"
                    placeholder="Select a date"
                    autocomplete="off"
                    value={inputs.date}
                    onChange={handleChange}
                    required
                  />
                </div>
              </section>
              <section className="data-inp">
                <label htmlFor="time">Select a time</label>
                <section className="flex items-center">
                  <select
                    name="time"
                    id="time"
                    placeholder="Select a time"
                    className="select"
                    value={inputs.time}
                    required
                  >
                    <option value="" hidden="">
                      Select a time
                    </option>
                    <option value="9:30">9:30</option>
                    <option value="10:30">10:30</option>
                    <option value="11:30">11:30</option>
                    <option value="12:30">12:30</option>
                    <option value="1:30">1:30</option>
                    <option value="2:30">2:30</option>
                    <option value="3:30">3:30</option>
                    <option value="4:30">4:30</option>
                    <option value="5:30">5:30</option>
                    <option value="6:30">6:30</option>
                    <option value="7:30">7:30</option>
                    <option value="8:30">8:30</option>
                  </select>
                </section>
              </section>
              <section className="data-inp">
                <label htmlFor="guests">Guests number</label>
                <section className="flex items-center">
                  <input
                    name="guests"
                    type="number"
                    id="guests"
                    placeholder="Number of guests"
                    className="select"
                    value={inputs.guests}
                    required
                  />
                </section>
              </section>
            </section>
            <section className="">
              <div className="">
                <label htmlFor="occasion">Occasion</label>
              </div>
              <input
                name="occasion"
                type="text"
                id="occasion"
                placeholder="Purpose of the reservation"
                className="form-input"
                value={inputs.occasion}
              />
            </section>
            <section className="">
              <div className="">
                <label htmlFor="request">Special Requests</label>
              </div>
              <input
                name="request"
                type="textarea"
                id="request"
                placeholder="Special requests for the reservation"
                className="form-input"
                value={inputs.request}
              />
            </section>
          </section>
          <section className="confirm">
            <button type="submit" className="" disabled="">
              Confirm Reservation
            </button>
            <button type="reset">Reset</button>
          </section>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Reservations;
