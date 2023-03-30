import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import SearchTools from "../components/SearchTools";
import axios from "axios";
import "./css/DetailPage.css";
import Navbar from "../components/Navbar";

const Compare = () => {
	return (
		<div className="compare">
			<div className="nav">
				<h3>BPlace</h3>
				<Navbar className="navbar" />
				<Avatar
					alt="Remy Sharp"
					src="https://imageio.forbes.com/specials-images/imageserve/5d2392b234a5c400084abe23/Film-Robert-Downey-Jr/960x0.jpg?format=jpg&width=960"
				/>
			</div>
			<SearchTools />
		</div>
	);
};

export default Compare;
