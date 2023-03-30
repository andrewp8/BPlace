import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import SearchTools from "../components/SearchTools";
import axios from "axios";
import "./css/DetailPage.css";
import Navbar from "../components/Navbar";

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
	}, []);
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
				<div className="images">
					<img src="" alt="" />
				</div>
			</div>
		</div>
	);
};

export default DetailPage;
