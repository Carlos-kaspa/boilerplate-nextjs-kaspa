import useSWR from 'swr'
import { DummyAPIFetcher } from './DummyApiFetcher'

export default function useDummyAPI(path: string, shouldFetch: boolean) {
    const baseUrl = process.env.NEXT_PUBLIC_DUMMYAPI_URL
    const { data, mutate, error } = useSWR(
        () => (shouldFetch ? `${baseUrl}${path}` : null),
        DummyAPIFetcher,
        { suspense: true },
    )

    const loading = !data && !error

    return {
        loading,
        response: data,
        error,
        mutate,
    }
}
