import React from 'react'
import Logo from './Logo/Logo.jsx'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Container from '@mui/material/Container'
import LanguageSelection from './LanguageSelection/LanguageSelection.jsx'

const Header = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        position: 'fixed',
        top: '0',
        width: '100%',
        height: '80px',
        backgroundColor: '#1F2630',
        zIndex: '1000',
        border: 'none',
        borderStyle: 'none',
        boxShadow: 'none',
        transition: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="2000px">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Logo />
          <LanguageSelection />
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Header
