/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://66e4d003d2405277ed154fb7.mockapi.io/7dshub/api",
    IMG_URL: "https://7taizai.netmarble.jp",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "7taizai.netmarble.jp",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
