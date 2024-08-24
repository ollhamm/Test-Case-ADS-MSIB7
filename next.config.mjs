/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Set-Cookie",
            value:
              "next-auth.session-token=; Path=/; Secure; HttpOnly; SameSite=Strict",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
  