import React from 'react';
import PokemonList from './PokemonList/PokemonList.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

const PokemonListPage = () => {
	return (
		<div className={"pokemonListPageContainer"}>
			<SearchBar/>
			<PokemonList/>
		</div>
	);
};

export default PokemonListPage;
