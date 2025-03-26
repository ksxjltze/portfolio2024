import { NextConfig } from "next";

const nextConfig: NextConfig = {
    transpilePackages: ["next-mdx-remote"],
    allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],
}

export default nextConfig;