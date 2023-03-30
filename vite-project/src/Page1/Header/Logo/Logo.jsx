import React from 'react';
import logo from './assets/logo_pokedex.svg';
import {
	Link
} from "react-router-dom";
import { Box } from "@mui/material";

const Logo = () => {
	return (
		<Link to="/">
			<Box sx={{
				width: "200px",
				height: "100%",
			}}>
				<Box component="img" alt="PokedexLogo" src={logo} sx={{
					width: "100%",
					height: "100%",
					objectFit: "contain",
				}}>
				</Box>
			</Box>
		</Link>
	);
};

export default Logo;
