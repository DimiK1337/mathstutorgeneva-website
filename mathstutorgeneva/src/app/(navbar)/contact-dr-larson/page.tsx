import React from "react";

import Image from "next/image";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

// TODO: Replace Skype with Teams

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "Contact me",
    description:
        "Contact me Email Dr Larson on: DrL@mathstutorgeneva.ch Mobile: +41 79 373 4686 Skype: live:bill_larson_1",
    slug: "/contact-dr-larson",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "contact", "Dr Larson"],
    images: [
        {
            path: "/images/contact/rational-real-200x200.png",
            width: 200,
            height: 200,
            alt: "Rational vs Real numbers",
        },
    ]
});
function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/contact`,
        url: `${baseUrl}/contact`,
        name: "Contact me",
        description:
            "Contact me Email Dr Larson on: DrL@mathstutorgeneva.ch Mobile: +41 79 373 4686 Skype: live:bill_larson_1",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/contact#breadcrumb`,
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/contact/rational-real-200x200.png`,
            width: 200,
            height: 200,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/contact#breadcrumb`,
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
                name: "Contact me",
                item: `${baseUrl}/contact`,
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


export default function Contact() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <div className="max-w-2xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                {/* Header */}
                <section className="text-center space-y-4">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                        Contact Dr. W. J. Larson
                    </h1>
                    <p>
                        To inquire about tutoring, please contact me via email, phone, or Skype.
                    </p>
                </section>

                {/* Contact Image */}
                <section className="text-center">
                    <Image
                        src="/images/contact/rational-real-200x200.png"
                        alt="Rational vs Real numbers"
                        width={320}
                        height={320}
                        className="mx-auto mt-4 rounded shadow-md transition-transform hover:scale-105"
                    />

                </section>

                {/* Contact Details */}
                <section className="text-center space-y-2">
                    <p>
                        📧{" "}
                        <a
                            href="mailto:DrL@MathsTutorGeneva.ch"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            DrL@MathsTutorGeneva.ch
                        </a>
                    </p>
                    <p>
                        📞{" "}
                        <a
                            href="tel:+41793734686"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            +41 79 373 4686
                        </a>
                    </p>
                    <p>
                        💬{" "}
                        <a
                            href="skype:live:bill_larson_1?call"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Skype: live:bill_larson_1
                        </a>
                    </p>
                </section>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    I typically respond within 24 hours.
                </p>
            </div>
        </>
    );
}
