import React from "react";
import Image from "next/image";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "SAT Math Tutor – Dr W. J. Larson",
    description:
        "Expert SAT math preparation in Geneva and Nyon by Dr W. J. Larson – covering algebra, functions, statistics and more.",
    slug: "/sat-math",
    keywords: [
        "SAT math tutor",
        "Geneva",
        "Nyon",
        "private tutor",
        "Dr W. J. Larson",
        "SAT preparation",
    ],
    images: []
});

// ld+json

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/sat-math`,
        url: `${baseUrl}/sat-math`,
        name: "SAT math tutor, Dr W. J. Larson in Nyon Switzerland",
        description:
            "The redesigned SAT goes into several advanced topics: non-linear equations, statistics, trigonometric functions, the remainder theorem and complex numbers.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/SAT-math/sat-subject-tests.png`,
            width: 200,
            height: 200,
        },
        breadcrumb: {
            "@id": `${baseUrl}/sat-math#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/sat-math#breadcrumb`,
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
                name: "SAT Math",
                item: `${baseUrl}/sat-math`,
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

const books = [
    {
        src: "sat-subject-tests.png",
        caption: "SAT Subject Tests",
        order_url: "https://store.collegeboard.org/sto/productdetail.do?Itemkey=112199&category=325&categoryName=SAT%AE&secondCategory=&secondCatName=&thirdLevelCategory=&thirdLevelCatName=%20rel=noopener%20noreferrer"
    },
    {
        src: "mtg-sat-math-1-study-guide-200x200.png",
        caption: "SAT Math Level 1",
        order_url: "https://store.collegeboard.org/sto/productdetail.do?Itemkey=109304&category=325&categoryName=SAT%AE&secondCategory=&secondCatName=&thirdLevelCategory=&thirdLevelCatName=The%20Official%20SAT%20Subject%20Test%20Study%20Guide%20in%20Math%20Level%201"
    },
    {
        src: "mtg-sat-math-2-study-guide-200x200.png",
        caption: "SAT Math Level 2",
        order_url: "https://store.collegeboard.org/sto/productdetail.do?Itemkey=109328&category=325&categoryName=SAT%AE&secondCategory=&secondCatName=&thirdLevelCategory=&thirdLevelCatName=The%20Official%20SAT%20Subject%20Test%20Study%20Guide%20in%20Math%20Level%202"
    },
];

export default function SATMath() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />

            <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-gray-800 dark:text-gray-100">
                {/* Header */}
                <section className="space-y-2">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                        SAT Math Preparation
                    </h1>
                    <p>
                        I have helped students succeed on the SAT since the 1990s. I know the structure of the math test well and focus on:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>Teaching students what content they need to know</li>
                        <li>Reviewing forgotten algebra and geometry</li>
                        <li>Helping them spot traps and use time wisely</li>
                        <li>Giving them plenty of practice with feedback</li>
                    </ul>
                </section>

                {/* SAT Math Structure */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        The SAT Math Section
                    </h2>
                    <p>The math section is composed of two parts:</p>
                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>No calculator:</strong> 25 minutes, 20 questions
                        </li>
                        <li>
                            <strong>Calculator allowed:</strong> 55 minutes, 38 questions
                        </li>
                    </ul>
                    <p>
                        The questions are a mix of multiple choice and &ldquo;grid-ins&rdquo;, where students write their answer in boxes. Scoring is based on correct answers only — no penalty for guessing.
                    </p>
                </section>

                {/* SAT Math Topics */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        Content Areas
                    </h2>
                    <p>The SAT Math section focuses on:</p>
                    <ul className="list-disc list-inside space-y-1">
                        <li>Heart of Algebra (linear equations, systems)</li>
                        <li>Problem Solving & Data Analysis (percent, ratio, charts)</li>
                        <li>Passport to Advanced Math (quadratics, functions)</li>
                        <li>Additional Topics (geometry, complex numbers, trigonometry)</li>
                    </ul>
                </section>

                {/* Quote */}
                <section className="text-center">
                    <blockquote className="italic text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                        “It’s not that I’m so smart, it’s just that I stay with problems longer.”
                        <br />
                        <span className="block font-semibold mt-2">— Albert Einstein</span>
                    </blockquote>
                </section>

                {/* SAT Books */}
                <section>
                    <h2 className="text-2xl font-semibold mb-6 text-blue-700 dark:text-blue-400 text-center">
                        SAT Math Books I Use
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center items-baseline">
                        {books.map(({ src, caption, order_url }) => (
                            <div key={src} className="text-center space-y-2">
                                <a href={order_url} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={`/images/SAT-math/${src}`}
                                        alt={caption}
                                        width={180}
                                        height={180}
                                        className="rounded shadow-md w-full max-w-[180px] mx-auto"
                                    />
                                </a>
                                <p className="text-sm text-gray-700 dark:text-gray-200">{caption}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}
