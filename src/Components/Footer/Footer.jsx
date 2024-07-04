// import React from 'react'
import om_logo from "/Images/om.png";
import swastik_logo from "/Images/swastik.png";

const Footer = () => {
  return (
    <>
      <section className="section section-footer" id="footer">
        <div className="footer-overlay"></div>
        <div className="container">
          <div className="f-main grid grid-three-columns">
            <div className="f-img">
              <img src={om_logo} alt="img" />
            </div>
            <div className="f-content">
              <h3>
                ऊँ तद्पुरुषाय विद्वमहे, महादेवाय धीमहि तन्नो रुद्र प्रचोदयात्
              </h3>
            </div>
            <div className="f-img">
              <img src={swastik_logo} alt="img" />
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Section */}

      <div className="copyright">
        <div className="copyright-content">
          <p>
            <i className="fa-regular fa-copyright"></i>&nbsp; Copyright 2024.
            Rudranath Temple | All Right Reserved |
          </p>
          <div className="social-links">
            <a href="#footer">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#footer">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#footer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
