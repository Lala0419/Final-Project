import React from 'react';
import './Estimate.scss';

const Estimate = () => {
  return (
    <div className="estimate">
      <h1 className="estimate_title">Request An Estimate</h1>
      <form className="estimate_form">
        <div className="form-group">
          <label for="name" className="estimate_form_label">
            Name <span className="estimate_form_label-muted">(required)</span>
          </label>
          <div class="form-row">
            <div class="form-group col ">
              <label for="name" className="estimate_form_label">
                First Name
              </label>
              <input type="text" class="form-control form-control-lg" />
            </div>
            <div class="form-group col">
              <label for="name" className="estimate_form_label">
                Last Name
              </label>
              <input type="text" class="form-control form-control-lg" />
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="phone" className="estimate_form_label">
            Phone <span className="estimate_form_label-muted">(required)</span>
          </label>
          <input type="number" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label for="house-address" className="estimate_form_label">
            House Address <span className="estimate_form_label-muted">(required)</span>
          </label>
          <input type="text" class="form-control form-control-lg" />
        </div>
        <div class="form-group">
          <label for="email" className="estimate_form_label">
            Email Address <span className="estimate_form_label-muted">(required)</span>
          </label>
          <input type="email" class="form-control form-control-lg" />
        </div>

        <p className="estimate_form_label_bold">Select which service(s) you want:</p>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="service_1" />
          <label class="form-check-label" for="service_1">
            Window Washing
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="service_2" />
          <label class="form-check-label" for="service_2">
            Siding Soft Wash
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="service_3" />
          <label class="form-check-label" for="service_3">
            Gutter Cleaning
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="service_4" />
          <label class="form-check-label" for="service_4">
            Fascia/Trim/Soffit Cleaning
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="service_5" />
          <label class="form-check-label" for="service_5">
            Roof Cleaning
          </label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value="" id="service_6" />
          <label class="form-check-label" for="service_6">
            Moss Removal and Treatment
          </label>
        </div>

        <div class="form-group">
          <label for="name" className="estimate_form_label">
            Any specific requests?<span className="estimate_form_label-muted">(required)</span>
          </label>
          <textarea type="text" class="form-control text-area"></textarea>
        </div>

        <button type="submit" class="btn btn-dark btn-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Estimate;
