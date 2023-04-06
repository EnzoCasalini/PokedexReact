import React, { useEffect, useState, useContext } from 'react'
import PokemonCard from './PokemonCard/PokemonCard.jsx'
import languageContext from '../../../languageContext'
import Grid from '@mui/material/Unstable_Grid2'
import pokemonListContext from '../../../pokemonListContext.jsx'

const PokemonList = ({ searchText }) => {
  const [filteredPokemonList, setFilteredPokemonList] = useState([])

  const pokemonList = useContext(pokemonListContext)
  const { language, changeLanguage } = useContext(languageContext)

  useEffect(() => {
    setFilteredPokemonList(pokemonList)
  }, [pokemonList])

  useEffect(() => {
    if (searchText !== '') {
      const filteredPokemons = pokemonList.filter((pokemon) => {
        return pokemon.names[language].toLowerCase().includes(searchText.toLowerCase())
      })

      setFilteredPokemonList(filteredPokemons)
    } else {
      setFilteredPokemonList(pokemonList)
    }
  }, [searchText, pokemonList])

  return (
    <Grid
      container
      spacing={6}
      alignItems="center"
      justifyContent="center"
      sx={{ marginTop: '20px' }}
    >
      {filteredPokemonList.map((pokemon, index) => {
        return (
          <Grid key={index}>
            <PokemonCard
              id={pokemon.id}
              name={pokemon.names[language]}
              image={pokemon.image}
              types={pokemon.types}
            />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default PokemonList
