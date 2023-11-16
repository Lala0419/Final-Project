import React from "react";

import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="social-btns">

      </div>

      <div className="body">

      </div>

      <div className="social-btns">
        <button className='social-btn'>
          <FaFacebookF />
        </button>
        <button className='social-btn'>
          <FaRegEnvelope />
        </button>
      </div>
    </footer>
  );
}

export default Footer