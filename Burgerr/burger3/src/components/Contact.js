import React from 'react';
import BannerImage from '../img/banner.png';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form>
          <label>Name-Surname</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name and Surname Please..."
          />
          <label>E-Mail</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Your E-Mail Please..."
          />
          <label>Your Message</label>
          <textarea
            rows="6"
            name="message"
            placeholder="Enter Your Message Please..."
          ></textarea>
        </form>
      </div>
    </div>
  );
};
