import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import SearchTools from "../components/SearchTools";
import axios from "axios";
import "./css/Favorite.css";
import Navbar from "../components/Navbar";

const Favorite = () => {
	const [favorites, setFavorites] = useState();
	useEffect(() => {
		axios
			.get("http://localhost:8080/api/favorites")
			.then((res) => (console.log(res.data), setFavorites(res.data)))
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className="favorite">
			<div className="nav">
				<h3>BPlace</h3>
				<Navbar className="navbar" />
				<Avatar
					alt="Remy Sharp"
					src="https://imageio.forbes.com/specials-images/imageserve/5d2392b234a5c400084abe23/Film-Robert-Downey-Jr/960x0.jpg?format=jpg&width=960"
				/>
			</div>
			<SearchTools />
			{favorites && (
				<div className="favorite_container">{favorites[0].favoriteId}</div>
			)}
		</div>
	);
};

export default Favorite;
