/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  distDir: './dist', // Changes the build output directory to `./dist/`.
  reactStrictMode: true,
};

export default nextConfig;
