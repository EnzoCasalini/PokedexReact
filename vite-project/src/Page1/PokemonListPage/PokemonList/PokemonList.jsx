import React, {useEffect, useState, useContext} from 'react';
import PokemonCard from './PokemonCard/PokemonCard.jsx';
import languageContext from '../../../languageContext';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

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
		<Grid container spacing={6} alignItems="center" justifyContent="center" sx={{marginTop: "20px"}}>
			{
				filteredPokemonList.map((pokemon, index) => {
					return (
						<Grid key={index}><PokemonCard id={pokemon.id} name={pokemon.names[language]} image={pokemon.image} types={pokemon.types} /></Grid>
					);
				})
			}
		</Grid>
	);
};

export default PokemonList;
