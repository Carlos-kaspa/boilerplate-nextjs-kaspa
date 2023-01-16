import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import DefaultLayout from './DefaultLayout.component'

describe('DefaultLayout', () => {
    it('renders a layout header', () => {
        render(
            <DefaultLayout>
                {' '}
                <p> children </p>
            </DefaultLayout>,
        )

        const layout = screen.getByText('header')

        expect(layout).toBeInTheDocument()
    })

    it('renders a layout footer', () => {
        render(
            <DefaultLayout>
                {' '}
                <p> children </p>
            </DefaultLayout>,
        )

        const layout = screen.getByText('footer')

        expect(layout).toBeInTheDocument()
    })

    it('renders main section for children', () => {
        render(
            <DefaultLayout>
                {' '}
                <p> children </p>
            </DefaultLayout>,
        )

        const layout = screen.getByRole('main')

        expect(layout).toBeInTheDocument()
    })

    it('renders children', () => {
        render(
            <DefaultLayout>
                {' '}
                <p> children </p>
            </DefaultLayout>,
        )

        const layout = screen.getByText('children')

        expect(layout).toBeInTheDocument()
    })
})
