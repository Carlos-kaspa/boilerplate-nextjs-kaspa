import { useState } from 'react'

export const GlobalErrorTest = () => {
    const [counter, setCounter] = useState<boolean>(false)
    const testError = () => {
        throw new Error('Global Error Test')
    }
    return (
        <>
            <button onClick={() => setCounter(true)}> Global Error </button>
            {counter ? testError() : null}
        </>
    )
}
