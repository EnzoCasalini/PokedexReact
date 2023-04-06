import React, { useContext, useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Chip, Typography, Dialog, DialogTitle, DialogContent } from '@mui/material'
import languageContext from '../../languageContext'
import pokemonListContext from '../../pokemonListContext'

const PokemonDetailsPage = () => {
  const [pokemon, setPokemon] = useState()
  const { pokemonId } = useParams()
  const pokemonList = useContext(pokemonListContext)
  const { language, changeLanguage } = useContext(languageContext)
  const navigate = useNavigate()

  const onDismiss = () => {
    navigate('/')
  }

  const selectFourRandomMoves = (moves) => {
    const selectedMoves = moves.slice()
    let currentIndex = selectedMoves.length
    let selectedMove, randomIndex

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      selectedMove = selectedMoves[currentIndex]
      selectedMoves[currentIndex] = selectedMoves[randomIndex]
      selectedMoves[randomIndex] = selectedMove
    }

    return selectedMoves.slice(0, 4)
  }

  const renderMoves = (movesList) => {
    const selectedMoves = selectFourRandomMoves(movesList)

    return (
      <Grid
        container
        columns={2}
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: '8px' }}
      >
        {selectedMoves.map((move, index) => {
          return (
            <Grid key={index}>
              <Chip
                label={move.toString().charAt(0).toUpperCase() + move.toString().slice(1)}
                sx={{
                  border: '1px solid black',
                  fontSize: '10px',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                }}
              />
            </Grid>
          )
        })}
      </Grid>
    )
  }

  useEffect(() => {
    const pokemon = pokemonList.find((pokemon) => pokemon.id === parseInt(pokemonId))
    setPokemon(pokemon)
  })

  if (pokemon !== undefined) {
    console.log(pokemon)
    return (
      <Dialog
        onClose={onDismiss}
        open={true}
        PaperProps={{
          sx: {
            width: '40%',
            minWidth: '230px',
            height: '60%',
            minHeight: '400px',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          },
        }}
      >
        <DialogTitle sx={{ fontSize: '28px' }}>{pokemon.names[language]}</DialogTitle>
        <DialogContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <img
            style={{ width: '100px', height: '100px' }}
            src={pokemon.image}
            alt={`image of ${pokemon.names[language]}`}
          />
          <Box>
            <Typography sx={{ textDecoration: 'underline', textAlign: 'center' }}>
              Height :
            </Typography>{' '}
            &nbsp; {(pokemon.height / 10).toFixed(1)}m
          </Box>
          <Box>
            <Typography sx={{ textDecoration: 'underline', textAlign: 'center' }}>
              Weight :
            </Typography>{' '}
            &nbsp; {(pokemon.weight / 10).toFixed(1)}kg
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <Typography sx={{ textDecoration: 'underline', textAlign: 'center' }}>
              Moves :
            </Typography>
            {renderMoves(pokemon.moves)}
          </Box>
        </DialogContent>
      </Dialog>
    )
  } else {
    return null
  }
}

export default PokemonDetailsPage
