import { Box, ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Navbar from '../components/Navbar'
import theme from '../lib/theme'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box mx={"auto"} maxW={"6xl"}>
        <Navbar/>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
