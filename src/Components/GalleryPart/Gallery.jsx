import React from "react";
import Navbar from "../Navbar/Navbar";
import GalleryData from "../../APIs/GalleryAPI";
import Footer from "../Footer/Footer";

const Gallery = () => {
  // API
  // ------------------------------------ Gallery API ---------------------------------------

  const [gallerydata] = React.useState(GalleryData);

  // Reload Page

  // const handleLinkClick = (path) => (e) => {
  //   e.preventDefault();
  //   window.location.pathname = path;
  //   window.scrollTo(0, 0);
  // };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-gallery");

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
      (currentIndex - 1 + gallerydata.length) % gallerydata.length;
    setPopupImage(gallerydata[prevIndex].img);
    setCurrentIndex(prevIndex);
  };

  const showNextImage = () => {
    const nextIndex = (currentIndex + 1) % gallerydata.length;
    setPopupImage(gallerydata[nextIndex].img);
    setCurrentIndex(nextIndex);
  };

  return (
    <>
      <section className="section section-gallery">
        <div className="gallery-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h3 className="top-heading top-banner-heading">
            Celebrating Beauty and Inspiration in Every Piece
          </h3>
          <h2 className="main-heading top-main-heading">
            A Visual Journey of Divine Beauty
          </h2>
        </div>
      </section>

      {/* Gallery More Section */}

      <section className="section section-gallerymore">
        <p className="main-para">
          Immerse yourself in the divine beauty of Rudranath Temple and its
          surrounding landscapes through our photo gallery. Each image captures
          the essence of this sacred place, from the majestic temple itself to
          the serene, spiritual vistas encountered on the pilgrimage. Let these
          visuals inspire and deepen your spiritual connection with Rudranath.
        </p>
        <div className="container homegallery-container">
          <div className="gallery">
            {gallerydata.map((curele) => {
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
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Gallery;
