// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     dangerouslyAllowSVG: true,
//     remotePatterns: [
//       { protocol: "https", hostname: "**" },
//     ],
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true, // keep if you need SVGs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",        // optional
        pathname: "/**", // allow all images under this domain
      },
    ],
  },
};

export default nextConfig;
