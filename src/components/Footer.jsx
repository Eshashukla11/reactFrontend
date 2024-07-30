import React from "react";
import { FiInstagram } from "react-icons/fi";
import { TfiLinkedin } from "react-icons/tfi";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-section-container">
        <div className="footer-section-wrapper">
          <div className="footer-section-img-wrap">
            <img src="/Img-15.png" alt="" />
          </div>
          <p className="footer-section-item">
            Brainiacosm
          </p>
          <p className="footer-section-item">
            Providing reliable tech since 2023
          </p>
        </div>
        <div className="footer-section-wrapper">
          <h3 className="footer-section-item bold">COMPANY</h3>
          <a href className="footer-section-item">
            About us
          </a>
          <a href className="footer-section-item">
            Our Creed
          </a>
          <a href className="footer-section-item">
            Our Presence
          </a>
        </div>
        <div className="footer-section-wrapper">
          <h3 className="footer-section-item bold">PRODUCTS</h3>
          <a href className="footer-section-item">
            EduWerkz
          </a>
          <a href className="footer-section-item">
            OfiWerkz
          </a>
        </div>
        <div className="footer-section-wrapper">
          <h3 className="footer-section-item bold">SERVICES</h3>
          <a href className="footer-section-item">
            HR Management
          </a>
          <a href className="footer-section-item">
            Digital Edge
          </a>
          <a href className="footer-section-item">
            Sales & Marketing
          </a>
        </div>
        <div className="footer-section-wrapper">
          <h3 className="footer-section-item bold">CONTACT</h3>
          <p className="footer-section-item">Phone</p>
          <a href className="footer-section-item">
            9962759154
          </a>
          <a href className="footer-section-item">
            ############
          </a>
          <p className="footer-section-item">Email</p>
          <a href className="footer-section-item">
            business@brainiacosm.com
          </a>
        </div>
      </div>
      <div className="footer-section-menu">
        <div className="footer-section-link">
          <a className="footer-section-icon" href>
            <FiInstagram className="icon" />
          </a>
          <a className="footer-section-icon" href>
            <TfiLinkedin className="icon" />
          </a>
        </div>
        <div className="footer-section-text">
          <p className="footer-section-item center">
            Copyright © $2024 – Werkbiz, All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
