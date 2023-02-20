import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Page1/Header/Header.jsx';
import PokemonList from './Page1/PokemonList/PokemonList.jsx';

function App() {
  return (
    <div className="App">
        <Header/>
        <PokemonList/>
    </div>
  )
}

export default App