import React, {useState} from 'react';
import PokemonList from './PokemonList/PokemonList.jsx';
import SearchBar from './SearchBar/SearchBar.jsx';

const PokemonListPage = () => {
	const [searchText, setSearchText] = useState("");

	const handleSearchText = (search) => {
		setSearchText(search);
	}

	return (
		<div className={"pokemonListPageContainer"}>
			<SearchBar onSearch={handleSearchText}/>
			<PokemonList searchText={searchText}/>
		</div>
	);
};

export default PokemonListPage;
