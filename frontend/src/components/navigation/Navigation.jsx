import React from 'react';

import './Navigation.scss'

import { Link } from "react-router-dom";

function Navigation() {
  const logo = "/facebookcover.png"

  return (

    <div className='nav'>

      <div className='nav-left'>
        <img className='nav-img' src={logo} alt='Logo for Property Brothers' />
      </div>

      <div className='nav-right'>
        <button className='nav-button'>Phone Number</button>
        <Link to="/" className="nav-button">
          <span>Home</span>
        </Link>
        <Link to="/about" className="nav-button">
          <span>About</span>
        </Link>
        <Link to="/services" className="nav-button">
          <span>Services</span>
        </Link>
        <Link to="/free-estimate" className="nav-button">
          <span>Free Estimate</span>
        </Link>
      </div>

    </div>
    
  );
}

export default Navigation;