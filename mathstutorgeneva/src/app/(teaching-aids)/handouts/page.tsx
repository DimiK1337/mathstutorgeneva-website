import React from "react";
import { getBaseUrl } from "@/lib/getBaseUrl";
import { FaRegFilePdf } from "react-icons/fa"; // https://react-icons.github.io/react-icons/icons?name=fa

// Custom handouts data
import handouts from "@/data/generalHandouts.json";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "General handouts",
    description:
        "General Handouts – Printable PDFs for exponents, functions, transformations, asymptotes, quadratics and more. Tailored support from Dr W. J. Larson.",
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/handouts",
    },
    openGraph: {
        title: "General handouts",
        description:
            "General Handouts – Printable PDFs for exponents, functions, transformations, asymptotes, quadratics and more. Tailored support from Dr W. J. Larson.",
        url: "/handouts",
        siteName: "mathstutorgeneva.ch",
        type: "article",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "General handouts",
        description:
            "General Handouts – Printable PDFs for exponents, functions, transformations, asymptotes, quadratics and more. Tailored support from Dr W. J. Larson.",
    }
};

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/handouts`,
        url: `${baseUrl}/handouts`,
        name: "General handouts",
        description:
            "General Handouts – Printable PDFs for exponents, functions, transformations, asymptotes, quadratics and more. Tailored support from Dr W. J. Larson.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/handouts#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/handouts#breadcrumb`,
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
                item: `${baseUrl}/handouts`,
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


export default function GeneralHandouts() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">General Handouts</h1>
                <p>
                    Each of these handouts is in easily printable PDF format, in black and white. I have many
                    more, depending upon your needs.
                </p>

                {Object.entries(handouts).map(([section, docs]) => (
                    <div key={section} className="space-y-2 mb-8">
                        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mt-8">
                            {section}
                        </h2>

                        <div className="space-y-1">
                            {docs.map(({ title, file }) => (
                                <div key={title} className="flex items-center space-x-2">
                                    <FaRegFilePdf className="text-red-600" />
                                    {file ? (
                                        <a
                                            href={`/pdfs/handouts/general/${file}`}
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
                        </div>
                    </div>
                ))}

                {/* Teaching Aids Link */}
                <TeachingAidsBtn />
            </div>
        </>
    );
}
