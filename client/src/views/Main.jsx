import React from "react";
import Header from "./Header";
import LastResult from "./LastResult";
import Galary from "./Galary";
import Footer from "./Footer";
import "./css/Main.css";

const Main = () => {
	return (
		<div className="main">
			<Header />
			<LastResult />
			<Galary />
			<Footer />
		</div>
	);
};

export default Main;
