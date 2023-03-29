import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "./css/ForSale.css";
import Avatar from "@mui/material/Avatar";

import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchTools from "../components/SearchTools";

const ForSale = () => {
	return (
		<div>
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

export default ForSale;
