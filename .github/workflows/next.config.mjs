/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // generates static files into /out
  trailingSlash: true,       // makes /route/ => /route/index.html (better for static hosting)
  images: { unoptimized: true }, // keep this for export
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}
export default nextConfig
