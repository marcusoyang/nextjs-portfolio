//theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'

const styles = {
  global: props => ({
    body: {
      bg: mode('white', '#222')(props),
    }
  })
}

const fonts = {
  heading: 'Open Sans, sans-serif',
  body: 'Raleway, sans-serif',
}

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({config, fonts, styles})

export default theme;