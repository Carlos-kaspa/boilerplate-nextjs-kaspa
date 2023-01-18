import Head from 'next/head'
import { ReactElement, Suspense } from 'react'
import DefaultLayout from '../components/global/Layouts/DefaultLayout.component'
import useDummyAPI from './api/swr/DummyApi/useDummyAPI'
import { NextPageWithLayout } from './_app'
import Image from 'next/image'
const Home: NextPageWithLayout = () => {
    const HOC = () => {
        const { response } = useDummyAPI('/products?limit=10', true)
        return (
            <div
                style={{
                    display: 'flex',
                    gap: '1rem',
                    maxWidth: '900px',
                    margin: 'auto',
                    alignContent: 'center',
                }}
            >
                {response?.products.map(({ id, title, thumbnail }) => (
                    <div key={`produto-${id}`}>
                        <Item
                            id={id}
                            title={title}
                            thumbnail={thumbnail}
                        />
                    </div>
                ))}
            </div>
        )
    }

    const Item = ({
        id,
        thumbnail,
        title,
    }: {
        id: number
        thumbnail: string
        title: string
    }) => {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    height: '200px',
                }}
            >
                <div style={{ flexBasis: '50%' }}>
                    <p>{title}</p>
                </div>
                <div style={{ flexBasis: '50%' }}>
                    <Image
                        src={thumbnail}
                        alt={title}
                        height={50}
                        width={50}
                    />
                </div>
            </div>
        )
    }

    const Loading = () => {
        return <div style={{ height: 500, width: 500, background: 'red'}}> loading... </div>
    }
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
                <>
                
                    <Suspense fallback={<Loading/>}>
                        <HOC />
                    </Suspense>
                </>
            </main>
        </>
    )
}

Home.getLayout = function getLayout(page: ReactElement) {
    return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
