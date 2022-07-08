import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { RecoilRoot } from 'recoil'
import { RecoilJsDemo } from '../components/RecoilTeste/RecoilTeste'
import { ComponentErrorHandling } from '../components/ErrorTest/ComponentError'
import { GlobalErrorTest } from '../components/ErrorTest/GlobalError'

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
                    flexGrow: 'auto',
                    width: '100%',
                    textAlign: 'center',
                    border: '2px solid #d68edd',
                    paddingBottom: '5rem',
                }}
            >
                <h1>Boilerplate NextJs - Kaspa</h1>
                <p> Next-Auth | RecoilJs | ESLint | Prettier | Husky | SWR</p>
                <div style={{ alignContent: 'center', height: '100%' }}>
                    <h2> Recoil Js Demo </h2>
                    <RecoilRoot>
                        <RecoilJsDemo />
                        <br />
                        <h2> Error Handling Demo </h2>
                        <GlobalErrorTest />
                        <ComponentErrorHandling />
                    </RecoilRoot>
                </div>
            </main>
        </>
    )
}

export default Home
