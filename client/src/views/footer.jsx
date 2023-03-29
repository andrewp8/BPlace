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
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam,
						quisquam laboriosam at recusandae nisi dolore.
					</p>
				</div>
				<div className="links">
					<h4>Quick Links</h4>
					<ul>
						<li>Terms</li>
						<li>Privacy</li>
						<li>Cookies</li>
						<li>Licenses</li>
						<li>Settings</li>
					</ul>
				</div>
				<div className="conversation">
					<h4>Conversation</h4>
					<div className="chat"></div>
				</div>
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
