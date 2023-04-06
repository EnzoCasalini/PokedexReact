import React from 'react'
import Header from './Page1/Header/Header.jsx'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import theme from './theme.jsx'

const AppWrapper = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </ThemeProvider>
  )
}

export default AppWrapper
