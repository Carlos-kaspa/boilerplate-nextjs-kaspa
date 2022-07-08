import React from 'react'
import { VscWarning } from 'react-icons/vsc'
export default class ContextErrorHandler extends React.Component<
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
                        padding: 10,
                        margin: 10,
                        textAlign: 'center',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        border: '2px solid #ccb327',
                        cursor: 'pointer',
                    }}
                    onClick={() => this.setState({ hasError: false })}
                >
                    <p> Component Error - Click To Reload </p>
                    <div
                        style={{
                            textAlign: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                            alignContent: 'center',
                        }}
                    >
                        <VscWarning
                            size={30}
                            color="red"
                            type="button"
                        />
                    </div>
                </div>
            )
        }

        // Return children components in case of no error

        return this.props.children
    }
}
