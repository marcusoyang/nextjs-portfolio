import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                <meta property='og:image' content='/thumb.jpg' />
                <meta
                    property='og:title'
                    content="Marcus O'Yang - Portfolio Website"
                />
                <meta
                    property='og:description'
                    content='ReactJS portfolio website using NextJS, Chakra UI and ThreeJS'
                />
                <meta property='og:url' content='marcuso.dev' />
                <meta property='og:image:width' content='1200' />
                <meta property='og:image:height' content='627' />
            </Head>
            <body>
                {/* Make Color mode to persists when you refresh the page. */}
                <ColorModeScript />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
