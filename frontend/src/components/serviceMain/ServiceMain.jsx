import React from "react";
import "./ServiceMain.scss";
import ServiceCard from "../../components/serviceCard/ServiceCard";
import service_test_before from "../../assets/service_test_before.jpeg";
import service_test_after from "../../assets/service_test_after.jpeg";
import { Link } from "react-router-dom";

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
				<Link to="/free-estimate" className="serviceMain_top-button-box">
					<span className="serviceMain_top-button">GET A FREE QUOTE TODAY</span>
				</Link>
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
					title="Moss Removal and Treatment"
					subtitle=""
					desc="With the amount of moisture and shade we receive here in BC, moss on roofs is almost a given, and over growth can be detrimental. Our 3-part specialized process ensures the removal and control of moss, while maintaining the durability of your roof. Give us a call to hear how!"
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				/>
				{/* 

					//use when upgrade each card to be clickable. see more details, slides on before&after photos and maybe click each pucture to zoom in
				
				<ServiceCard
					title="Gutter Cleaning"
					subtitle="(Eavestroughs)"
					desc="We don't only wash the window, this also includes a scrub of the entire frame and all the seals and sills."
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				
				<ServiceCard
					title="Fascia/Trim/Soffit Cleaning"
					subtitle=""
					desc="These areas of the home are often grungy and can get covered in algae over time. Our brushes allow us to hit even the toughest angles and scrub these surfaces clean."
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				/>
				<ServiceCard
					title="Roof Cleaning"
					subtitle=""
					desc="It's not easy moving around a roof. As the seasons change, the amount of debris and leaves that accumulate on a roof can be frustrating to look at. That's where we come in."
					img_before_url={service_test_before}
					img_after_url={service_test_after}
				/>
			 */}
				<Link to="/services" className="serviceMain_bottom-button-box">
					<span className="serviceMain_bottom-button">SEE MORE SERVICES</span>
				</Link>
			</div>
		</div>
	);
}

export default ServiceMain;
