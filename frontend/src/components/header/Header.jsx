import React from "react";
import "./Header.scss";

function Header() {
	return (
		<div class="header">
			<div class="header_top">
				<h2 class="header_top-header">CLEANING YOUR PROPERTY,</h2>
				<h2 class="header_top-header header_top-header_2">MADE SIMPLE</h2>
				<p class="header_top-subtitle">
					Proudly servicing the entire Fraser Valley and Lower Mainland
				</p>
			</div>
			<div class="header_bottom">
				<h4 class="header_bottom-title">You&apos;re In Good Hands</h4>
				<p class="header_bottom-desc">
					Here at Property Brothers Home Services, we take pride in maintaining
					the beauty of every homeowners property. For over 5 years in the
					industry, we&apos;ve focused on bringing quality service to your door
					step. Through honest work and integrity, we'll be the perfect
					companion for your home.
				</p>
			</div>
		</div>
	);
}

export default Header;
