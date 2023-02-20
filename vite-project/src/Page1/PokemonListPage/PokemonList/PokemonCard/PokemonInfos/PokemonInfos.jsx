import React, {useEffect, useState} from 'react';
import './PokemonInfos.css';

const PokemonInfos = ({name, image, types = []}) => {
	const [typeList, setTypeList] = useState([]);


	useEffect(() => {
		const getTypeList = async () => {
			const response = await fetch("https://pokedex-jgabriele.vercel.app/types.json");
			const data = await response.json();
			setTypeList(data);
		}

		getTypeList();

	}, []);


	return (
		<div className={"pokemonInfos"}>
			<h3 className={"pokemonName"}>{name}</h3>
			<div className={"pokemonImg"}>
				<img src={image} alt={name}/>
			</div>
			<div className="pokemonTypes">
			{
				types.map((type, index) => {
					if (typeList.length !== 0)
					{
						const color = typeList[type].backgroundColor;
						const typeName = typeList[type].translations.fr;

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
