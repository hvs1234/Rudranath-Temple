import React from "react";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  // Reload Page

  const handleLinkClick = (path) => (e) => {
    e.preventDefault();
    window.location.pathname = path;
    window.scrollTo(0, 0);
  };

  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-hero");

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

  // Slider Image

  const images = [
    "/Images/background/3.jpg",
    "/Images/background/2.jpg",
    "/Images/background/4.jpg",
    "/Images/background/5.jpg",
    "/Images/gallery/3.jpg",
    "/Images/gallery/10.jpg",
    "/Images/gallery/6.jpg",
    "/Images/gallery/9.jpg",
    "/Images/gallery/5.jpg",
    "/Images/gallery/8.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const len = images.length;

    const slider = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % len);
    };

    const interval = setInterval(slider, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <section
        className="section section-hero"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      >
        <div className="hero-overlay"></div>
        <Navbar />
        <div className="hero-main-content">
          <h1 className="hero-heading">
            Welcome To The Adobe In The Rudranath Temple
          </h1>
          <Link
            to={"/about"}
            onClick={handleLinkClick("/about")}
            className="btn hero-btn"
          >
            Know More&nbsp; <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
        {/* <div className="banner">
          <div className="slider">
            <img
              src={images[currentImageIndex]}
              alt={`slider-img-${currentImageIndex}`}
              id="slideImg"
            />
          </div>
          <div className="overlay">
            <Navbar />
            <div className="container">
              <div className="hero-content">
                <h1 className="hero-heading">
                  Welcome to the Sacred Abode of Rudranath Temple
                </h1>
                <Link
                  to={"/about"}
                  className="hero-btn btn"
                  onClick={handleLinkClick("/about")}
                >
                  Know More&nbsp;{" "}
                  <i className="fa-solid fa-arrow-right-long"></i>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Hero;
