import React, { useState } from "react";
import "./css/Card.css";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BedIcon from "@mui/icons-material/Bed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Card = (props) => {
	const [property, setProperty] = useState(props.property);

	const showOnMap = () => {
		console.log("show on map");
	};

	const goToDisplay = () => {
		console.log("clicked");
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
			<p className="location" onClick={showOnMap}>
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
				<div className="view" onClick={goToDisplay}>
					<VisibilityIcon />
					<p>View</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
