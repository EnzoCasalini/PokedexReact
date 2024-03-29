import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import AppWrapper from './AppWrapper.jsx'
import PokemonListPage from './Page1/PokemonListPage/PokemonListPage.jsx'
import PokemonDetailsPage from './Page1/PokemonDetailsPage/PokemonDetailsPage.jsx'
import pokemonTypesContext from './pokemonTypesContext.jsx'
import pokemonListContext from './pokemonListContext'
import languageContext from './languageContext'
import { useEffect, useState } from 'react'

function App() {
  const [typeList, setTypeList] = useState([])
  const [pokemonList, setPokemonList] = useState([])
  const [language, setLanguage] = useState('fr')
  const [languageList, setLanguageList] = useState([])

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
  }

  useEffect(() => {
    const getTypeList = async () => {
      const response = await fetch('https://pokedex-jgabriele.vercel.app/types.json')
      const data = await response.json()
      setTypeList(data)

      const firstType = Object.keys(data)[0]
      const languagesKey = Object.keys(data[firstType].translations)
      setLanguageList(languagesKey.sort())
    }

    const getPokemons = async () => {
      const response = await fetch('https://pokedex-jgabriele.vercel.app/pokemons.json')
      const data = await response.json()

      setPokemonList(data)
    }

    getTypeList()
    getPokemons()
  }, [])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<AppWrapper />}>
          <Route path="/" element={<PokemonListPage />}>
            <Route path="/pokemon/:pokemonId" element={<PokemonDetailsPage />} />
          </Route>
        </Route>
      </>
    )
  )

  return (
    <pokemonListContext.Provider value={pokemonList}>
      <pokemonTypesContext.Provider value={typeList}>
        <languageContext.Provider value={{ language, changeLanguage, languageList }}>
          <RouterProvider router={router} />
        </languageContext.Provider>
      </pokemonTypesContext.Provider>
    </pokemonListContext.Provider>
  )
}

export default App
