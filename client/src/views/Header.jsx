import React from "react";
import Navbar from "../components/Navbar";
import "./css/Header.css";

import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

const Header = () => {
	return (
		<div className="header">
			<img
				src="https://www.luxurytravelmag.com.au/wp-content/uploads/2020/01/mandarina-treehouse.jpg"
				alt="BIRD’S-EYE VIEW"
			/>
			<div className="rightHeader">
				<Navbar />
				<h1>BPlace</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
					obcaecati alias eos eius ratione vitae dolorem officia culpa
					praesentium molestiae libero maiores assumenda, repellat nesciunt
					fugit error doloremque est vel!
				</p>
				<Paper
					component="form"
					sx={{
						p: "2px 4px",
						display: "flex",
						alignItems: "center",
						width: 400,
					}}
				>
					<InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search By Zip-code" />
					<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
						<SearchIcon />
					</IconButton>
				</Paper>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
					voluptas illo esse obcaecati velit enim cum nisi voluptatum? Animi
					error soluta quidem deleniti tempora inventore!
				</p>
			</div>
		</div>
	);
};

export default Header;
