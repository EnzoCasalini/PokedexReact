import React from 'react';
import { useParams } from 'react-router-dom';
import './PokemonDetailsPage.css';

const PokemonDetailsPage = () => {
	const { pokemonId } = useParams();

	return (
		<div className={"pokemonDetailsContainer"}>
			Coucou Pokémon n°{pokemonId} !
		</div>
	);
};

export default PokemonDetailsPage;
