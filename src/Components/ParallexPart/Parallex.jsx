// import React from 'react'

import { Link } from "react-router-dom";

const Parallex = () => {
  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };
  return (
    <>
      <section className="section section-parallex">
        <div className="parallex-overlay"></div>
        <div className="container">
          <div className="parallex-content">
            <h3 className="parallex-top-heading">
              Custodians of Sacred Rituals and Traditions
            </h3>
            <h2 className="parallex-main-heading">
              <i className="fa-solid fa-hands-praying"></i>&nbsp; Divine Guides:
              The Priests of Rudranath Temple&nbsp;{" "}
              <i className="fa-solid fa-hands-praying"></i>
            </h2>
            <Link
              to={"/priest"}
              onClick={handleLinkClick("/priest")}
              className="btn parallex-btn"
            >
              About Priest
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Parallex;
