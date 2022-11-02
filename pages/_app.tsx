import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import GlobalErrorBoundary from '../components/global/ErrorBoundary/ErrorBoundary'


export type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

// Override children component type to include getLayout
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function MyApp({
    Component,
    pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page)

    return (
        <GlobalErrorBoundary>
            <SessionProvider session={session ?? null}>
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
        </GlobalErrorBoundary>
    )
}
