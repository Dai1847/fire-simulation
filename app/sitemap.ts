import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://fire-simulation-sigma.vercel.app";

    return [
        {
            url: `${baseUrl}/`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/fire`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/life`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/high-dividend-allocation`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/risk-check`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/dividend-target`,
            lastModified: new Date(),
        },
        // ブログ記事
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/fire`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/high-dividend`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/life`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/blog/nisa`,
            lastModified: new Date(),
        },
    ];
}