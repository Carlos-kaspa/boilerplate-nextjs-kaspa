export const DummyAPIFetcher = (url: string) => {
    const headers = new Headers()
    const appId = process.env.NEXT_PUBLIC_DUMMYAPI_APPID || ''
    headers.append('app-id', appId)
    return fetch(url, { headers }).then((res) => res.json())
}
