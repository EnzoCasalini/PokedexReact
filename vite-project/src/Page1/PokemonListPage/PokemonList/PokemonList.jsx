import React, {useEffect, useState, useContext} from 'react';
import './PokemonList.css';
import PokemonCard from './PokemonCard/PokemonCard.jsx';
import languageContext from '../../../languageContext';

const PokemonList = ({searchText}) => {
	const [pokemonList, setPokemonList] = useState([]);
	const [filteredPokemonList, setFilteredPokemonList] = useState([]);

	const { language, changeLanguage } = useContext(languageContext);

	useEffect(() => {
		const getPokemons = async () => {
			const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json');
			const data = await response.json();

			setPokemonList(data);
			setFilteredPokemonList(data);
		};

		getPokemons();
	}, []);

	useEffect(() => {
		if (searchText !== '')
		{
			const filteredPokemons = pokemonList.filter((pokemon) => {
				return pokemon.names[language].toLowerCase().includes(searchText.toLowerCase());
			});

			setFilteredPokemonList(filteredPokemons);
		}
		else {
			setFilteredPokemonList(pokemonList);
		}
	}, [searchText]);


	return (
		<div className={"pokemonList"}>
			{
				filteredPokemonList.map((pokemon, index) => {
					return (
						<PokemonCard key={index} id={pokemon.id} name={pokemon.names[language]} image={pokemon.image} types={pokemon.types} />
					);
				})
			}
		</div>
	);
};

export default PokemonList;
