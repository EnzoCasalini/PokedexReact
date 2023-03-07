import React, {useState} from 'react';
import './SearchBar.css';

const SearchBar = ({onSearch}) => {
	const [search, setSearch] = useState('');

	const handleSearch = (event) => {
		setSearch(event.target.value);
		onSearch(event.target.value);
	}

	return (
		<div className={"searchBarDiv"}>
			<input type="text" className={"searchBarInput"} placeholder="Enter a Pokemon name" value={search} onChange={handleSearch}/>
		</div>
	);
};

export default SearchBar;
