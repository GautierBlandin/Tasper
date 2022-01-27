import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material";

const customThemeOptions = {
  palette: {
    text: {
      light: 'white'
    }
  },
  typography: {
    size: {
      small: '12px',
      medium: '16px',
      large: '20px',
      xl: '28px',
      xxl: '40px'
    }
  }
}

const theme = createTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 16,
  },
  palette: {
    text: {
      primary: '#545454',
    },
  }
}, customThemeOptions);



function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
