import React from "react";
import "./Reviews.scss";

function Reviews() {
	return (
		<>
			<div className="reviews">
				<div className="reviews_top">
					<h2 className="reviews_top-header">OUR MOTIVATION</h2>
					<p className="header_top-subtitle">
						Your feedbacks motivate us to improve our servies!
					</p>
				</div>
				<div className="reviews_bottom">
					{/* <iframe
						className="taggbox"
						src="https://widget.taggbox.com/145619"
					></iframe> */}
					<iframe
						className="elfsight"
						src="https://widget-fd543a8e380c4a3292552654cf91bd07.elfsig.ht"
						title="review"
					></iframe>
				</div>
			</div>
		</>
	);
}

export default Reviews;
