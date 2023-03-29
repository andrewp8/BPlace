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
						<Link to="/for-sale">For Sale</Link>
					</li>
					<li>
						<Link to="/for-rent">For Rent</Link>
					</li>
					<li>
						<Link to="/compare">Compare</Link>
					</li>
					<li>
						<Link to="/credential">Sign Up/Log in</Link>
					</li>
				</ul>
			</div>

			{navToggleOpen ? (
				<IconButton
					onMouseDown={() => setNavToggleOpen(!navToggleOpen)}
					className="navIcon"
					style={{ backgroundColor: "rgba(255, 255, 255, 0.85)" }}
				>
					<MenuIcon />
				</IconButton>
			) : (
				<div className="navToggler">
					<ul>
						<div>
							<IconButton onMouseDown={() => setNavToggleOpen(!navToggleOpen)}>
								<MenuIcon className="navToggler_icon" />
							</IconButton>
						</div>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/for-sale">For Sale</Link>
						</li>
						<li>
							<Link to="/for-rent">For Rent</Link>
						</li>
						<li>
							<Link to="/compare">Compare</Link>
						</li>
						<li>
							<Link to="/credential">Sign Up/Log in</Link>
						</li>
					</ul>
				</div>
			)}
		</>
	);
};

export default Navbar;
