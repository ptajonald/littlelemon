import Footer from "../components/Footer";

function AboutPage() {
  return (
    <>
      <section id="about">
        <div id="about-left">
          <h3>Little Lemon</h3>
          <h2>Cleveland</h2>
          <p>
            Hours: <br />
            Sunday-Thursday: 10AM-10PM <br />
            Friday-Saturday: 10AM-12AM
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam congue
            tortor ut mi pellentesque consectetur. Nullam tristique dolor at
            erat volutpat, feugiat porta augue aliquam. Aliquam nulla elit,
            tincidunt non urna et, vestibulum facilisis arcu. Nullam dapibus
            semper justo, id.
          </p>
        </div>
        <div id="about-right">
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutPage;
