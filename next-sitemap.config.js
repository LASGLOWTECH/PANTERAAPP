/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://pantherarestlounge.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,

 
  exclude: ["/admin", "/admin/*"],

  // ✔ Add proper robots.txt rules to prevent search engines from crawling admin
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/admin/*"],
      },
    ],
  },
};
