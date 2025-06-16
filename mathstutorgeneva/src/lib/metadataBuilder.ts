// lib/metadataBuilder.ts

import type { Metadata } from "next";

type Image = {
    path: string;
    width: number;
    height: number;
    alt: string;
};

type MetadataInput = {
    title: string;
    description: string;
    slug: string;
    keywords?: string[];
    images?: Image[];
    ogType?: "website" | "article";
};

export function buildMetadata({
    title,
    description,
    slug,
    keywords = [],
    images = [],
    ogType = "article",
}: MetadataInput): Metadata {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mathstutorgeneva.vercel.app";
    const metadataBase = new URL(baseUrl);
    const pageUrl = `${baseUrl}${slug.startsWith("/") ? slug : `/${slug}`}`;
    const siteName = metadataBase.hostname;

    return {
        metadataBase,
        title,
        description,
        keywords,
        alternates: {
            canonical: slug,
        },
        openGraph: {
            title,
            description,
            url: pageUrl,
            siteName,
            type: ogType,
            locale: "en_US",
            images: images.map((img) => ({
                url: `${baseUrl}${img.path}`,
                width: img.width,
                height: img.height,
                alt: img.alt,
            })),
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: images.map((img) => `${baseUrl}${img.path}`),
        },
        robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
}
