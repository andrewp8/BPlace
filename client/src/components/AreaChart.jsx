import React, { useEffect, useState } from "react";
import "./css/AreaChart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; //! this help clean up the canvas after component unmounted
import axios from "axios";

const AreaChart = ({ chartState, chartZipcode }) => {
	console.log("AreaChart", chartState, chartZipcode);
	const [areaZipcode, setAreaZipcode] = useState(63141);
	const [areaInfo, setAreaInfo] = useState();

	useEffect(() => {
		setAreaZipcode(chartZipcode);
	}, [chartState]);

	useEffect(() => {
		console.log("second");
		console.log("useEffect ariaZipcode", areaZipcode);
		axios
			.get(`http://localhost:8080/api/areas/zipcode/${areaZipcode}`)
			.then((res) => (console.log("areaInfo", res.data), setAreaInfo(res.data)))
			.catch((err) => console.log("err from areaInfo", err));
	}, [chartZipcode]);

	return (
		<div className="areaChart">
			{areaInfo && chartState && (
				<>
					<p>
						Population:{" "}
						<span className="population">{areaInfo.population}</span>
					</p>
					<p>
						Livability:{" "}
						<span className="livability">{areaInfo.livability} / 100</span>
					</p>
					<Bar
						data={{
							labels: [
								"Amenities",
								"Cost Of Living",
								"Crime",
								"Employment",
								"Housing",
								"school",
							],
							datasets: [
								{
									label: `${chartState}, ${areaZipcode}`,
									data: [
										areaInfo.amenities,
										areaInfo.costOfLiving,
										areaInfo.crime,
										areaInfo.employment,
										areaInfo.housing,
										areaInfo.school,
									],
									backgroundColor: [
										"rgba(255, 99, 132, 0.2)",
										"rgba(255, 159, 64, 0.2)",
										"rgba(255, 205, 86, 0.2)",
										"rgba(75, 192, 192, 0.2)",
										"rgba(54, 162, 235, 0.2)",
										"rgba(153, 102, 255, 0.2)",
									],
									borderColor: [
										"rgb(255, 99, 132)",
										"rgb(255, 159, 64)",
										"rgb(255, 205, 86)",
										"rgb(75, 192, 192)",
										"rgb(54, 162, 235)",
										"rgb(153, 102, 255)",
									],
									borderWidth: 1,
								},
							],
						}}
					/>
				</>
			)}
		</div>
	);
};

export default AreaChart;
