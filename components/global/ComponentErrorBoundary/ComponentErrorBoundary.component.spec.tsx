import { useEffect } from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import ComponentErrorBoundary from './ComponentErrorBoundary.component'
describe('Component Error Boundary', () => {
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
            <ComponentErrorBoundary>
                <BuggyComponent />
            </ComponentErrorBoundary>,
        )
        expect(console.error).toHaveBeenCalled()
    })
})
