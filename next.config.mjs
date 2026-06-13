/** @type {import('next').NextConfig} */
const nextConfig = {
  // HTML sempre revalida no navegador — atualizações aparecem na hora,
  // sem precisar limpar cache. Os assets com hash (JS/CSS) seguem cacheados.
  async headers() {
    const revalidate = [
      { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
    ];
    return [
      { source: "/", headers: revalidate },
      { source: "/:slug", headers: revalidate },
    ];
  },
};

export default nextConfig;
