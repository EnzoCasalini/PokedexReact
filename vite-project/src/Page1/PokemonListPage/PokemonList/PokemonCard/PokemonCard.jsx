import React from 'react';
import './PokemonCard.css';
import PokemonInfos from './PokemonInfos/PokemonInfos.jsx';
import {
	Link
} from "react-router-dom";

const PokemonCard = ({id, name, image, types}) => {

	return (
		<Link to={`/pokemon/${id}`}>
			<div className={"pokemonCard"}>
				<span className={"pokemonNumber"}>No.{id}</span>
				<PokemonInfos name={name} image={image} types={types}/>
			</div>
		</Link>
	);
};

export default PokemonCard;
