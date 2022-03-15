import '../styles/globals.css'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react';
import theme from '../theme'
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
