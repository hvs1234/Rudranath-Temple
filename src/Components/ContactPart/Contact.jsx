import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Contact = () => {
  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-contact");

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
      {/* Contact Part */}

      <section className="section section-contact">
        <div className="contact-top-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h2 className="main-heading top-main-heading">
            Connect with the Divine at Rudranath
          </h2>
        </div>
      </section>

      {/* Contact More Part */}

      <section className="section section-contactmore">
        <div className="contact-overlay"></div>
        <div className="container">
          <div className="contact-main grid grid-two-columns">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4282.896704103807!2d79.31596517622731!3d30.51939419591065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39082ba601233907%3A0x7d966708c387a497!2sRudranath%20Mandir!5e1!3m2!1sen!2sin!4v1719476619068!5m2!1sen!2sin"
              loading="lazy"
            ></iframe>
            <div className="contact-form-part">
              <form
                action="https://formspree.io/f/xgvwwqbk"
                method="POST"
                className="form"
              >
                <div className="input-main grid grid-two-columns">
                  <div className="input-data">
                    <label htmlFor="name">Your First Name *</label>
                    <input
                      type="text"
                      name="First Name 👉"
                      placeholder="Enter Your First Name"
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="input-data">
                    <label htmlFor="name">Your Last Name</label>
                    <input
                      type="text"
                      name="Last Name 👉"
                      placeholder="Enter Your Last Name"
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-data">
                    <label htmlFor="email">Your Email *</label>
                    <input
                      type="email"
                      name="Email 👉"
                      placeholder="Enter Your Valid Email Address"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-data">
                    <label htmlFor="phone">Your Phone *</label>
                    <input
                      type="number"
                      name="Phone Number 👉"
                      placeholder="Enter Your Valid Phone Number"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-data">
                    <label htmlFor="address">Your Stay Address *</label>
                    <textarea
                      cols={30}
                      rows={5}
                      type="text"
                      name="Current Address 👉"
                      placeholder="Enter Your Stay Address"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-data">
                    <label htmlFor="message">Your Message *</label>
                    <textarea
                      cols={30}
                      rows={5}
                      type="text"
                      name="Message 👉"
                      placeholder="Enter Your Message"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>
                <div className="input-main grid grid-one-columns">
                  <div className="input-data">
                    <input
                      className="btn contact-btn"
                      type="submit"
                      value="Contact Now"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Part */}

      <Footer />
    </>
  );
};

export default Contact;
