import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/LastResult.css";

const LastResult = () => {
	const [lastSearchId, setLastSearchId] = useState();
	const [lastSearchResult, setLastSearchResult] = useState();

	useEffect(() => {
		axios
			.get("http://localhost:8080/api/last")
			.then(
				(res) => (
					console.log(res.data[0].searchId),
					setLastSearchId(res.data[0].searchId)
				)
			)
			.catch((err) => console.log(err));
	}, []);

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/properties/${lastSearchId}`)
			.then((res) => (console.log(res.data), setLastSearchResult(res.data)))
			.catch((err) => console.log(err));
	}, [lastSearchId]);

	return (
		<div className="lastResult">
			<h3>Features</h3>
			{lastSearchResult && (
				<div className="result">
					<div className="result_left">
						<p>{lastSearchResult.description}</p>
						<img src={lastSearchResult.imageUrls[0]} alt="" className="img0" />
					</div>
					<div className="result_right">
						<div className="result_img">
							<img
								src={lastSearchResult.imageUrls[1]}
								alt=""
								className="img1"
							/>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
								sunt!
							</p>
						</div>
						<div className="result_img">
							<img
								src={lastSearchResult.imageUrls[2]}
								alt=""
								className="img2"
							/>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga,
								sunt!
							</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default LastResult;
