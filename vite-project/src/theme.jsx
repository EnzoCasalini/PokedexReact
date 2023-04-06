import { createTheme } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[900],
    },
    secondary: {
      main: blueGrey[50],
    },
  },
})

export default theme
