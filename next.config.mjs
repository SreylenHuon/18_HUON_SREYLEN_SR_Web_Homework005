/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "s3-alpha-sig.figma.com",
      },
    ],

    // localPatterns: [
    //   {
    //     pathname: "/img/**",
    //   },
    // ],
  },
};

export default nextConfig;
