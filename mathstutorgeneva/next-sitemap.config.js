/** @type {import('next-sitemap').IConfig} */
module.exports = {
    sourceDir: './dist', // Path to your public directory
    siteUrl: 'https://mathstutorgeneva.ch',
    generateRobotsTxt: true, // 👈 this will also generate robots.txt
    changefreq: 'monthly',
    priority: 0.7,
    sitemapSize: 7000,
    exclude: ['/404', '/server-error'], // exclude any dynamic/internal routes if needed
};
