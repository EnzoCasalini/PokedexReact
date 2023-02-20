import React, {useEffect, useState} from 'react';
import './PokemonList.css';
import PokemonCard from './PokemonCard/PokemonCard.jsx';

const PokemonList = () => {
	const [pokemonList, setPokemonList] = useState([]);

	useEffect(() => {
		const getPokemons = async () => {
			const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json');
			const data = await response.json();

			console.log(data);
			setPokemonList(data);
		};

		getPokemons();
	}, []);


	return (
		<div className={"pokemonList"}>
			{
				pokemonList.map((pokemon, index) => {
					return (
						<PokemonCard key={index} id={pokemon.id} name={pokemon.names.fr} image={pokemon.image} types={pokemon.types} />
					);
				})
			}
		</div>
	);
};

export default PokemonList;
