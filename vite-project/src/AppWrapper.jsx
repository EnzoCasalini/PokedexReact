import React from 'react';
import Header from './Page1/Header/Header.jsx';
import { Outlet } from "react-router-dom";

const AppWrapper = () => {
	return (
		<div className="App">
			<Header/>
			<Outlet />
		</div>
	);
};

export default AppWrapper;
