// import React from 'react'
import visitor_img from "/Images/gallery/4.jpg";

const Visitor = () => {
  return (
    <>
      <section className="section section-visitor">
        <h3 className="top-heading">Your Guide to a Soulful Experience</h3>
        <h2 className="main-heading">
          <i className="fa-solid fa-eye"></i>&nbsp; Sanctuary Insights&nbsp;{" "}
          <i className="fa-solid fa-eye"></i>
        </h2>
        <div className="container">
          <div className="line"></div>
        </div>
        <div className="container">
          <div className="visitor-content grid grid-two-columns">
            <div className="visitor-data">
              <h2 className="inner-heading">Planning Your Sacred Journey</h2>
              <p className="inner-para">
                Prepare for your sacred pilgrimage to Rudranath Temple with our
                comprehensive guide. Learn about the best times to visit, the
                spiritual significance of different seasons, and the
                accommodations available for pilgrims.
              </p>
              <p className="inner-para">
                Ensure you are spiritually and physically ready for this journey
                with essential trekking tips and insights. Local guides and
                porters are available to support your spiritual quest, helping
                you navigate the path with devotion and ease.
              </p>
            </div>
            <div className="visitor-img">
              <img src={visitor_img} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Visitor;
