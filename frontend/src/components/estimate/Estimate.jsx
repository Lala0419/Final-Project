import React, { useState } from 'react';
import './Estimate.scss';

const Estimate = () => {
 
	const [formInput, setFormInput] = useState("")


  return (
    <div className="estimate">
      <h1 className="estimate_title">Request An Estimate</h1>
      <form
        className="estimate_form"
        onSubmit={(e) => {
          e.preventDefault();
          fetch('http://localhost:3003/api/v1/customers')
            .then((res) => {
              return res.json();
            })
            .then((customer) => {
              console.log(customer);
            });
        }}
      >
        <div className="form-group">
          <label htmlFor="name" className="estimate_form_label">
            Name <span className="estimate_form_label-muted">(required)</span>
          </label>
          <div className="form-row">
            <div className="form-group col ">
              <label htmlFor="first_name" className="estimate_form_label">
                First Name
              </label>
              <input type="text" className="form-control form-control-lg" value="first_name" />
            </div>
            <div className="form-group col">
              <label htmlFor="last_name" className="estimate_form_label">
                Last Name
              </label>
              <input type="text" className="form-control form-control-lg" value="last_name" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="phone_number" className="estimate_form_label">
            Phone <span className="estimate_form_label-muted">(required)</span>
          </label>
          <input type="number" className="form-control form-control-lg" value="phone_number" />
        </div>
        <div className="form-group">
          <label htmlFor="house_address" className="estimate_form_label">
            House Address <span className="estimate_form_label-muted">(required)</span>
          </label>
          <input type="text" className="form-control form-control-lg" value="house_address" />
        </div>
        <div className="form-group">
          <label htmlFor="email_address" className="estimate_form_label">
            Email Address <span className="estimate_form_label-muted">(required)</span>
          </label>
          <input type="email" className="form-control form-control-lg" value="email_address" />
        </div>

        <p className="estimate_form_label_bold">Select which service(s) you want:</p>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value="Window Washing"
            id="service_1"
          />
          <label className="form-check-label" htmlFor="service_1">
            Window Washing
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value="Siding Soft Wash"
            id="service_2"
          />
          <label className="form-check-label" htmlFor="service_2">
            Siding Soft Wash
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value="Gutter Cleaning"
            id="service_3"
          />
          <label className="form-check-label" htmlFor="service_3">
            Gutter Cleaning
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value="Fascia/Trim/Soffit Cleaning"
            id="service_4"
          />
          <label className="form-check-label" htmlFor="service_4">
            Fascia/Trim/Soffit Cleaning
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value="Roof Cleaning"
            id="service_5"
          />
          <label className="form-check-label" htmlFor="service_5">
            Roof Cleaning
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="checkbox"
            value="Moss Removal and Treatment"
            id="service_6"
          />
          <label className="form-check-label" htmlFor="service_6">
            Moss Removal and Treatment
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="additional_info" className="estimate_form_label">
            Any specific requests?
            <span className="estimate_form_label-muted">(required)</span>
          </label>
          <textarea
            type="text"
            className="form-control text-area"
            value="additional_info"
          ></textarea>
        </div>

        <button type="submit" className="btn btn-dark btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Estimate;
