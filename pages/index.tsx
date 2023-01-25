import Head from 'next/head'
import { ReactElement, Suspense } from 'react'
import DefaultLayout from '../components/global/Layouts/DefaultLayout.component'
import useDummyAPI from './api/swr/DummyApi/useDummyAPI'
import { NextPageWithLayout } from './_app'
import Image from 'next/image'
const Home: NextPageWithLayout = () => {
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
                    textAlign: 'center',
                }}
            >
                <h1>Boilerplate NextJs - Kaspa</h1>
                <h2> RecoilJs | ESLint | Prettier | Husky | SWR | Jest </h2>
            </main>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
