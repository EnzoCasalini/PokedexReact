import React from 'react';
import { useContext } from 'react';
import languageContext from '../../../languageContext';
import {FormControl, InputBase, MenuItem, Select, styled} from "@mui/material";


const SelectStyle = styled(InputBase)(({ theme }) => ({
	'label + &': {
		marginTop: theme.spacing(3),
	},
	'& .MuiSvgIcon-root ': {
		fill: "#fff !important",
	},
	'& .MuiInputBase-input': {
		borderRadius: 4,
		position: 'relative',
		border: '1px solid #8f8f8f',
		fontSize: 16,
		padding: '10px 26px 10px 12px',
		color: '#fff',
		'&:hover': {
			borderColor: "#fff",
		},
		'&:focus': {
			borderRadius: 4,
			borderColor: '#fff',
			boxShadow: '0 0 0 0.2rem rgba(255,255,255,.10)',
		},
	},
}));

const LanguageSelection = () => {
	const { language, changeLanguage, languageList } = useContext(languageContext);


	return (
		<FormControl>
			<Select
				id="languageSelect"
				value={language}
				onChange={(e) => {changeLanguage(e.target.value)}}
				input={<SelectStyle />}
				MenuProps={{
					anchorOrigin: {
						vertical: "bottom",
						horizontal: "left"
					},
					transformOrigin: {
						vertical: "top",
						horizontal: "left"
					},
				}}
			>
				{
					languageList.map((language, id) => <MenuItem key={id} value={language}>{language.toUpperCase()}</MenuItem>)
				}
			</Select>
		</FormControl>
	);
};

export default LanguageSelection;
