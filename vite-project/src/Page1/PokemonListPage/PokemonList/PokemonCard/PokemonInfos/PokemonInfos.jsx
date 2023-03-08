import React, {useEffect, useState, useContext} from 'react';
import './PokemonInfos.css';
import pokemonTypesContext from '../../../../../pokemonContext.jsx';
import languageContext from '../../../../../languageContext';

const PokemonInfos = ({name, image, types = []}) => {

	const pokemonTypes = useContext(pokemonTypesContext);
	const { language, changeLanguage } = useContext(languageContext);

	return (
		<div className={"pokemonInfos"}>
			<h3 className={"pokemonName"}>{name}</h3>
			<div className={"pokemonImg"}>
				<img src={image} alt={name}/>
			</div>
			<div className="pokemonTypes">
			{
				types.map((type, index) => {
					if (pokemonTypes.length !== 0)
					{
						const color = pokemonTypes[type].backgroundColor;
						const typeName = pokemonTypes[type].translations[language];

						return (
							<div className={"pokemonType"} style={{"backgroundColor": color}} key={index}>
								{typeName}
							</div>
						);
					}
				})
			}
			</div>
		</div>
	);
};

export default PokemonInfos;
