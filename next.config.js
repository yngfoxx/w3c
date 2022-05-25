/** @type {import('next').NextConfig} */

module.exports = {
    reactStrictMode: true,
    serverRuntimeConfig: {
        SITE_URL: process.env.SITE_URL,
    }
}
