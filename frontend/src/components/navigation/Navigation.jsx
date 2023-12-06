import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.scss";

function Navigation() {
	const logo = "/facebookcover.png";

	return (
		<>
			<div className="nav-mobile">
				<div className="nav-mobile-left">
					<img
						className="nav-mobile-img"
						src={logo}
						alt="Logo for Property Brothers"
					/>
				</div>

				<div className="nav-mobile-right"></div>
			</div>

			<div className="nav">
				<div className="nav-left">
					<Link to="/home">
						<img
							className="nav-img"
							src={logo}
							alt="Logo for Property Brothers"
						/>
					</Link>
				</div>

				<div className="nav-right">
					<Link to="/home" className="nav-right_button-link">
						<button className="nav-button">Home</button>
					</Link>

					<Link to="/about" className="nav-right_button-link">
						<button className="nav-button">About</button>
					</Link>
					<Link to="/services" className="nav-right_button-link">
						<button className="nav-button">Services</button>
					</Link>
					<a href="tel:2502167944" className="nav-button">
						Phone Call
					</a>
					<Link to="/free-estimate" className="nav-right_button-link">
						<button className="nav-button">Free Estimate</button>
					</Link>
				</div>
			</div>
		</>
	);
}

export default Navigation;
