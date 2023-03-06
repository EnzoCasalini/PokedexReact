import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = () => {
	const [search, setSearch] = useState('');

	return (
		<div className={"searchBarDiv"}>
			<input type="text" className={"searchBarInput"} placeholder="Enter a Pokemon name" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
		</div>
	);
};

export default SearchBar;
