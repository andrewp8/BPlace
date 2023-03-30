import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Maps from "../components/Maps";
import "./css/Categories.css";
import Avatar from "@mui/material/Avatar";

import SearchTools from "../components/SearchTools";
import axios from "axios";

const Categories = () => {
	const [properties, setProperties] = useState();
	const [mapZipcode, setMapZipcode] = useState();
	useEffect(() => {
		axios
			.get("http://localhost:8080/api/properties")
			.then((res) => (console.log(res.data), setProperties(res.data)))
			.catch((err) => console.log(err));
	}, []);

	const zipcodeForMap = (zipcode) => {
		console.log("catergoiry zipcodeMaop", zipcode);
		setMapZipcode(zipcode);
	};

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
			<div className="container">
				<div className="cards">
					{properties &&
						properties.map((property, idx) => (
							<Card
								propertyData={property}
								idx={idx}
								getZipcode={zipcodeForMap}
							/>
						))}
				</div>
				<div className="maps">
					<Maps zipcode={mapZipcode} />
				</div>
			</div>
		</div>
	);
};

export default Categories;
