import React from "react";
import "./ServiceCard.scss";

function ServiceCard(props) {
	return (
		<div className="service-card">
			<h2 className="service-card_title">{props.title}</h2>
			<p className="service-card_subtitle">{props.subtitle}</p>
			{/* <p className="service-card_desc">{props.desc}</p> */}
			<div className="service-card_imgs">
				<div className="service-card_imgs-item">
					<span className="service-card_imgs-item--caption">Before</span>
					<img
						className="service-card_imgs-item--img"
						src={props.img_before_url}
						alt="before"
					/>
				</div>
				<div className="service-card_imgs-item">
					<span className="service-card_imgs-item--caption">After</span>
					<img
						className="service-card_imgs-item--img"
						src={props.img_after_url}
						alt="after"
					/>
				</div>
			</div>
		</div>
	);
}

export default ServiceCard;
