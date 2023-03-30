import React, {useState} from 'react';
import {Box, TextField} from "@mui/material";

const SearchBar = ({onSearch}) => {
	const [search, setSearch] = useState('');

	const handleSearch = (event) => {
		setSearch(event.target.value);
		onSearch(event.target.value);
	}

	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor: '#242C38',
			padding: '100px 20px 0px 20px',
			width: '100%'
			}}
		>
			<TextField id="outlined-basic"
					   variant="outlined"
					   placeholder="Enter a Pokemon name"
					   value={search}
					   onChange={handleSearch}
					   color={"secondary"}
					   fullWidth
					   inputProps={{ style: { color: '#fff' }}}
					   sx={{
						   borderColor: '#fff',
						   '& .MuiOutlinedInput-root': {
							   '& fieldset': {
								   borderColor: '#8f8f8f',
								   borderWidth: 2,
							   }
						   },
						   '& .MuiOutlinedInput-root:hover fieldset': {
							   borderColor: '#fff',
						   }
				   }}
			/>
		</Box>
	);
};

export default SearchBar;
