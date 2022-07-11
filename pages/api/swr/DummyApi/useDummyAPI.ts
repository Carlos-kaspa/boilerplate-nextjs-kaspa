import useSWR from 'swr'
import { DummyAPIFetcher } from './DummyApiFetcher'

export default function useDummyAPI(path: string) {
    const baseUrl = process.env.NEXT_PUBLIC_DUMMYAPI_URL
    const { data, mutate, error } = useSWR(
        baseUrl + path,
        DummyAPIFetcher
    )

    const loading = !data && !error
    const loggedOut = error && error.status === 403

    return {
        loading,
        loggedOut,
        response: data,
        mutate,
    }
}
