import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";

function App() {
  const data = [
    {
      heading: "Website & Application Development",
      desc: " Elevate your business with our cutting-edge, efficent, and top-tier web development services.",
    },
    {
      heading: "Marketplace Management",
      desc: "  Optimize your online marketplace with our comprehensive management services, ensuring seamless operations and increased sales.",
    },
    {
      heading: "Digital Marketing",
      desc: " Expand reach with our comprehensive digital marketing services,including influencer marketing, to connect with your target audience effectively.",
    },
    {
      heading: "Customer Support",
      desc: " Deliver exceptional service with our customer support solutions, offering both voice and chat assistance to ensure your clients are always satisfied.",
    },
    {
      heading: "Customer Acquistion",
      desc: " Boost your customer base with our strategic, data-driven acquistion services designed to attract and retain high-value clients effectively.",
    },
    {
      heading: "Corporate Events",
      desc: " Enhance your brand's presence with our expertly managed corporate events, designed to impress and engage your audience.",
    },
  ];
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
      {/* section-2 end */}

      {/* section-3 */}
      <div className="section-3">
        <div className="section-3-container">
          <div className="section-3-wrap-1">
            <div className="section-3-heading">
              <p className="section-3-bold-text">
                Shaping the Future of Startup Solutions
              </p>
            </div>
            <div className="section-3-sub-heading">
              <p className="section-3-light-text">
                Discover our extensive suite of professional services tailored
                to optimize your processes and propel your business to
                unprecedented levels of success.
              </p>
            </div>
          </div>
          <div className="section-3-wrap-2">
            {data.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* section-3 end */}
      {/* section-4 */}
      <div className="section-4">
        <div className="section-4-container">
<div className='section-4-img-wrap'>
  <img src="/svgviewer-output.svg" alt="" />
</div>
<div className='section-4-heading'>
  <p className='section-4-text-heading'>Our Vision</p>
</div>
<div className='section-4-description'>
  <p className="section-4-text-description">To be the leading provider of innovative solutions, empowering businesses to thrive in the digital age through exceptional design, development, and growth services. We aim to transform traditional businesses and support startups, driving their success with cutting-edge technology and unparalleled customer service.</p>
</div>
        </div>
      </div>
      {/* section-4 end */}

      {/* section-5 */}
      <div className="section-5">
        <div className='section-5-container'>

        </div>
      </div>
    </div>
  );
}

export default App;
