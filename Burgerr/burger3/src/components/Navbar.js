import React from 'react'
import BurgerLogo from '../img/burgerlogo.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='main'>
           <img src={BurgerLogo} alt="" />
           <div className='mainLink'>
            <Link to="/">MainPage
            </Link>

            <Link to="/menu">Menu
            </Link>

            <Link to="/about">About Us
            </Link>

            <Link to="/contact">Contact
            </Link>
           </div>
        </div>
        </div>
  )
}
