import React, { ComponentProps, ComponentPropsWithRef } from 'react'
import { VscWarning } from 'react-icons/vsc'

interface IContextErrorHandlerProps extends ComponentPropsWithRef<any> {
    hideOnError?: boolean
}

export default class ContextErrorHandler extends React.Component<
    any,
    { hasError: boolean }
> {
    constructor(props: IContextErrorHandlerProps | Readonly<{}>) {
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
        console.log({ error, errorInfo })
    }

    render() {
        // Check if the error is thrown
        if (this.state.hasError) {
            // You can hide the component on error
            if (this.props.hideOnError) {
                return null
            }
            // Or you can render any custom fallback UI
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
