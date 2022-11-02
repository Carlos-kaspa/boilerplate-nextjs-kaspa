import { useState } from 'react'
import ContextErrorHandler from '../global/ContextErrorHandler/ContextErrorHandler'
// import dynamic from 'next/dynamic'
// const DynamicLoader = dynamic(() => import('./BlogPost), {
//     suspense: true,
//   })
export const ComponentErrorHandling = () => {
    return (
        <div style={{ width: 300, margin: '20px auto' }}>
            <ContextErrorHandler>
                <BuggyComponentOne />
            </ContextErrorHandler>
            <ContextErrorHandler>
                <BuggyComponentTwo />
            </ContextErrorHandler>
        </div>
    )
}

const BuggyComponentOne = () => {
    const [counter, setCounter] = useState<boolean>(false)
    const testError = () => {
        throw new Error('Error on Component One')
    }
    return (
        <div style={{ margin: 10, padding: 10, border: '2px solid #ec9e69' }}>
            <p> Component One </p>
            <button onClick={() => setCounter(true)}> Component Error </button>
            {counter ? testError() : null}
        </div>
    )
}

const BuggyComponentTwo = () => {
    const [counter, setCounter] = useState<boolean>(false)
    const testError = () => {
        throw new Error('Error on Component Two')
    }
    return (
        <div style={{ margin: 10, padding: 10, border: '2px solid #25c220' }}>
            <p> Component Two </p>
            <button onClick={() => setCounter(true)}> Component Error </button>
            {counter ? testError() : null}
        </div>
    )
}
