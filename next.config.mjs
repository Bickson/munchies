/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'work-test-web-2024-eze6j4scpq-lz.a.run.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
