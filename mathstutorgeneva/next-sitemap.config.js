/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://mathstutorgeneva.vercel.app';

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/404', '/server-error'],
};
