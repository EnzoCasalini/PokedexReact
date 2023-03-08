import React from 'react';
import './LanguageSelection.css';
import { useContext } from 'react';
import languageContext from '../../../languageContext';

const LanguageSelection = () => {
	const { language, changeLanguage } = useContext(languageContext);


	return (
		<div className={"languageSelection"}>
			<select name="languageSelection" id="languageSelect" onChange={(e) => {changeLanguage(e.target.value)}}>
				<option value="fr">FR</option>
				<option value="en">EN</option>
			</select>
		</div>
	);
};

export default LanguageSelection;
