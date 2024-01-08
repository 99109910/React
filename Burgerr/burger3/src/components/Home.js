import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../img/banner1.jpg';
import '../styles/Home.css';

export const Home = () => {
  return (
    <div
      className="mainPage"
      style={{ backgroundImage: `url(${BannerImage})` }}
    >
      <div className="order">
        <Link to="/menu">
          <button>Order</button>
        </Link>
      </div>
    </div>
  );
};
