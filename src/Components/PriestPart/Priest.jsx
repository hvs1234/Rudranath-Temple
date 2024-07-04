import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import PriestData from "../../APIs/PriestAPI";

const Priest = () => {
  // API
  // ------------------------------------------- Priest API --------------------------------------
  const [priestdata] = React.useState(PriestData);

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-priest");

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
      <section className="section section-priest">
        <div className="priest-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h3 className="top-heading top-banner-heading">
            Guiding Souls on the Path of Devotion And Wisdom
          </h3>
          <h2 className="main-heading top-main-heading">
            {" "}
            Priest Of Rudranath Temple
          </h2>
        </div>
      </section>

      {/* Priest More Section */}

      <section className="section section-priest-more">
        <div className="container">
          {priestdata.map((curele) => {
            return (
              <div className={curele.mainclass} key={curele.id}>
                <div className={curele.classname}>
                  <img src={curele.img} alt="img" />
                </div>
                <div className={curele.priest_data_class}>
                  <h2 className="inner-heading">{curele.title}</h2>
                  <p className="inner-para">{curele.desc1}</p>
                  <p className="inner-para">{curele.desc2}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Priest;
