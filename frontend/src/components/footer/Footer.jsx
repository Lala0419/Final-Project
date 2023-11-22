import React from "react";

import './Footer.scss'


import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

function Footer() {
  return (

    <div className="footer">
      <div className="footer_socials">
        <button className="footer_socials-button">
          <FaFacebookF />
        </button>
        <button className="footer_socials-button">
          <FaRegEnvelope />
        </button>
      </div>

      <div className="footer_newsletter">
        <h1 className="footer_newsletter-header">
          Subcribe to our Seasonal Newsletter
        </h1>
        <p className="footer_newsletter-body">
          Sign up with your email address to receive deals and discounts on our services.
        </p>

        <form method="post" action="none" className="footer_newsletter-form">
          <textarea className="footer_newsletter-form-text" name="newsletter-name" placeholder="Name"></textarea>
          <textarea className="footer_newsletter-form-text" name="newsletter-email" placeholder="Email Address"></textarea>
          <input type="submit" value="Sign up" className="footer_newsletter-btn" onClick={(event) => event.preventDefault()} />
        </form>
      </div>

      <div className="footer_nav">
        <button className="footer_nav-btn">Phone Number</button>
        <button className="footer_nav-btn">Free Estimate</button>
      </div>
    </div>

    // <footer>
    //   <div className="social-btns">
    //     <button className='social-btn'>
    //       <FaFacebookF />
    //     </button>
    //     <button className='social-btn'>
    //       <FaRegEnvelope />
    //     </button>
    //   </div>

    //   <div className="footer__body">
    //     <h1 className="footer__header">
    //       Subscribe to our Seasonal Newsletter
    //     </h1>
    //     <p className="footer__p">
    //       Sign up with your email address to receive deals and discounts an our services.
    //     </p>

    //     <form method="post" action="none" className="newsletter__form">
    //       <textarea className="newsletter__textarea" name="newsletter-text" placeholder="Email Address"></textarea>
    //       <input type="submit" value="Sign Up" className="newsletter__input" onClick={(event) => event.preventDefault()} />
    //     </form>

    //     <p className="message">
    //       We respect your privacy.
    //     </p>
    //   </div>

    //   <div className="nav-btns">
    //   <button className='nav-btn'>Phone Number</button>
    //   <button className='nav-btn'>Free Estimate</button>
    //   </div>
    // </footer>
  );
}

export default Footer