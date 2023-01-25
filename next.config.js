/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['tsx', 'ts'],
    env: {
        NEXT_PUBLIC_DUMMYAPI_URL: process.env.NEXT_PUBLIC_DUMMYAPI_URL,
    },
    images: {
        remotePatterns: [{ hostname: 'i.dummyjson.com' }],
    },
    output: 'standalone',
}

module.exports = nextConfig
