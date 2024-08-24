/** @type {import('next').NextConfig} */
const nextConfig = {
  // Other configurations
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value: "your-cookie-settings-here; Secure; SameSite=Strict",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
  