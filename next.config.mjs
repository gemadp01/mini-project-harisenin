/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nekos.best',
        port: '',
        pathname: '/api/v2/neko/**',
      },
    ],
  },
};

export default nextConfig;
