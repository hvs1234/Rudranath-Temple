import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HomeGallery = ({ homegallerydata }) => {
  // Reload Page

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  // Full Screen Images

  const [popupVisible, setPopupVisible] = React.useState(false);
  const [popupImage, setPopupImage] = React.useState("");
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const openPopup = (img) => {
    setPopupImage(img);
    setPopupVisible(true);
    document.querySelector(".header").classList.add("hidden");
  };

  const closePopup = () => {
    setPopupVisible(false);
    setPopupImage("");
    document.querySelector(".header").classList.remove("hidden");
  };

  const showPrevImage = () => {
    const prevIndex =
      (currentIndex - 1 + homegallerydata.length) % homegallerydata.length;
    setPopupImage(homegallerydata[prevIndex].img);
    setCurrentIndex(prevIndex);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % homegallerydata.length;
    setPopupImage(homegallerydata[nextIndex].img);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <section className="section section-homegallery">
        <h3 className="top-heading">Om Namah Shivay</h3>
        <h2 className="main-heading">
          <i className="fa-solid fa-hands-praying"></i>&nbsp; The Divine
          Experience&nbsp; <i className="fa-solid fa-hands-praying"></i>
        </h2>
        <div className="container">
          <div className="line"></div>
        </div>
        <div className="container homegallery-container">
          <div className="gallery">
            {homegallerydata.map((curele) => {
              return (
                <div
                  className={curele.class}
                  key={curele.id}
                  onClick={() => openPopup(curele.img)}
                >
                  <img src={curele.img} alt="img" />
                </div>
              );
            })}
          </div>
          {popupVisible && (
            <div className="popup-img" style={{ display: "block" }}>
              <div className="popup-content">
                <span className="close" onClick={closePopup}>
                  &times;
                </span>
                <div className="prev-container" onClick={showPrevImage}>
                  <span className="prev">&#10094;</span>
                </div>
                <img src={popupImage} alt="Full size img" />
                <div className="next-container" onClick={showNextImage}>
                  <span className="next">&#10095;</span>
                </div>
              </div>
            </div>
          )}
          <div>
            <Link
              className="btn homegallery-btn"
              to={"/gallery"}
              onClick={handleLinkClick("/gallery")}
            >
              Explore More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

HomeGallery.propTypes = {
  homegallerydata: PropTypes.array.isRequired,
};

export default HomeGallery;
