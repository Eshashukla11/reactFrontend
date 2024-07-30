import React from "react";
import Navbar from "./components/Navbar.jsx";
import Card from "./components/Card.jsx";
import FeatureCard from "./components/FeatureCard.jsx";
import EmpCard from "./EmpCard.jsx";
import ContactUsForm from "./components/ContactUsForm.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => setIsFormOpen(true);
  const closeForm = () => setIsFormOpen(false);

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
  const FeatureCardData = [
    {
      img: "/Img-10.png",
      heading: "In-House Expertise",
      desc: "Utilize our in-house expertise to handle project requirements efficiently.",
    },
    {
      img: "/Img-11.png",
      heading: " Strategic Collaborations",
      desc: "  Facilitate strategic collaborations from our extensive network to streamline project workflows.",
    },
    {
      img: "/Img-12.png",
      heading: "Simplified Process",
      desc: " We simplify your journey by connecting you directly with trusted service providers, ensuring seamless project execution.",
    },
  ];
  const NameCard = [
    {
      img: "/Img-16.png",
      name: "Pratip Pratap",
      designation: "Founder & CEO",
    },
    {
      img: "/Img-17.png",
      name: "Sanjeev Kr.",
      designation: "Project Lead",
    },
    {
      img: "/Img-18.png",
      name: "Neha Sharma",
      designation: "Social Media Inc.",
    },
    {
      img: "/Img-19.png",
      name: "Mausam Singh",
      designation: "Vendor Co-ord.",
    },
    {
      img: "/Img-20.png",
      name: "Arti Kumari",
      designation: "Team Lead Ops.",
    },
    {
      img: "/Img-21.png",
      name: "Raj Nandini",
      designation: "Team Lead Ops.",
    },
  ];
  return (
    <div>
      <Navbar />
      {/* section-1 */}
      <div className="section-1">
        <div className="section-1-container">
          <div className="hero-section-1">
            <div className="hero-section-1-img-wrap">
              <img src="Img-15.png" alt="" />
            </div>
            <div className="hero-img-section-1">
              <p className="hero-text white-text">
                Brainiac<span className="black-text">osm</span>
              </p>
            </div>
          </div>
          <div className="hero-section-1">
            <div className="section-1-img-wrap">
              <img src="/Img-2.png" alt="" />
            </div>
          </div>
        </div>
        <div className="section-1-card">
          <p className="para-tag">
            WE ARE IN THE BUSINESS OF BUILDING BUSINESS
          </p>
        </div>
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
            <a className="section-2-button-wrap-1" href="tel:+91 9131959993">
              Book a call
            </a>
            <button onClick={openForm} className="section-2-button-wrap-2">
              Collaborate
            </button>
          </div>
        </div>
         {isFormOpen && <ContactUsForm closeForm={closeForm} />}
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
          <div className="section-4-img-wrap">
            <img src="/svgviewer-output.svg" alt="" />
          </div>
          <div className="section-4-heading">
            <p className="section-4-text-heading">Our Vision</p>
          </div>
          <div className="section-4-description">
            <p className="section-4-text-description">
              To be the leading provider of innovative solutions, empowering
              businesses to thrive in the digital age through exceptional
              design, development, and growth services. We aim to transform
              traditional businesses and support startups, driving their success
              with cutting-edge technology and unparalleled customer service.
            </p>
          </div>
          <img
            className="section-4-cloud-img img-wrap-1"
            src="/Img-3.png"
            alt=""
          />
          <img
            className="section-4-cloud-img img-wrap-2"
            src="/Img-3.png"
            alt=""
          />
          <img
            className="section-4-cloud-img img-wrap-3"
            src="/Img-3.png"
            alt=""
          />
          <img
            className="section-4-cloud-img img-wrap-4"
            src="/Img-3.png"
            alt=""
          />
        </div>
      </div>
      {/* section-4 end */}

      {/* section-5 */}
      <div className="section-5">
        <div className="section-5-container">
          <h1 className="section-5-heading">How we deliver?</h1>
          <p className="section-5-description">
            We facilitate collabration by leverging our extensive database to
            streamline and simplify the process for our clients, ensuring
            efficient project execution through our own expertise and resources.
          </p>
          <div className="section-5-card-container">
            {FeatureCardData.map((item, index) => (
              <FeatureCard FeatureCardData={item} />
            ))}
          </div>
        </div>
      </div>
      {/* section-5 end */}

      {/* section-6 */}
      <div className="section-6">
        <div className="section-6-container">
          <h1 className="section-6-heading">Meet our team</h1>
          <p className="section-6-description">
            Get to know the passionate minds driving innovation and excellence
            at our core.
          </p>
          <div className="section-6-card-container">
            {NameCard.map((item, index) => (
              <EmpCard NameCard={item} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* section-6 end */}

      {/* section-7 */}
      <div className="section-7">
        <div className="section-7-container">
          <h1 className="section-7-heading">
            Why Choose Brainiac<span className="black-heading">osm</span> for
            Your Business?
          </h1>
          <div className="section-7-card-container">
            <div className="section-7-card-wrap">
              <p className="section-7-text-heading">From Vision to Reality</p>
              <p className="section-7-text-description">
                From transforming traditional businesses to supporting startup
                ventures, we specialize in delivering comprehensive design,
                development, and growth services. Whether you're looking to
                digitalize your operations or launch new idea, our team equipped
                to drive your successwith tailored strategies nd innovative
                solutions.
              </p>
            </div>
            <div className="section-7-card-wrap">
              <p className="section-7-text-heading">
                Transparent Communication
              </p>
              <p className="section-7-text-description">
                We prioritize clear and direct communication, ensuring you stay
                informed with real-time updates and seamless interaction with
                our team of experts. This approach guarantees transparency and
                collaboration for successful project outcomes.
              </p>
            </div>
            <div className="section-7-card-wrap">
              <p className="section-7-text-heading">Flexibility to Scale</p>
              <p className="section-7-text-description">
                We offer adaptable solutions tailored to meet our specific
                business needs, allowing you to scale operations efficiently.
                Whether you require short-term support or long-term
                partnerships, we empower your business to grow according to
                project demands.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* section-7 end */}

      {/* footer-section */}

      <Footer />
      {/* footer end */}
    </div>
  );
}

export default App;
