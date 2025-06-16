import React from "react";
import { FaRegFilePdf } from "react-icons/fa";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "IB HL questions",
    description:
        "IB HL Questions – HL Sequences, Trig Identities, Induction, and other past paper topics (2008–2014), with full mark schemes.",
    slug: "/handouts/ib-hl-questions",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "handouts", "HL", "Dr Larson"],
    images: [],
});

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/handouts/ib-hl-questions`,
        url: `${baseUrl}/handouts/ib-hl-questions`,
        name: "IB HL questions",
        description:
            "IB HL Questions – HL Sequences, Trig Identities, Induction, and other past paper topics (2008–2014), with full mark schemes.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/handouts/ib-hl-questions#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/handouts/ib-hl-questions#breadcrumb`,
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
                name: "General handouts",
                item: `${baseUrl}/handouts/`,
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "IB HL questions",
                item: `${baseUrl}/handouts/ib-hl-questions`,
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
        title: "COUNTING PRINCIPLES 2008–2014 HL WITH MS",
        file: "Counting.pdf"
    },
    {
        title: "MATHEMATICAL INDUCTION 2008–14 WITH MS",
        file: "Induction.pdf"
    },
    {
        title: "INTEGRATION BY SUBSTITUTION AND PARTS 2008–2014 WITH MS",
        file: "Integration.pdf"
    },
    {
        title: "LOGS & EXPONENTS 2008–14 WITH MS",
        file: null  // <-- marks it as missing
    },
    {
        title: "RELATED RATES 2008–2014 WITH MS",
        file: "Related-Rates.pdf"
    },
    {
        title: "SEQUENCES 2008–2014 WITH MS",
        file: "Sequences.pdf"
    },
    {
        title: "TRIG FUNCTIONS, EQUATIONS & IDENTITIES MAY 2008–2014 WITH MS",
        file: "Trig-Functions.pdf"
    },
];

export default function IBHLQuestions() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-800 dark:text-gray-100">
                <h1 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">IB HL Questions</h1>

                <ul className="space-y-3">
                    {pdfs.map(({ title, file }) => (
                        <div key={title} className="flex items-center space-x-2">
                            <FaRegFilePdf className="text-red-600" />
                            {file ? (
                                <a
                                    href={`/pdfs/handouts/hl/${file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 hover:underline text-sm"
                                >
                                    {title}
                                </a>
                            ) : (
                                <span className="text-gray-400 text-sm italic">
                                    {title} (coming soon)
                                </span>
                            )}
                        </div>
                    ))}

                </ul>

                {/* Teaching Aids Link */}
                <TeachingAidsBtn />
            </div>
        </>
    );
}
