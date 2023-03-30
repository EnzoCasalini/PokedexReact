import React from 'react';
import PokemonInfos from './PokemonInfos/PokemonInfos.jsx';
import {
	Link
} from "react-router-dom";
import {Card, CardContent, Typography} from "@mui/material";

const PokemonCard = ({id, name, image, types}) => {

	return (
		<Link to={`/pokemon/${id}`}>
			<Card sx={{
				color: "black",
				width: "200px",
				height: "200px",
				backgroundColor: "#f3f3f3",
				borderRadius: "8px",
			}}>
				<CardContent sx={{padding: '0'}}>
					<Typography gutterBottom sx={{
						position: "relative",
						top: "4px",
						left: "8px",
						fontSize: "12px"
					}}>
						No.{id}
					</Typography>
					<PokemonInfos name={name} image={image} types={types}/>
				</CardContent>
			</Card>
		</Link>
	);
};

export default PokemonCard;
