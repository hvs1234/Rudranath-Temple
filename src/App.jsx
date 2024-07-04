// import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AboutMore from "./Components/About/AboutMore";
import Gallery from "./Components/GalleryPart/Gallery";
import Priest from "./Components/PriestPart/Priest";
import Reach from "./Components/ReachPart/Reach";
import Contact from "./Components/ContactPart/Contact";
import Live from "./Components/LivePart/Live";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutMore />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/priest" element={<Priest />}></Route>
          <Route path="/reach" element={<Reach />}></Route>
          <Route path="/live" element={<Live />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
