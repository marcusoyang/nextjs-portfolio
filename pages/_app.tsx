import { Box, ChakraProvider } from '@chakra-ui/react'
import Fonts from '../components/fonts'
import Navbar from '../components/Navbar'
import theme from '../lib/theme'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import '../styles/global.css'

interface MyAppProps {
  Component: React.ComponentType<any>
  pageProps: any
}

const MyApp = ({ Component, pageProps }:MyAppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Box mx={"auto"} maxW={"6xl"} transitionDuration="500ms">
        <Navbar/>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
