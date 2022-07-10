/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        NEXT_PUBLIC_DUMMYAPI_APPID: process.env.NEXT_PUBLIC_DUMMYAPI_APPID,
    },
}

module.exports = nextConfig
