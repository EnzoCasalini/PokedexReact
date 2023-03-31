import React, {useContext, useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PokemonDetailsPage.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import languageContext from '../../languageContext';
import pokemonListContext from '../../pokemonListContext';

const PokemonDetailsPage = () => {
	const [pokemon, setPokemon] = useState({});
	const { pokemonId } = useParams();
	const pokemonList = useContext(pokemonListContext);
	const { language, changeLanguage } = useContext(languageContext);
	const navigate = useNavigate();

	const onDismiss = () => {
		navigate('/');
	}


	useEffect(() => {
		console.log(pokemonId);
		const pokemon = pokemonList.find((pokemon) => pokemon.id === parseInt(pokemonId));
		setPokemon(pokemon);	
		
	}, [pokemonId])


	if (pokemon !== undefined)
	{
		return (
			<Dialog onClose={onDismiss} open={true}>
				<DialogTitle>Coucou Pokémon n°{pokemonId} !</DialogTitle>
			</Dialog>
		);
	}
	else {
		return null;
	}

};

export default PokemonDetailsPage;
