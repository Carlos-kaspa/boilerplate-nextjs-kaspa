import { useEffect } from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import GlobalErrorBoundary from './ErrorBoundary.component'
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
    it('renders an error heading', () => {
        render(
            <GlobalErrorBoundary>
                <BuggyComponent />
            </GlobalErrorBoundary>,
        )

        const layout = screen.getByRole('heading')

        expect(layout).toBeInTheDocument()
    })

    it('renders an error image', () => {
        render(
            <GlobalErrorBoundary>
                <BuggyComponent />
            </GlobalErrorBoundary>,
        )

        const layout = screen.getByRole('img')

        expect(layout).toBeInTheDocument()
    })

    it('renders a try again button', () => {
        render(
            <GlobalErrorBoundary>
                <BuggyComponent />
            </GlobalErrorBoundary>,
        )

        const layout = screen.getByRole('button')

        expect(layout).toBeInTheDocument()
    })

    it('renders a try again button', () => {
        render(
            <GlobalErrorBoundary>
                <BuggyComponent />
            </GlobalErrorBoundary>,
        )

        const layout = screen.getByRole('button')

        expect(layout).toBeInTheDocument()
    })

    it('logs error [...]', () => {
        render(
            <GlobalErrorBoundary>
                <BuggyComponent />
            </GlobalErrorBoundary>,
        )
        expect(console.error).toHaveBeenCalled()
    })
})
