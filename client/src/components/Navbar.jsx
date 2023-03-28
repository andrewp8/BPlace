import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Navbar = () => {
	const [navToggleOpen, setNavToggleOpen] = useState(true);

	return (
		<>
			<div className="navbar">
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/">For Sale</Link>
					</li>
					<li>
						<Link to="/">For Rent</Link>
					</li>
					<li>
						<Link to="/">Compare</Link>
					</li>
					<li>
						<Link to="/">Sign Up/Log in</Link>
					</li>
				</ul>
			</div>

			{navToggleOpen ? (
				<IconButton
					onMouseDown={() => setNavToggleOpen(!navToggleOpen)}
					className="navIcon"
					style={{ backgroundColor: "rgba(255, 255, 255, 0.41)" }}
				>
					<MenuIcon />
				</IconButton>
			) : (
				<div className="navToggler">
					<ul>
						<div className="navToggler_icon">
							<IconButton onMouseDown={() => setNavToggleOpen(!navToggleOpen)}>
								<MenuIcon />
							</IconButton>
						</div>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">For Sale</Link>
						</li>
						<li>
							<Link to="/">For Rent</Link>
						</li>
						<li>
							<Link to="/">Compare</Link>
						</li>
						<li>
							<Link to="/">Sign Up/Log in</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
