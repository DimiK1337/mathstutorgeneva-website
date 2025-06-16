import React from "react";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "TI-84 calculator docs",
    description:
        "TI-84 Calculator Guides. Learn which calculators are allowed in the IB exam, how to update your TI-84 software, and download printable guides.",
    slug: "/ti-84-calculator-docs",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "TI-84", "Dr Larson"],
    images: [],
});

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/ti-84-calculator-docs`,
        url: `${baseUrl}/ti-84-calculator-docs`,
        name: "TI-84 calculator docs",
        description:
            "TI-84 Calculator Guides. Learn which calculators are allowed in the IB exam, how to update your TI-84 software, and download printable guides.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/ti-84-calculator-docs#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/ti-84-calculator-docs#breadcrumb`,
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
                name: "TI-84 calculator docs",
                item: `${baseUrl}/ti-84-calculator-docs`,
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

const pdfs = [
    {
        title: "TI-84 Skills for the IB Maths HL",
        file: "TI-84 Skills for the IB Maths HL.pdf",
        image: "ti-84-skills-hl.png"
    },
    {
        title: "TI-84 Skills for the IB Maths SL",
        file: "TI-84 Skills for the IB Maths SL.pdf",
        image: "ti-84-skills-sl.png"
    },
];

export default function TI84CalculatorDocs() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
            <div className="w-full max-w-screen-xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">TI-84 Calculator Guides</h1>

                {/* External links */}
                <div className="space-y-2">
                    <p>
                        Read this to find out which calculators you can take into the IB exam:{" "}
                        <a
                            href="https://www.ibo.org/contentassets/e3e2d5a7b79e48f7a47f8973e7873a10/use-of-calculators-in-examinations-2019_en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-300 underline"
                        >
                            IB Calculators Allowed
                        </a>
                    </p>
                    <p>
                        How to update software on the TI-84:{" "}
                        <a
                            href="/pdfs/ti-84-calculator-docs/updating-ti-84-calculators.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-300 underline"
                        >
                            Updating TI-84
                        </a>
                    </p>
                </div>

                {/* PDF Viewer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 xl:gap-20 place-items-center">
                    {pdfs.map(({ title, file }) => (
                        <div
                            key={file}
                            className="text-center space-y-4 p-4 rounded-lg border border-gray-300 shadow-md w-full sm:w-96 md:w-[28rem] lg:w-[32rem]"
                        >

                            <iframe
                                src={`/pdfs/ti-84-calculator-docs/${file}#page=1`}
                                width="100%"
                                height="350"
                                className="rounded"
                                title={title}
                            />
                            <p className="text-base font-medium">{title}</p>
                            <a
                                href={`/pdfs/ti-84-calculator-docs/${file}`}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Download PDF
                            </a>
                        </div>
                    ))}
                </div>

                {/* Teaching Aids Link */}
                <TeachingAidsBtn />
            </div>
        </>
    );
}
