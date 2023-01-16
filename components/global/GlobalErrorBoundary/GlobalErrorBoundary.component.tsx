import React from 'react'
export default class GlobalErrorBoundary extends React.Component<
    any,
    { hasError: boolean }
> {
    constructor(props: {} | Readonly<{}>) {
        super(props)

        // Define a state variable to track whether is an error or not
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error: any) {
        // Update state so the next render will show the fallback UI
        return { hasError: true }
    }
    componentDidCatch(error: any, errorInfo: any) {
        // You can use your own error logging service here
        console.log('Logging tool call for component level errors')

        console.log({ error, errorInfo })
    }

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can render any custom fallback UI
            return (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        margin: '5rem auto',
                        maxWidth: 400,
                        minHeight: '100%',
                        alignSelf: 'center',
                        padding: '2rem',
                    }}
                >
                    <h2>Oops, é aí que a coisa fica quente.</h2>
                    <p> An unexpected error occurred </p>
                    <picture>
                        <source
                            srcSet="errochorrada.png"
                            type="image/webp"
                        />
                        <img
                            src="errochorrada.png"
                            alt=""
                            style={{
                                height: 300,
                                width: 300,
                                marginBottom: 15,
                            }}
                        />
                    </picture>
                    <button
                        type="button"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        Try again?
                    </button>
                </div>
            )
        }

        // Return children components in case of no error

        return this.props.children
    }
}
