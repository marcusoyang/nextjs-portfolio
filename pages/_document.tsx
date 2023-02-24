import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class Document extends NextDocument {
    render() {
        return (
            <Html>
                <Head>
                    {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                    <meta property='og:image' content='../public/thumb.PNG' />
                    <meta lang='en' />
                    <meta
                        property='og:description'
                        content='Portfolio website with NextJS, Chakra UI and ThreeJS'
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
}
