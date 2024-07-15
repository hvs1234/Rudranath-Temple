import React, { useEffect, useRef, useState } from "react";

import Navbar from "../Navbar/Navbar";
import img1 from "/Images/swastik2.png";
import Footer from "../Footer/Footer";

const Donation = () => {
  // Sticky Navbar

  React.useEffect(() => {
    const sectionHero = document.querySelector(".section-donation");

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

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const donationFormRef = useRef(null);

  useEffect(() => {
    fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states")
      .then((response) => response.json())
      .then((data) => {
        setStates(data.states);
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }, []);

  useEffect(() => {
    if (selectedState !== "") {
      fetch(
        `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${selectedState}`
      )
        .then((response) => response.json())
        .then((data) => {
          setDistricts(data.districts);
        })
        .catch((error) => {
          console.error("Error fetching districts:", error);
        });
    }
  }, [selectedState]);

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
  };

  // Show Pan Input

  const [showPanInput, setShowPanInput] = useState(false);

  const handleCheckboxChange = () => {
    setShowPanInput(!showPanInput);
  };

  // Popup Payment Form

  const handleDonateNowClick = (e) => {
    e.preventDefault();
    if (donationFormRef.current.checkValidity()) {
      setShowPaymentForm(true);
    } else {
      donationFormRef.current.reportValidity();
    }
  };

  const handleClosePopup = () => {
    setShowPaymentForm(false);
  };

  return (
    <>
      {/* Donation Part */}

      <section className="section-donation">
        <div className="donation-overlay"></div>
        <Navbar />
        <div className="top-banner-content">
          <h3 className="top-heading top-banner-heading">
            Awaken Your Spiritual Self
          </h3>
          <h2 className="main-heading top-main-heading">
            Set Forth on a Sacred Journey at Rudranath Temple
          </h2>
        </div>
      </section>

      {/* Donation Main */}

      <section className="section section-donation-main">
        <h2 className="main-heading">Why Donate Us?</h2>
        <div className="container">
          <div className="line"></div>
        </div>
        <p className="main-para">
          Your generous donation to Rudranath Temple helps preserve a sacred
          site of immense spiritual significance. Contributions support the
          maintenance of the temple, ensuring it remains a serene sanctuary for
          pilgrims seeking solace and divine connection. Funds are used for
          environmental conservation, protecting the pristine beauty of the
          surrounding Himalayas. Donations also aid in community development,
          providing education and healthcare to local residents. By donating,
          you become part of a noble mission to uphold ancient traditions and
          foster a spiritual legacy for future generations. Your support is a
          powerful act of devotion and a meaningful way to give back.
        </p>
        <div className="container">
          <div className="donate-main">
            <img src={img1} alt="img" />
            <h2 className="inner-heading">Make Donation</h2>
            <img src={img1} alt="img" />
          </div>
          <div className="donation-form-part">
            <form
              action=""
              ref={donationFormRef}
              className="form donation-form"
            >
              <p className="form-heading">Personal Details</p>
              <div className="input-main grid grid-two-columns">
                <div className="input-data">
                  <label htmlFor="name">Pilgrim Name *</label>
                  <input
                    type="text"
                    name="Pilgrim Name"
                    placeholder="Your Name"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="input-data">
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="number"
                    name="Phone"
                    placeholder="+91 Mobile Number"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <div className="input-main grid grid-two-columns">
                <div className="input-data">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="Email"
                    placeholder="Your Email"
                    autoComplete="off"
                  />
                </div>
                <div className="input-data">
                  <label htmlFor="amount">Amount (Rs.) *</label>
                  <input
                    type="number"
                    name="Amount"
                    placeholder="₹ 100/- or above"
                    required
                    autoComplete="off"
                  />
                </div>
              </div>
              <p className="form-heading">Request for 80G Certificate</p>
              <div className="input-main grid grid-one-columns">
                <div className="input-data-select">
                  <input
                    className="check-input"
                    type="checkbox"
                    onChange={handleCheckboxChange}
                    required
                  />
                  <label htmlFor="check">
                    I want 80-G certificate against the donated amount *
                  </label>
                </div>
              </div>
              <div className="input-main grid grid-two-columns">
                {showPanInput && (
                  <div className="input-data">
                    <label htmlFor="pan">PAN Number *</label>
                    <input
                      className="check-input"
                      name="PAN Card Number"
                      type="text"
                      placeholder="PAN Card Number"
                      required
                    />
                  </div>
                )}
              </div>
              <p className="form-heading">Address Details</p>
              <div className="input-main grid grid-two-columns">
                <div className="input-data">
                  <label htmlFor="country">Country *</label>
                  <select name="Country" id="country" required>
                    <option value="india">India</option>
                  </select>
                </div>
                <div className="input-data">
                  <label htmlFor="state">State *</label>
                  <select
                    name="State"
                    id="state"
                    value={selectedState}
                    onChange={handleStateChange}
                    required
                  >
                    <option value="">Select</option>
                    {states.map((state) => (
                      <option key={state.state_id} value={state.state_id}>
                        {state.state_name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="input-main grid grid-two-columns">
                <div className="input-data">
                  <label htmlFor="district">District *</label>
                  <select name="district" id="district" required>
                    <option value="">Select</option>
                    {districts.map((district) => (
                      <option
                        key={district.district_id}
                        value={district.district_id}
                      >
                        {district.district_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-data">
                  <label htmlFor="pincode">Pincode *</label>
                  <input
                    type="number"
                    name="Pincode"
                    placeholder="Pincode"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>
              <div className="input-main grid grid-one-columns">
                <div className="input-data">
                  <label htmlFor="address">Address *</label>
                  <textarea
                    name="Address"
                    rows={5}
                    cols={30}
                    placeholder="Your Address"
                    autoComplete="off"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="input-main grid grid-one-columns">
                <div className="input-main">
                  <button className="btn donation-btn" onClick={handleDonateNowClick}>
                    <i className="fa-solid fa-heart"></i>&nbsp; Donate Now
                    &nbsp;<i className="fa-solid fa-heart"></i>
                  </button>
                </div>
              </div>
            </form>

            {showPaymentForm && (
              <div className="popup">
                <div className="popup-content">
                  <span className="close" onClick={handleClosePopup}>
                    &times;
                  </span>
                  <form action="" className="form donation-form payment-form">
                    <div className="input-main grid grid-one-columns">
                      <div className="input-data">
                        <label htmlFor="cardholder">Card Holder *</label>
                        <input
                          type="text"
                          placeholder="👤 Holder's Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="input-main grid grid-one-columns">
                      <div className="input-data">
                        <label htmlFor="cardholder">Card Number *</label>
                        <input
                          type="text"
                          placeholder="💳 Card Number"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="input-main grid grid-two-columns">
                      <div className="input-data">
                        <label htmlFor="cardholder">Expiry Date *</label>
                        <input
                          type="date"
                          placeholder="📆"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="input-data">
                        <label htmlFor="cardholder">CVC *</label>
                        <input
                          type="number"
                          placeholder="🔐 000"
                          autoComplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="input-main grid grid-one-columns">
                      <div className="input-main">
                        <button className="btn pay-btn">
                          <i className="fa-solid fa-lock"></i>&nbsp; Pay
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Footer Section */}

      <Footer />
    </>
  );
};

export default Donation;
