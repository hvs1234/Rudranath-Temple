// import React from 'react'
import img from "/Images/featured/img1.jpg";
import PropTypes from "prop-types"

const Featured = ({ featuredData }) => {
  return (
    <>
      <section className="section section-featured">
        <h3 className="featured-top-para top-heading">
          Know About Some Places Before Your Travel
        </h3>
        <h2 className="featured-heading main-heading">Featured Places</h2>
        <div className="container">
          <div className="featured-img grid grid-three-columns">
            {featuredData.map((curele) => {
              return (
                <div className="featured-box" key={curele.id}>
                  <img src={img} alt="" />
                  <div className="featured-overlay">
                    <h3>
                      <i className="fa-solid fa-location-dot"></i>&nbsp; Pauri,
                      Uttarakhand, India
                    </h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

Featured.propTypes = {
  featuredData: PropTypes.array.isRequired,
};

export default Featured;
