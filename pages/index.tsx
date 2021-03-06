import Head from 'next/head'
import type { NextPage } from 'next'
import { Typography } from '@mui/material'

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Boilerplate Kaspa | Next Js</title>
                <meta
                    name="description"
                    content="NextJs App Boilerplate By Carlos-kaspa"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>

            <main
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    margin: '5rem',
                    textAlign:'center'
                }}
            >
                <Typography variant='h4'>Boilerplate NextJs - Kaspa</Typography>
                <Typography> Next-Auth | RecoilJs | ESLint | Prettier | Husky | SWR</Typography>
                <div style={{ margin: '1rem', height: '100%' }}>
                </div>
            </main>
        </>
    )
}

export default Home
