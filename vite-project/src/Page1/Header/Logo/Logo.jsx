import React from 'react';
import './Logo.css';
import logo from './assets/logo_pokedex.svg';
import {
	Link
} from "react-router-dom";

const Logo = () => {
	return (
		<Link to="/">
			<div className={"logoContainer"}>
				<img src={logo} alt="PokedexLogo" className={"logo"} />
			</div>
		</Link>
	);
};

export default Logo;
