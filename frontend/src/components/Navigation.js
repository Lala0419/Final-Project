import React from 'react';

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Navigation() {
  const logo = "/facebookcover.png"

  return (
    <nav>

      <div className='nav-left'>
        <img className='logo__image' src={logo} alt='Logo for Property Brothers'/>

        <div className='social-btns'>
          <button className='social-btn'>
            <FaFacebookF />
          </button>
          <button className='social-btn'>
            <FaRegEnvelope />
          </button>
        </div>
      </div>
      

      <div className='nav-btns nav-right'>
        <button className='nav-btn'>Phone Number</button>
        <button className='nav-btn'>Home</button>
        <button className='nav-btn'>About</button>
        <button className='nav-btn'>Services</button>
        <button className='nav-btn'>Free Estimate</button>
      </div>
    </nav>
  );
}

export default Navigation;