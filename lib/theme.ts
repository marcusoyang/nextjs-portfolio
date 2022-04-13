//theme.ts
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools'
import { Dict } from "@chakra-ui/utils";

const styles = {
  global: (props: Dict<any> | StyleFunctionProps) => ({
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