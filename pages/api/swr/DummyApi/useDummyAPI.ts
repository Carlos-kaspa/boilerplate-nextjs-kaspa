import useSWR from 'swr'
import { DummyAPIFetcher } from './DummyApiFetcher'

export default function useDummyAPI(path: string) {
    const { data, mutate, error } = useSWR(
        'https://dummyapi.io/data/v1/' + path,
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
