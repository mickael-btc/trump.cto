const nextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**", // Allows all domains
            },
        ],
    },
};

export default nextConfig;
