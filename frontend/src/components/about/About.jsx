import React from "react";
import "./About.scss";

function About() {
  const logo = "/facebookcover.png"

  return (
    <div className="about">

      <div className="about_header">
        <h2 className="about_header-title">FAMILY ORIENTED</h2>
      </div>

      <div className="about_main">
        <div className="about_main_body">
          <h3 className="about_main_body-title">Integrity is Everything</h3>

          <div className="about_main_body-p">
            Started, owned and operated by two brothers, Ethan and Brandon McKean, Property Brothers Home Services understands the value of family. The two brothers grew up in Walnut Grove, Langley, on property with a home that was constantly under construction. Helping their parents build, clean and maintain their home was part of their daily routine. This, coupled with experience in the industry as young adults, helped structure the foundation of the business today. 
          </div>
        </div>

        <div className="about_main-info">
          <img className='about_main-info-image' src={logo} alt='Logo for Property Brothers' />
          <div className="about_main-info-body">
            <div className="about_main-info-p">
              Over 1000 satisfied customers, and 100+ clients serviced seasonally
            </div>
            <div className="about_main-info-p">
              5+ years of excellence
            </div>
          </div>
        </div>

        <div className="about_main_body">
          <div className="about_main_body-title">BC Made</div>
          <div className="about_main_body-p">
            Having grown up in the Fraser Valley and traveled the Lower Mainland their entire lives, the brothers feel no surrounding town should be left out. That&apos;s why they make it priority to bring a local, family business mentality into everyone&apos;s backyard. Their focus is to do whatever it takes to ensure quality work and service for all of BC&apos;s residents, and it shows, with a clientele base ranging from Chilliwack to North Vancouver.
          </div>
        </div>

        <div className="about_main_bottom">
          <div className="about_main_bottom-title">See if we're right for you</div>
          <button className="about_main_bottom-button">JOIN THE FAMILY</button>
        </div>
      </div>

    </div>
  );
}

export default About; 