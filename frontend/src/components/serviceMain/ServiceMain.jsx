import React from "react";
import "./ServiceMain.scss";
//import ServiceCard from "../serviceCard/ServiceCard";

function ServiceMain() {
	return (
		<ServiceMain className="serviceMain">
			<div className="serviceMain_top">
				<h2 className="serviceMain_top-header">JOIN THE FAMILY</h2>
				{/* <h2 className="serviceMain_top-serviceMain serviceMain_top-serviceMain_2">
					MADE SIMPLE
				</h2> */}
				<p className="serviceMain_top-subtitle">
					Find out what we can do for YOU
				</p>
				<span className="serviceMain_top-button">GET A FREE QUOTE TODAY</span>
			</div>
			<div className="serviceMain_bottom">
				<h4 className="serviceMain_bottom-title">Our Services</h4>
				<p className="serviceMain_bottom-desc">
					It takes effort to own a home, and prioritizing the amount of work you
					put into making your house beautiful can sometimes fall to the bottom
					of the list. That&apos;s why we offer an entire spectrum of services
					that will ensure your home maintains its beauty throughout the course
					of the year.
				</p>
				{/* <ServiceCard /> */}
				<span className="serviceMain_bottom-button">See more work</span>
			</div>
		</ServiceMain>
	);
}

export default ServiceMain;
