import React, { useState, useEffect } from "react";
import axios from "axios";

const LastResult = () => {
	const [lastSearchId, setLastSearchId] = useState();
	const [lastSearchResult, setLastSearchResult] = useState();

	useEffect(() => {
		axios.get();
	}, [third]);

	return <div>{}</div>;
};

export default LastResult;
