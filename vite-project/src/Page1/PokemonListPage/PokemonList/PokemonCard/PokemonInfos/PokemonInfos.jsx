import React, {useContext} from 'react';
import pokemonTypesContext from '../../../../../pokemonContext.jsx';
import languageContext from '../../../../../languageContext';
import PlaceholderImage from '../../../../../assets/pokeball.gif';
import { LazyLoadImage } from "react-lazy-load-image-component";
import {Box, Chip, Typography} from "@mui/material";


const PokemonInfos = ({name, image, types = []}) => {

	const pokemonTypes = useContext(pokemonTypesContext);
	const { language, changeLanguage } = useContext(languageContext);

	return (
		<Box className={"pokemonInfos"} sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			padding: '10px',
			margin: 'auto',
		}}>
			<Typography variant="h3" sx={{
				margin: 0,
				fontSize: "24px",
				fontWeight: "normal",
			}}>
				{name}
			</Typography>
			<Box className={"pokemonImg"} sx={{
				width: "96px",
				height: "96px",
			}}>
				<LazyLoadImage src={image}
				placeholderSrc={PlaceholderImage}
				alt={name}
				/>
			</Box>
			<Box className="pokemonTypes" sx={{
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center',
				margin: 0,
				padding: 0,
				listStyle: 'none',
			}}>
			{
				types.map((type, index) => {
					if (pokemonTypes.length !== 0)
					{
						const color = pokemonTypes[type].backgroundColor;
						const typeName = pokemonTypes[type].translations[language];

						return (
							<Chip label={typeName} sx={{
								backgroundColor: color,
								border: "1px solid black",
								fontSize: "10px",
								fontWeight: "bold",
								textTransform: "uppercase",
								margin: "0 4px",
								padding: "1px 6px",
							}}
								  key={index}>
							</Chip>
						);
					}
				})
			}
			</Box>
		</Box>
	);
};

export default PokemonInfos;
