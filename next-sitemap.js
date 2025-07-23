const siteUrl = "https://fastholidays.org";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  priority: 1,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", disallow: "/secret" },
      { userAgent: "*", allow: "/" },
    ],
    additionalSitemaps: [
      `${siteUrl}/sitemap.xml`,
      // `${siteUrl}/server-sitemap.xml`,
    ],
  },
  exclude: ["/secret", "/server-sitemap.xml", "/getDocs"],
};
