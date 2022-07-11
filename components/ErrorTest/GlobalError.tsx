import { useState } from 'react'
import Button from '@mui/material/Button';
export const GlobalErrorTest = () => {
    const [counter, setCounter] = useState<boolean>(false)
    const testError = () => {
        throw new Error('Global Error Test')
    }
    return (
        <>
            <Button 
                variant="contained" 
                onClick={() => setCounter(true)}
                size='small'
                style={{ width: 140, margin: '0 auto'}}
            > 
                Global Error 
            </Button>
            {counter ? testError() : null}
        </>
    )
}
