import React from "react";

import { getBaseUrl } from "@/lib/getBaseUrl";

import { FaRegFilePdf } from "react-icons/fa";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "IB SL questions",
    description:
        "IB SL Questions – SL Vectors, Trig Identities, Sequences, and Normal Distribution (2008–2014), with full mark schemes.",
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/handouts/ib-sl-questions",
    },
    openGraph: {
        title: "IB SL questions",
        description:
            "IB SL Questions – SL Vectors, Trig Identities, Sequences, and Normal Distribution (2008–2014), with full mark schemes.",
        url: "/handouts/ib-sl-questions",
        siteName: "mathstutorgeneva.ch",
        type: "article",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "IB SL questions",
        description:
            "SL Vectors, Trig Identities, Sequences, and Normal Distribution from 2008–2014. All with mark schemes.",
    },
};

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/handouts/ib-sl-questions`,
        url: `${baseUrl}/handouts/ib-sl-questions`,
        name: "IB SL questions",
        description:
            "IB SL Questions – SL Vectors, Trig Identities, Sequences, and Normal Distribution (2008–2014), with full mark schemes.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/handouts/ib-sl-questions#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/handouts/ib-sl-questions#breadcrumb`,
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
                name: "IB SL questions",
                item: `${baseUrl}/handouts/ib-sl-questions`,
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
        title: "SL Vectors May 2008–2014 with MS",
        file: "SL-Vectors.pdf",
    },
    {
        title: "SL Trig Identities 2008–2014 with MS",
        file: "SL-Trig.pdf",
    },
    {
        title: "SL SEQUENCES 2008–2014 with MS",
        file: "SL-Sequences.pdf",
    },
    {
        title: "SL Normal Distribution May 2008–2014 with MS",
        file: "SL-Normal.pdf",
    },
];

export default function IBSLQuestions() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />

            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-800 dark:text-gray-100">
                <h1 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">IB SL Questions</h1>

                <ul className="space-y-3">

                    {pdfs.map(({ title, file }) => (
                        <div key={title} className="flex items-center space-x-2">
                            <FaRegFilePdf className="text-red-600" />
                            {file ? (
                                <a
                                    href={`/pdfs/handouts/sl/${file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900"
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
