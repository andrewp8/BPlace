import React, { useState } from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";

const Navbar = () => {
	const [navToggleOpen, setNavToggleOpen] = useState(true);

	return (
		<nav className="nav">
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
			{/* {navToggleClose ? (
				<IconButton
					onMouseDown={() => setNavToggleClose(!navToggleClose)}
					className="navIcon"
					style={{ backgroundColor: "rgba(255, 255, 255, 0.41)" }}
				>
					<MenuIcon />
				</IconButton>
			) : (
				<div className="navToggler">
					<ul>
						<div className="nav_brand">
							<IconButton
								onMouseDown={() => setNavToggleClose(!navToggleClose)}
							>
								<MenuIcon />
							</IconButton>
							<h1>BPlace</h1>
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
			)} */}
			{navToggleOpen ? (
				<div className="navToggler">
					<ul>
						<div className="nav_brand">
							<IconButton onMouseDown={() => setNavToggleOpen(!navToggleOpen)}>
								<MenuIcon />
							</IconButton>
							<h1>BPlace</h1>
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
			) : (
				<IconButton
					onMouseDown={() => setNavToggleOpen(!navToggleOpen)}
					className="navIcon"
					style={{ backgroundColor: "rgba(255, 255, 255, 0.41)" }}
				>
					{console.log(navToggleOpen)}
					<MenuIcon />
				</IconButton>
			)}
		</nav>
	);
};

export default Navbar;
