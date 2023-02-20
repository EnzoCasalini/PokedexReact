import React from 'react';
import Logo from './Logo/Logo.jsx';
import './Header.css';
import LanguageSelection from './LanguageSelection/LanguageSelection.jsx';

const Header = () => {
	return (
		<header className={"header"}>
			<Logo/>
			<LanguageSelection/>
		</header>
	);
};

export default Header;
