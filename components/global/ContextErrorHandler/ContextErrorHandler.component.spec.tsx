import { useEffect } from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ContextErrorHandler from './ContextErrorHandler.component'
describe('Error Boundary', () => {
    beforeAll(() => {
        jest.spyOn(console, 'error').mockImplementation(() => {})
    })

    const BuggyComponent = () => {
        useEffect(() => {
            throw Error('component error on load')
        }, [])
        return null
    }
  
    it('logs error [...]', () => {
        render(
            <ContextErrorHandler>
                <BuggyComponent />
            </ContextErrorHandler>,
        )
        expect(console.error).toHaveBeenCalled()
    })
})
