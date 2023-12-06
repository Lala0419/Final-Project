import React from "react";
import Header from "../../components/header/Header";
import ServiceMain from "../../components/serviceMain/ServiceMain";
import Reviews from "../../components/reviews/Reviews";

function Home() {
	return (
		<>
			<Header />
			<ServiceMain />
			<Reviews />
		</>
	);
}

export default Home;
