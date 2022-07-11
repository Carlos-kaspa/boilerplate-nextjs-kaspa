import Head from "next/head"
import { NextPage } from "next"
import { RecoilRoot } from "recoil"
import { RecoilJsDemo } from "../../components/RecoilTeste/RecoilTeste"


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Recoil Js Demo</title>
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
                    paddingBottom: '5rem',
                }}
            >
                <h1> Recoil Js Demo </h1>
                <div style={{ alignContent: 'center', height: '100%' }}>
                    <RecoilRoot>
                        <RecoilJsDemo />
                    </RecoilRoot>
                </div>
            </main>
        </>
    )
}

export default Home
