import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import SearchTools from "../components/SearchTools";
import axios from "axios";
import "./css/DetailPage.css";
import Navbar from "../components/Navbar";

import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import BedIcon from "@mui/icons-material/Bed";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const DetailPage = () => {
	const [propertyDetail, setPropertyDetail] = useState();
	const [areaZipcode, setAreaZipcode] = useState();
	const [areaInfo, setAreaInfo] = useState();
	const { id } = useParams();
	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/properties/${id}`)
			.then(
				(res) => (
					console.log("result from DetailPage", res.data),
					setPropertyDetail(res.data),
					setAreaZipcode(res.data.zipcode)
				)
			)
			.catch((err) => console.log("err from DetailPage", err));
	}, []);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/areas/zipcode/${areaZipcode}`)
			.then((res) => (console.log("areaInfo", res.data), setAreaInfo(res.data)))
			.catch((err) => console.log("err from areaInfo", err));
	}, [areaZipcode]);
	return (
		<div className="detailPage">
			<div className="nav">
				<h3>BPlace</h3>
				<Navbar className="navbar" />
				<Avatar
					alt="Remy Sharp"
					src="https://imageio.forbes.com/specials-images/imageserve/5d2392b234a5c400084abe23/Film-Robert-Downey-Jr/960x0.jpg?format=jpg&width=960"
				/>
			</div>
			<SearchTools />
			{propertyDetail && (
				<div className="detailPage_container">
					<div className="images">
						<div className="bigImage">
							<img src={propertyDetail.imageUrls[0]} />
						</div>
						<div className="sideImages">
							<img src={propertyDetail.imageUrls[1]} />
							<img src={propertyDetail.imageUrls[2]} />
						</div>
					</div>
					<div className="address_detail">
						<h3>{propertyDetail.address}</h3>
						<p>{propertyDetail.city}</p>
						<p>
							{propertyDetail.state}, {propertyDetail.zipcode}
						</p>
					</div>
					<div className="primary_detail">
						<div className="material_detail">
							<div className="price">
								<LocalOfferIcon />
								<h3>${propertyDetail.price.toLocaleString()}</h3>
							</div>
							<div className="bedroom">
								<BedIcon />
								<p>{propertyDetail.bedrooms}</p>
							</div>
							<div className="sqft">
								<SquareFootIcon />
								<p>{propertyDetail.sqft} ft&sup2;</p>
							</div>
						</div>
						<div className="area_detail">
							{areaInfo && (
								<div className="area">
									<h4>
										Population: <span>{areaInfo.population}</span>
									</h4>
									<h4>
										Livability: <span>{areaInfo.livability}</span>
									</h4>
									<h4>
										Amenities: <span>{areaInfo.amenities}</span>
									</h4>
									<h4>
										Cost Of Living: <span>{areaInfo.costOfLiving}</span>
									</h4>
									<h4>
										Crime: <span>{areaInfo.crime}</span>
									</h4>
									<h4>
										Employment: <span>{areaInfo.employment}</span>
									</h4>
									<h4>
										Housing: <span>{areaInfo.housing}</span>
									</h4>
									<h4>
										School: <span>{areaInfo.school}</span>
									</h4>
								</div>
							)}
						</div>
					</div>
					<div className="description">
						<h3>Description</h3>
						<p>{propertyDetail.description}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default DetailPage;
