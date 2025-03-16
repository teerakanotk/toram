// import nextra from "nextra";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   // You can include other Next.js config options here
// };

// const withNextraConfig = nextra({
//   // ... Other Nextra config options
// });

// export default withNextraConfig({
//   ...nextConfig,
//   // You can include additional Next.js config options here as well
// });

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
