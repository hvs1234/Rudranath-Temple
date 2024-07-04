import React from "react";
import Navbar from "../Navbar/Navbar";
// import reach_map from "/Images/map.jpg";
import Footer from "../Footer/Footer";

const Reach = () => {
  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-reach");

    const observerCallback = (entries) => {
      const ent = entries[0];
      !ent.isIntersecting
        ? document.body.classList.add("sticky")
        : document.body.classList.remove("sticky");
    };

    const options = {
      root: null,
      threshold: 0,
      rootMargin: "-100px",
    };

    const observer = new IntersectionObserver(observerCallback, options);

    observer.observe(sectionHero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Reach Section */}

      <section className="section section-reach">
        <div className="reach-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h3 className="top-heading top-banner-heading">
            Path to Inner Peace and Enlightenment
          </h3>
          <h2 className="main-heading top-main-heading">How To Reach</h2>
        </div>
      </section>

      {/* Section Reach Mpre */}

      <section className="section section-reachmore">
        <div className="container container2">
          <div className="reachmore-content">
            <div className="reach-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4282.896704103807!2d79.31596517622732!3d30.519394195910643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39082ba601233907%3A0x7d966708c387a497!2sRudranath%20Mandir!5e1!3m2!1sen!2sin!4v1719824693241!5m2!1sen!2sin"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Reach;
