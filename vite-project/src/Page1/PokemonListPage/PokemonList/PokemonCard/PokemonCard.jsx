import React from 'react';
import './PokemonCard.css';
import PokemonInfos from './PokemonInfos/PokemonInfos.jsx';

const PokemonCard = ({id, name, image, types}) => {

	return (
		<div className={"pokemonCard"}>
			<span className={"pokemonNumber"}>No.{id}</span>
			<PokemonInfos name={name} image={image} types={types}/>
		</div>
	);
};

export default PokemonCard;
