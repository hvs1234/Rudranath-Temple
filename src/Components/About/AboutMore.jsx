import React from "react";
import Navbar from "../Navbar/Navbar";
import aboutmore_top_img from "/Images/background/3.jpg";
import about_main_img from "/Images/background/1.jpg";
import spiritual_img from "/Images/about/img2.jpg";
import Footer from "../Footer/Footer";

const AboutMore = () => {
  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-aboutmore");

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
      {/* About More Section */}

      <section className="section section-aboutmore">
        <div className="aboutmore-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h3 className="top-heading top-banner-heading">Jai Rudranath</h3>
          <h2 className="main-heading top-main-heading">
            Embark The Journey In Rudranath Temple
          </h2>
        </div>
        {/* <div className="banner-other">
          <img src={aboutmore_banner} alt="img" />
        </div> */}
      </section>

      {/* About More Part */}

      <section className="section section-aboutmore-part">
        <p className="main-para">
          Rudranath Temple holds a significant place in Hindu mythology.
          According to legend, the Pandavas sought Lord Shiva`s forgiveness here
          for their sins in the Kurukshetra war. Lord Shiva, eluding them, took
          the form of a bull and dived into the earth, with his face emerging at
          Rudranath. This sacred site, standing at 3,600 meters, is a testament
          to divine grace and spiritual endurance. The temple`s stone structure,
          blending seamlessly with its natural surroundings, offers a sanctuary
          for deep reflection and worship.
        </p>
        <div className="container">
          <div className="aboutmore-top-img">
            <img src={aboutmore_top_img} alt="aboutmore-top-img" />
          </div>
        </div>
      </section>

      {/* About More Second */}

      <section className="section section-aboutmore-second">
        <div className="container">
          <div className="about-main">
            <h2 className="main-heading">Sacred Himalayan Sanctuary</h2>
            <div className="line"></div>
            <div className="about-main-content grid grid-two-columns">
              <div className="about-main-data">
                <h2 className="inner-heading">
                  The Divine Legend and Sacred History
                </h2>
                <p className="inner-para">
                  Rudranath Temple holds a significant place in Hindu mythology.
                  According to legend, the Pandavas sought Lord Shiva`s
                  forgiveness here for their sins in the Kurukshetra war. Lord
                  Shiva, eluding them, took the form of a bull and dived into
                  the earth, with his face emerging at Rudranath.
                </p>
                <p className="inner-para">
                  This sacred site, standing at 3,600 meters, is a testament to
                  divine grace and spiritual endurance. The temple`s stone
                  structure, blending seamlessly with its natural surroundings,
                  offers a sanctuary for deep reflection and worship.
                </p>
              </div>
              <div className="about-main-img">
                <img src={about_main_img} alt="about-main-img" />
              </div>
            </div>
          </div>
          <div className="about-main2">
            <h2 className="main-heading">Spiritual Significance</h2>
            <div className="line"></div>
            <div className="about-main-content grid grid-two-columns">
              <div className="about-main-img">
                <img src={spiritual_img} alt="spiritual-img" />
              </div>
              <div className="about-main-data">
                <h2 className="inner-heading">Embracing the Divine Presence</h2>
                <p className="inner-para">
                  Rudranath Temple is a beacon of spiritual light and
                  tranquility. Pilgrims believe that a visit here during the
                  sacred monsoon festival of Shravan (July-August) is
                  particularly auspicious, offering a deep sense of divine
                  connection and inner peace. The temple rituals and hymns
                  resonate with the divine energy of Lord Shiva, providing a
                  transformative spiritual experience. Embrace the divine
                  presence, seek blessings, and find liberation from the cycle
                  of life and death.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About More Third */}

      <section className="section section-aboutmore-third">
        <h2 className="main-heading">
          A Journey Through Rudranath Temple`s History
        </h2>
        <div className="container">
          <div className="line"></div>
        </div>
        <p className="main-para">
          Rudranath Temple is a temple of Lord Shiva situated in Chamoli
          district of Uttarakhand state of India, which is one of the
          Panchkedars .Located at an altitude of 2290 meters above sea level,
          the Rudranath temple is full of grand natural shade. In the Rudranath
          temple, Lord Shankar`s Ekanan means that the face is worshiped, while
          the whole body is worshiped in the Pashupatinath of Nepal`s capital of
          Kathmandu. The Nanda Devi and the snow-covered peaks of Trishul are
          visible from the front of the Rudranath temple.
        </p>
        <div className="table-container">
          <h2 className="inner-heading table-heading">
            Rudranath Temple Timing
          </h2>
          <table>
            <thead>
              <tr>
                <th>Rudranath Temple</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Morning Arti</td>
                <td>06:00 AM - 08:00 AM</td>
              </tr>
              <tr>
                <td>Morning Darshan General Time</td>
                <td>08:00 AM - 01:00 PM</td>
              </tr>
              <tr>
                <td>Evening Arti</td>
                <td>06:30 PM - 07:30 PM</td>
              </tr>
              <tr>
                <td>Evening Darshan General Time</td>
                <td>04:00 PM - 07:30 PM</td>
              </tr>
            </tbody>
          </table>
          <p className="table-para">
            The Rudranath Temple remains closed from 01:00 PM to 04:00 PM.
          </p>
        </div>
        <p className="main-para">
          According to the stories, after the Mahabharata war, the Pandavas
          wanted to get rid of their sins. For this, he went to Shri Krishna and
          wanted to know the solution from him. Then Lord Krishna advised the
          Pandavas to go to the shelter of Lord Shankar. There are stories that
          Lord Shiva was angry with the Pandavas because the Pandavas destroyed
          their own clan. So when the Pandavas reached Varanasi, Lord Shiva came
          and hid in Guptkashi, when the Pandavas reached Guptkashi, Bholenath
          reached Kedarnath and took the form of a bull. It is said that
          Pandavas received blessings from Lord Shiva.
        </p>
        <p className="main-para">
          There are popular beliefs that when Lord Shankar disappeared as a
          bull, the upper part of his torso appeared in{" "}
          <strong>Kathmandu</strong>, which is known as Pashupatinath. Then
          there is the worship of Lord Shiva`s arms in Tungnath, the navel in{" "}
          <strong>Madhyamaheshwar</strong>, the shape of the bull`s back-body in
          Shri Kedarnath. Apart from this, it is said that Lord Shiva`s jata
          appeared in Kalpeshwar and Mukh Rudranath. These five places are
          called Panchkedar. One of them is <strong>Rudranath Temple</strong>.
        </p>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default AboutMore;
