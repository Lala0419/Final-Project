import React from "react";
import "./ServiceMain.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import service_test_before from "../../assets/service_test_before.jpeg";
import service_test_after from "../../assets/service_test_after.jpeg";

function ServiceMain() {
	return (
		<div className="serviceMain">
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
				<ServiceCard
					title="Window Washing"
					subtitle=""
					desc="We don't only wash the window, this also includes a scrub of the entire frame and all the seals and sills."
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				/>
				<ServiceCard
					title="Soft Wash of Siding"
					subtitle="(Vinyl, Hardy board, Aluminum, Wood, etc…)"
					desc="We use nylon tip, water-fed brushes. This keeps the water pressure low. Comparatively to pressure washing, all the pressure comes from us scrubbing. A deep, detailed wash that maintains your sidings durability."
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				/>
				<ServiceCard
					title="Gutter Cleaning"
					subtitle="(Eavestroughs)"
					desc="We don't only wash the window, this also includes a scrub of the entire frame and all the seals and sills."
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				/>
				<span className="serviceMain_bottom-button">SEE MORE SERVICES</span>
			</div>
		</div>
	);
}

export default ServiceMain;
