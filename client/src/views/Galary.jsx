import React, { useState } from "react";
import "./css/Galary.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Galary = () => {
	const slides = [
		"https://imageio.forbes.com/specials-images/imageserve/61e086c1a4f269649834b4f7/Lead/0x0.gif?format=gif&height=1449&width=2171",
		"https://specials-images.forbesimg.com/imageserve/61e087521be1343c0b3806f0/11/0x0.gif?fit=scale",
		"https://onecms-res.cloudinary.com/image/upload/s--E4Hr9Zwi--/c_crop,h_843,w_1125,x_188,y_-1/c_fill,g_auto,h_622,w_830/f_auto,q_auto/v1/mediacorp/cna/image/2022/08/04/hero-house-of-trees-l-architects.png?itok=LqWRu6jU",
		"https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=https%3A%2F%2Fsir.azureedge.net%2F1261i215%2Fesdsbvjq2f47mkp2pf71h6kag1i215&option=N&h=472&permitphotoenlargement=false",
		"https://i.pinimg.com/736x/ce/f7/fb/cef7fbc4e95386d96d19b5540ecf592b.jpg",
	];

	const [currentIdx, setCurrentIdx] = useState(0);
	const goToPrevious = () => {
		const isFirstSlide = currentIdx === 0;
		const newIdx = isFirstSlide ? slides.length - 1 : currentIdx - 1;
		setCurrentIdx(newIdx);
	};
	const goToNext = () => {
		const isLastSlide = currentIdx === slides.length - 1;
		const newIdx = isLastSlide ? 0 : currentIdx + 1;
		setCurrentIdx(newIdx);
	};

	return (
		<div className="galary">
			<div className="arrows">
				<div className="leftArrow" onClick={goToPrevious}>
					<ArrowBackIosIcon
						fontSize="large"
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.60)",
							borderRadius: "50%",
						}}
					/>
				</div>
				<div className="rightArrow" onClick={goToNext}>
					<ArrowForwardIosIcon
						fontSize="large"
						style={{
							backgroundColor: "rgba(255, 255, 255, 0.60)",
							borderRadius: "50%",
						}}
					/>
				</div>
			</div>
			<img src={slides[currentIdx]} />
			<div className="slides"></div>
		</div>
	);
};

export default Galary;
