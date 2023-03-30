import React, { useState } from "react";
import "./css/Card.css";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Card = ({ propertyData, getZipcode }) => {
	const [property, setProperty] = useState(propertyData);
	const nav = useNavigate();
	const showOnMap = (zipcode) => {
		console.log("testest zipcode");
		console.log("showonmap", zipcode);
		getZipcode(zipcode);
	};

	return (
		<div className="card">
			<div className="cardNav">
				<div className="cardBtn">
					<button>New</button>
					<button>For Sale</button>
				</div>
				<IconButton className="muiIcon">
					<FavoriteIcon
						sx={{
							color: "pink",
							backgroundColor: "white",
							borderRadius: "25%",
							"&:hover": { color: "#5783db" },
							// border: "1px solid black",
							// boxShadow: "3px 5px 10px black",
						}}
					/>
				</IconButton>
			</div>
			<img src={property.imageUrls[0]} alt="" />
			<p className="price">${property.price.toLocaleString()}</p>
			<p className="address">{property.address}</p>
			<p className="location" onClick={showOnMap(property.zipcode)}>
				{property.state} {property.zipcode}
			</p>
			<div className="bottomIcons">
				<div className="bedroom">
					<BedIcon />
					<p>{property.bedrooms}</p>
				</div>
				<div className="sqft">
					<SquareFootIcon />
					<p>{property.sqft} ft&sup2;</p>
				</div>
				<div className="view">
					<Link to={`/${property._id}`}>
						<VisibilityIcon />
						<p>View</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Card;
