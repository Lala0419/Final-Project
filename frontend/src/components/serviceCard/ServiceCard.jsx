// import React from "react";
// import "./ServiceCard.scss";

// function ServiceCard(props) {
// 	return (
// 		<div className="card">
// 			<h2 className="card_title">{props.title}</h2>
// 			<p className="card_subtitle">{props.subtitle}</p>
// 			{/* <p className="card_desc">{props.desc}</p> */}
// 			<div className="card_imgs">
// 				<div className="card_imgs-item">
// 					<span className="card_imgs-item--caption">Before</span>
// 					<img
// 						className="card_imgs-item--img"
// 						src={props.img_before_url}
// 						alt="before"
// 					/>
// 				</div>
// 				<div className="card_imgs-item">
// 					<span className="card_imgs-item--caption">After</span>
// 					<img
// 						className="card_imgs-item--img"
// 						src={props.img_after_url}
// 						alt="after"
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default ServiceCard;

// ServiceCard.jsx

// ServiceCard.jsx

import React from "react";
import "./ServiceCard.scss";

function ServiceCard({ title, subtitle, desc, img_before_url, img_after_url }) {
  return (
    <div className={`card ${desc ? "two-columns" : ""}`}>
      <h2 className="card_title">{title}</h2>
      {desc && <p className="card_desc">{desc}</p>}
      <div className="card_imgs">
        <div className="card_imgs-item">
          <span className="card_imgs-item--caption">Before</span>
          <img
            className="card_imgs-item--img"
            src={img_before_url}
            alt="before"
          />
        </div>
        <div className="card_imgs-item">
          <span className="card_imgs-item--caption">After</span>
          <img
            className="card_imgs-item--img"
            src={img_after_url}
            alt="after"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;


