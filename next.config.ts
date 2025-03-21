import { NextConfig } from "next";

import nextra from "nextra";

const withNextra = nextra({
  latex: true,
  defaultShowCopyCode: true,
});

const nextConfig: NextConfig = withNextra({
  reactStrictMode: true,
});

export default nextConfig;
