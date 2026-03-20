/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://rosalesdesarrollo.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    const overrides = {
      "/": { priority: 1.0, changefreq: "daily" },
      "/propiedades": { priority: 0.9, changefreq: "weekly" },
      "/nosotros": { priority: 0.6, changefreq: "monthly" },
      "/contacto": { priority: 0.6, changefreq: "monthly" },
    };

    const match = overrides[path];

    return {
      loc: path,
      changefreq: match?.changefreq || config.changefreq,
      priority: match?.priority || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
};
