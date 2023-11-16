import React from 'react';

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";


function Navigation() {
  const logo = "/facebookcover.png"

  return (
    <nav>
      <img className='logo__image' src={logo} />

      <div className='social-btns'>
        <button>
          <FaFacebookF />
        </button>
        <button>
          <FaRegEnvelope />
        </button>
      </div>

      <div className='nav-btns'>
        <button>Phone Number</button>
        <button>Home</button>
        <button>About</button>
        <button>Services</button>
        <button>Free Estimate</button>
      </div>
    </nav>
  );
}

export default Navigation;