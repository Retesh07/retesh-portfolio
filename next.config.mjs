/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: false,
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
