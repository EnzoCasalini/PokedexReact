import React, {useEffect, useState} from 'react';
import './PokemonInfos.css';
import {useContext} from "react";
import pokemonTypesContext from '../../../../../pokemonContext.jsx';

const PokemonInfos = ({name, image, types = []}) => {

	const pokemonTypes = useContext(pokemonTypesContext);

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
						const typeName = pokemonTypes[type].translations.fr;

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
