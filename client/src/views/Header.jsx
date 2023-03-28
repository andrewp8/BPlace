import React from "react";
import Navbar from "../components/Navbar";
import "./css/Header.css";

import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

const Header = () => {
	return (
		<div className="header">
			<img
				src="https://www.luxurytravelmag.com.au/wp-content/uploads/2020/01/mandarina-treehouse.jpg"
				alt="BIRD’S-EYE VIEW"
			/>
			<div className="rightHeader">
				<Navbar />
				<Stack
					direction="row"
					sx={{ width: 500 }}
					justifyItems="center"
					alignContent="center"
				>
					<TextField label="Search by zipcode" />
				</Stack>
			</div>
		</div>
	);
};

export default Header;
