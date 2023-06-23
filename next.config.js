/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        backendHost: '127.0.0.1:3001',
    },
    images: {
        domains: ['localhost', '127.0.0.1'],
    },
};

module.exports = nextConfig;
