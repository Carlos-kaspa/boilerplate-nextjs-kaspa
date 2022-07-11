import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Footer } from '../components/shared/Footer/Footer'
import GlobalErrorBoundary from '../components/shared/ErrorBoundary/ErrorBoundary'
import dynamic from 'next/dynamic'

const DynamicResponsiveAppBar = dynamic(() => import('../components/shared/Header/AppHeader'), {
    suspense: true,
})
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
            <DynamicResponsiveAppBar />
            <SessionProvider session={session ?? null}>
                {getLayout(<Component {...pageProps} />)}
            </SessionProvider>
        </GlobalErrorBoundary>
    )
}
