import React from 'react';
import './Logo.css';
import logo from './assets/logo_pokedex.svg';

const Logo = () => {
	return (
		<div className={"logoContainer"}>
			<img src={logo} alt="PokedexLogo" className={"logo"} />
		</div>
	);
};

export default Logo;
