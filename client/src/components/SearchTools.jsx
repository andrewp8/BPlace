import React, { useState } from "react";
import "./css/SearchTools.css";

import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const SearchTools = () => {
	const [searchValue, setSearchValue] = useState();
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="searchTools">
			<Paper
				component="form"
				sx={{
					p: "2px 4px",
					display: "flex",
					// width: "320px",
				}}
				onSubmit={handleSubmit}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Search By Zip-code"
					onChange={(e) => setSearchValue(e.target.value)}
					type="number"
				/>
				<IconButton type="button" sx={{ p: "10px" }} aria-label="search">
					<SearchIcon />
				</IconButton>
			</Paper>

			{/* <Box sx={{ minWidth: 120 }}> */}
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel>Menu</InputLabel>
					<Select label="menu">
						<MenuItem>For Sale</MenuItem>
						<MenuItem>For Rent</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel>Type House</InputLabel>
					<Select label="typeHouse">
						<MenuItem>Single</MenuItem>
						<MenuItem>Townhouse</MenuItem>
						<MenuItem>Apartment</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel>Min Price</InputLabel>
					<Select label="minPrice">
						<MenuItem>$500k</MenuItem>
						<MenuItem>$400k</MenuItem>
						<MenuItem>$200k</MenuItem>
					</Select>
				</FormControl>
			</Box>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel>Beds/Baths</InputLabel>
					<Select label="bedsBaths">
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel>Beds</InputLabel>
								<Select label="bedsBaths">
									<MenuItem>5+</MenuItem>
									<MenuItem>4</MenuItem>
									<MenuItem>2</MenuItem>
								</Select>
							</FormControl>
						</Box>
						<Box sx={{ minWidth: 120 }}>
							<FormControl fullWidth>
								<InputLabel>Baths</InputLabel>
								<Select label="bedsBaths">
									<MenuItem>3+</MenuItem>
									<MenuItem>2</MenuItem>
									<MenuItem>1</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Select>
				</FormControl>
			</Box>
		</div>
	);
};

export default SearchTools;
