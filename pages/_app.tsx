import { Box, ChakraProvider } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import theme from '../lib/theme';
import '@fontsource/raleway/400.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/500.css';

import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ChakraProvider theme={theme}>
            <Box mx={'auto'} maxW={'6xl'} transitionDuration='500ms'>
                <Navbar />
                <Component {...pageProps} />
            </Box>
        </ChakraProvider>
    );
};

export default MyApp;
