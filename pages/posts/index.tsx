import { NextPage } from 'next'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { DynamicPosts } from '../../components/ErrorTest/DynamicPosts'
import useDummyAPI from '../api/swr/DummyApi/useDummyAPI'

const PostsPage: NextPage = () => {
    const { response, loading, mutate } = useDummyAPI('post?limit=100')

    return (
        <>
            <Head>
                <title>Posts Demo | Next Js</title>
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
                <h1>SWR Demo - Kaspa</h1>
                <p> SWR | React Hooks </p>
                <div style={{ alignContent: 'center', height: '100%' }}>
                    <RecoilRoot>
                        <DynamicPosts
                            loading={loading}
                            posts={response?.data}
                        />
                    </RecoilRoot>
                </div>
            </main>
        </>
    )
}

export default PostsPage
