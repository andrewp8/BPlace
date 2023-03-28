import React from "react";
import Navbar from "../components/Navbar";
import "./css/Header.css";

const Header = () => {
	return (
		<div className="header">
			<img
				src="https://www.luxurytravelmag.com.au/wp-content/uploads/2020/01/mandarina-treehouse.jpg"
				alt="BIRD’S-EYE VIEW"
			/>
			<Navbar className="rightHeader" />
		</div>
	);
};

export default Header;
