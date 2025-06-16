import React from "react";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "Ten commandments of Mathematics",
    description: "Dr Larson's Ten Commandments for learning maths",
    slug: "/maths-jokes",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "jokes", "Dr Larson"],
    images: [],
});

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/maths-jokes`,
        url: `${baseUrl}/maths-jokes`,
        name: "Ten commandments of Mathematics",
        description: "Dr Larson's Ten Commandments for learning maths",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/maths-jokes#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/maths-jokes#breadcrumb`,
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
                name: "Ten commandments of Mathematics",
                item: `${baseUrl}/maths-jokes`,
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

const commandments = [
    "Thou shalt read Thy problem.",
    "Whatsoever Thou doest to one side of the equation, Do Thee also to the other.",
    "Thou shalt use Thy “Common Sense”, else Thou wilt have flagpoles 9’000 feet in height, yea … even fathers younger than sons.",
    "Thou shalt ignore the teachings of false prophets to do work in Thy head.",
    "When Thou knowest not, Thou shalt look it up, and if Thy search still elude Thee, then Thou shalt ask the all-knowing teacher.",
    "Thou shalt master each step before putting Thy heavy foot down on the next.",
    "Thy correct answer does not prove that Thou hast worked Thy problem correctly. This argument convincest none, least of all, Thy teacher.",
    "Thou shalt first see that Thou hast copied Thy problem correctly before bearing false witness that the answer book lieth.",
    "Thou shalt look back even unto Thy youth and remember Thy arithmetic.",
    "Thou shalt learn, speak, write, and listen correctly in the language of mathematics, and verily A’s and B’s will follow Thee even unto graduation."
];

export default function MathsCommandments() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);
    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                <section className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                        The Ten Commandments of Mathematics
                    </h1>
                    <p className="italic text-gray-500 dark:text-gray-400">(With Apologies to the K.J.V.)</p>
                </section>

                <section className="space-y-4">
                    {commandments.map((line, idx) => (
                        <div
                            key={idx}
                            className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg shadow transition"
                        >
                            <p className="font-semibold">
                                {idx + 1}. {line}
                            </p>
                        </div>
                    ))}
                </section>

                {/* Teaching Aids Link */}
                <TeachingAidsBtn />
            </div>
        </>
    );
}
