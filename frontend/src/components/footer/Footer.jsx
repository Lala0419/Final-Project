import React, {useState} from "react";
import axios from "axios";


import './Footer.scss'


import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
const URL = process.env.REACT_APP_BACKEND_URL;
const PORT = process.env.REACT_APP_PORT;

function Footer() {
  const [formData, setFormData] = useState({ first_name: "", email_address: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post(`${URL}${PORT}/api/v1/subscribers`, {
      subscriber: formData,
    })
    .then((response) => {
      console.log(response.data);
      // Clear the form after successful submission
      setFormData({ first_name: "", email_address: "" });
    })
    .catch((error) => {
      console.error(error);
    });
  };

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
          Subscribe to our Seasonal Newsletter
        </h1>
        <p className="footer_newsletter-body">
          Sign up with your email address to receive deals and discounts on our services.
        </p>
        <form onSubmit={handleSubmit} className="footer_newsletter-form">
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            placeholder="Name"
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email_address"
            value={formData.email_address}
            placeholder="Email Address"
            onChange={handleInputChange}
          />
          <input type="submit" value="Sign up" className="footer_newsletter-btn" />
        </form>
      </div>
    </div>
  );
}

export default Footer