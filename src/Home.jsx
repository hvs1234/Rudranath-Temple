import React from "react";
import Hero from "./Components/Hero Section/Hero";
import About from "./Components/About/About";
import HomeGallery from "./Components/GalleryPart/HomeGallery";
import HomeGalleryData from "./APIs/HomeGalleryAPI";
import Footer from "./Components/Footer/Footer";
import Trek from "./Components/TrekPart/Trek";
import Visitor from "./Components/VisitorPart/Visitor";
import Parallex from "./Components/ParallexPart/Parallex";

const Home = () => {
  // API
  // ----------------------------------- Home Gallery Data --------------------------------
  const [homegallerydata] = React.useState(HomeGalleryData);

  return (
    <>
      {/* Hero Section */}

      <Hero />

      {/* About Section */}

      <About />

      {/* Gallery Section */}

      <HomeGallery homegallerydata={homegallerydata} />

      {/* Trek Section */}

      <Trek />

      {/* Parallex Section */}

      <Parallex />

      {/* Visitor Section */}

      <Visitor />

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Home;
