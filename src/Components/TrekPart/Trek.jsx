// import React from 'react'
import trek_img from "/Images/gallery/8.jpg";

const Trek = () => {
  return (
    <>
      <section className="section section-trek">
        <h3 className="top-heading">The Holy Trek</h3>
        <h2 className="main-heading">
          <i className="fa-solid fa-om"></i>&nbsp; Pilgrimage Through the
          Himalayas&nbsp; <i className="fa-solid fa-om"></i>
        </h2>
        <div className="container">
          <div className="line"></div>
        </div>
        <div className="container">
          <p className="main-para">
            The journey to Rudranath Temple is more than a trek; it is a
            pilgrimage through the sacred landscapes of the Himalayas. Starting
            from Sagar Village, this 20-kilometer trek leads you through verdant
            forests and pristine alpine meadows, each step bringing you closer
            to divine communion. As you traverse this holy path, immerse
            yourself in the chants of nature and the whispers of the ancient
            spirits that inhabit these lands. Prepare spiritually and physically
            for a journey that promises both challenge and revelation.
          </p>
          <div className="container">
            <div className="trek-content">
              <div className="trek-img">
                <img src={trek_img} alt="img" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trek;
