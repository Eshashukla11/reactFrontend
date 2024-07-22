import React from "react";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
      <Navbar />
      {/* section-1 */}
      <div className="section-1">
        <div className="hero-section-1">
          <div className="">
            <img src="" alt="" />
          </div>
          <div className="hero-img-section-1">
            <p className="hero-text white-text">
              Brainiac<span className="black-text">osm</span>
            </p>
          </div>
        </div>
        <div className="hero-section-1">
          <img src="" alt="" />
        </div>
        <p className="para-tag">WE ARE IN THE BUSINESS OF BUILDING BUSINESS</p>
      </div>
      {/* section-1 end */}
      {/* section-2 */}
      <div className="section-2">
        <div className="section-2-container">
          <div className="section-2-wrap-1">
            <p className="section-2-heading">
              Transform Your Business with Comprehensive Design, Development,
              and Growth Solutions
            </p>
          </div>
          <div className="section-2-wrap-2">
            <p className="section-2-sub-heading">
              Looking to modernize your traditional business or need expert
              support to launch your startup?We're here to help you succeed in
              the digital world.
            </p>
          </div>
          <div className="section-2-wrap-3">
            <button className="section-2-button-wrap-1">Book a call</button>
            <button className="section-2-button-wrap-2">Collaborate</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
