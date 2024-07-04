// import React from 'react'
import { Link } from "react-router-dom";
import about_img from "/Images/background/3.jpg";

const About = () => {
  // Reload Page

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="section section-about">
        <h3 className="top-heading">Jai Rudranath</h3>
        <h2 className="main-heading">
        <i className="fa-solid fa-om"></i>&nbsp; About Rudranath Temple&nbsp; <i className="fa-solid fa-om"></i>
        </h2>
        <div className="container">
          <div className="line"></div>
          <div className="about-content grid grid-two-columns">
            <div className="about-img">
              <img src={about_img} alt="about_img" />
            </div>
            <div className="about-data">
              <h2 className="inner-heading">
                The Divine Legend and Sacred History
              </h2>
              <p className="inner-para">
                Rudranath Temple holds a significant place in Hindu mythology.
                According to legend, the Pandavas sought Lord Shiva`s
                forgiveness here for their sins in the Kurukshetra war. Lord
                Shiva, eluding them, took the form of a bull and dived into the
                earth, with his face emerging at Rudranath. This sacred site,
                standing at 3,600 meters, is a testament to divine grace and
                spiritual endurance.
              </p>
              <div>
                <Link
                  to={"/about"}
                  className="inner-btn btn"
                  onClick={handleLinkClick('/about')}
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
