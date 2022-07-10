import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    const cssReset = {
        background: '#f4f4f4',
        padding: 0,
        margin: 0,
        border: 0,
        fontSize: '100%',
        verticalAlign: 'baseline',
        fontFamily: 'Roboto',
    }
    return (
        <Html>
            <Head>
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
                {/* Roboto is a global default font */}
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com"
                />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>
            {/* style reset and global styles goes on this file */}
            <body style={cssReset}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
