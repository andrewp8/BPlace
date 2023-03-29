import React from "react";
import "./css/Footer.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

const footer = () => {
	return (
		<div className="footer">
			<h3>Sign up to our newsletter</h3>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aspernatur.
			</p>
			<div className="container">
				<div className="about">
					<h4>About</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
						ipsum ab! Labore numquam, inventore quibusdam necessitatibus
						possimus corrupti sit dolorum obcaecati eum totam nesciunt
						temporibus culpa ipsum, delectus fugit reiciendis.
					</p>
				</div>
				<div className="links">
					<h4>Quick Links</h4>
				</div>
				<div className="chat">3</div>
			</div>
			<div className="bottom">
				<p>Copyright © 2023 All Rights Reserved by Andrew Pham.</p>
				<div className="socials">
					<GitHubIcon />
					<LinkedInIcon />
					<TwitterIcon />
					<FacebookIcon />
					<YouTubeIcon />
				</div>
			</div>
		</div>
	);
};

export default footer;
