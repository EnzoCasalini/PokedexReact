import React, {useContext} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PokemonDetailsPage.css';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import languageContext from '../../languageContext';

const PokemonDetailsPage = () => {
	const { pokemonId } = useParams();
	const { language, changeLanguage } = useContext(languageContext);
	const navigate = useNavigate();


	const onDismiss = () => {
		navigate(-1);
	}

	return (
		<Dialog onClose={onDismiss} open={true}>
			<DialogTitle>Coucou Pokémon n°{pokemonId} !</DialogTitle>
	  	</Dialog>
	);
};

export default PokemonDetailsPage;
