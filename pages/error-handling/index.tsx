import Head from 'next/head'
import { NextPage } from 'next'
import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import useDummyAPI from '../api/swr/DummyApi/useDummyAPI'
import { GlobalErrorTest } from '../../components/ErrorTest/GlobalError'
import { BuggyPostsHide } from '../../components/ErrorTest/BuggyPostsHide'
import AddButton from '../../components/global/Mui/FloatingButton/AddButton'
import { BuggyPostsFallback } from '../../components/ErrorTest/BuggyPostsFallback'
import SubtractButton from '../../components/global/Mui/FloatingButton/SubtractButton'

const PostsPage: NextPage = () => {
    const [ postLimit, setPostLimit] = useState(5)
    const { response, loading, mutate } = useDummyAPI(`/post?limit=${postLimit}`)

    const increaseLimit = () => {
        const newLimit = postLimit + 1
        setPostLimit(newLimit)
    }

    const decreaseLimit = () => {
        const newLimit = postLimit - 1
        if(newLimit > 0) {
            setPostLimit(newLimit)
        }
    }

    return (
        <>
            <Head>
                <title> Error Handling Demo </title>
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
                <Container style={{ margin: '1rem auto', textAlign: 'center'}}>
                    <Typography variant='h4'>Error Handling | SWR Demo </Typography>
                    <Typography variant='h5'> SWR | React Hooks | Error Boundary </Typography>
                    <Typography> SWR: Data fetch with revalidation strategy </Typography>
                    <Typography> Error Boundary: Client error handling, globally and on a component level </Typography>
                </Container>

                <GlobalErrorTest />
                <Container style={{display: 'flex', flexDirection: 'column', padding: 20}}> 
                    <div style={{display: 'flex', width: 300, justifyContent: 'space-between', alignItems:'center', margin: '0 auto'}}>
                        {postLimit > 5 && (<SubtractButton handleClick={decreaseLimit}/>)}
                        <Typography> Post Quantity </Typography>
                        <AddButton handleClick={increaseLimit}/>
                    </div>
                </Container>
                <div style={{ alignContent: 'center', height: '100%' }}>
                    <>
                        <Typography variant='h6'> Show Fallback on Error </Typography>
                        <BuggyPostsFallback
                            loading={loading}
                            posts={response?.data}
                        />
                    </>
                    
                    <>
                        <Typography variant='h6'> Hide on Error </Typography>
                        <BuggyPostsHide
                            loading={loading}
                            posts={response?.data}
                        />
                    </>
                </div>
            </main>
        </>
    )
}

export default PostsPage
