import React, { useState } from "react";
import "./css/Card.css";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CallIcon from "@mui/icons-material/Call";

const Card = ({ propertyData, getZipcode, getFav, getChartData }) => {
	const [property, setProperty] = useState(propertyData);
	const nav = useNavigate();

	const showOnMap = (zcode) => {
		getZipcode(zcode);
	};

	const addFav = (favProperty) => {
		getFav(favProperty);
	};

	const showChart = (state, zipcode) => {
		getChartData(state, zipcode);
	};

	const call = () => {
		alert(
			`You are calling for the property: \n${property.address}\n${property.state}, ${property.zipcode} \nSomeone will be with you shortly. Thank you for your patient.`
		);
	};

	return (
		<div className="card" draggable>
			<div className="cardNav">
				<div className="cardBtn">
					<IconButton onClick={call}>
						<CallIcon
							sx={{
								color: "primary.main",
								backgroundColor: "white",
								borderRadius: "25%",
								"&:hover": { color: "#5783db" },
							}}
						/>
					</IconButton>
					<p>For Sale</p>
				</div>
				<IconButton className="muiIcon" onClick={() => addFav(property)}>
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
			<img src={property.imageUrls[0]} alt="" className="card_img" />
			<p className="price">${property.price.toLocaleString()}</p>
			<p className="address">{property.address}</p>
			<p>
				<span
					className="cart_state"
					onClick={() => showChart(property.state, property.zipcode)}
				>
					{property.state}
				</span>{" "}
				<span
					className="card_zipcode"
					onClick={() => showOnMap(property.zipcode)}
				>
					{property.zipcode}
				</span>
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
