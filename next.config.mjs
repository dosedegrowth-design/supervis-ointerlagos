/** @type {import('next').NextConfig} */
const nextConfig = {
  // HTML sempre revalida no navegador — atualizações aparecem na hora,
  // sem precisar limpar cache. Os assets com hash (JS/CSS) seguem cacheados.
  async headers() {
    return [
      {
        source: "/",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
