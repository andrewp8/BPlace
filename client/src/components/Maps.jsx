import React, { useState, useMemo, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./css/Maps.css";

const Maps = (props) => {
	const [lat, setLat] = useState();
	const [lng, setLng] = useState();
	useEffect(() => {
		switch (props.zipcode) {
			case 84108:
				setLat(40.78655);
				setLng(-111.73696);
				break;
			case 28472:
				setLat(34.28543);
				setLng(-78.63755);
				break;
			case 46404:
				setLat(41.58557);
				setLng(-87.37936);
				break;
			case 63141:
				setLat(38.65545);
				setLng(-90.45251);
				break;
			case 85364:
				setLat(32.70743);
				setLng(-114.68009);
				break;
			case 53562:
				setLat(43.11482);
				setLng(-89.52133);
				break;
			case 35211:
				setLat(33.45657);
				setLng(-86.86027);
				break;
			case 1801:
				setLat(42.48953);
				setLng(-71.15888);
				break;
			default:
				setLat(37.41916);
				setLng(-122.07541);
		}
	}, [props.zipcode]);

	const API_KEY = process.env.REACT_APP_NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: API_KEY,
	});
	if (!isLoaded) return <div>Loading...</div>;

	return lat && lng && <Map lat={lat} lng={lng} />;
};

export default Maps;
function Map({ lat, lng }) {
	const center = { lat: lat, lng: lng };
	// ! using useMemo doesn't work in this case
	// const center = useMemo(() => ({ lat: lat, lng: lng }), []);
	return (
		<GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
			<Marker position={center} />
		</GoogleMap>
	);
}
