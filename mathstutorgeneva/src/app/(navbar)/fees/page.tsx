import React from "react";
import Image from "next/image";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "Tutoring fees",
    description: "Flexible fees for private maths tuition",
    slug: "/fees",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "fees", "Dr Larson"],
    images: [
        {
            path: "/images/fees/addition-768x231.png",
            width: 768,
            height: 231,
            alt: "Calvin and Hobbes math cartoon",
        },
    ],
});

// ld+json
function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/fees`,
        url: `${baseUrl}/fees`,
        name: "Tutoring fees",
        description: "Flexible fees for private maths tuition",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/fees#breadcrumb`,
        },

    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/fees#breadcrumb`,
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${baseUrl}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Tutoring fees",
                item: `${baseUrl}/fees`,
            },
        ],
    };

    const personJsonLd = {
        "@type": "Person",
        name: "Dr. W. J. Larson",
        jobTitle: "Private Math Tutor",
        url: `${baseUrl}/`,
        image: `${baseUrl}/images/about-dr-larson-maths-tutor/cropped-bill2-200x200.jpg`,
        worksFor: [
            {
                "@type": "Organization",
                name: "CERN",
                url: "https://home.cern/",
            },
            {
                "@type": "EducationalOrganization",
                name: "International School of Geneva – La Grande Boissière",
                url: "https://www.ecolint.ch/our-campuses/la-grande-boissiere",
            },
        ],
    };

    return {
        "@context": "https://schema.org",
        "@graph": [webPageJsonLd, breadcrumbJsonLd, personJsonLd],
    };
}


export default function Fees() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />

            {/* Page content */}
            <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                {/* Page Title */}
                <section className="space-y-2">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                        Tutoring Fees
                    </h1>
                    <p className="font-semibold">On January 1, 2023 my rates go up as follows:</p>
                    <p>
                        If the student comes to me or I tutor online, my fee is{" "}
                        <span className="font-medium">170 CHF per hour</span>, so{" "}
                        <span className="font-medium">340 CHF for a 2-hour lesson</span>.
                    </p>
                    <p>
                        If I go to the student, I charge{" "}
                        <span className="font-medium">250 CHF per hour</span>, so{" "}
                        <span className="font-medium">500 CHF for a 2-hour lesson</span>.
                    </p>
                </section>

                {/* Cartoon */}
                <section className="text-center">
                    <Image
                        src="/images/fees/addition-768x231.png"
                        alt="Calvin and Hobbes math cartoon"
                        width={768}
                        height={231}
                        className="mx-auto rounded shadow-md transition-transform hover:scale-105"
                    />
                </section>
            </div>
        </>
    );
}
