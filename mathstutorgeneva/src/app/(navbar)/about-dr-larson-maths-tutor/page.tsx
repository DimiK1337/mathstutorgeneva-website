import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { getBaseUrl } from "@/lib/getBaseUrl";

// TODO: Metadata
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "About Dr Larson, private math tutor in Geneva and Nyon.",
    description:
        "For many years Dr Larson taught maths for the IB Diploma Program, IGCSE and US high school syllabuses (grades 7 to 13) at the Ecole Internationale in Geneva.",
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/about-dr-larson-maths-tutor",
    },
    openGraph: {
        title: "About Dr Larson, private math tutor in Geneva and Nyon.",
        description:
            "For many years Dr Larson taught maths for the IB Diploma Program, IGCSE and US high school syllabuses (grades 7 to 13) at the Ecole Internationale in Geneva.",
        url: "https://mathstutorgeneva.ch/about/",
        siteName: "mathstutorgeneva.ch",
        type: "article",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
    },
};

// ld+json
function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/about-dr-larson-maths-tutor`,
        url: `${baseUrl}/about-dr-larson-maths-tutor`,
        name: "About Dr Larson, private math tutor in Geneva and Nyon.",
        description:
            "For many years Dr Larson taught maths for the IB Diploma Program, IGCSE and US high school syllabuses (grades 7 to 13) at the Ecole Internationale in Geneva.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: `${baseUrl}/images/about-dr-larson-maths-tutor/cropped-bill2-200x200.jpg`,
            width: 200,
            height: 200,
        },
        breadcrumb: {
            "@id": `${baseUrl}/how-to-get-to-the-larsons-in-nyon#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/how-to-get-to-the-larsons-in-nyon#breadcrumb`,
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
                name: "About Dr Larson",
                item: `${baseUrl}/about-dr-larson-maths-tutor`,
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


export default function AboutDrLarsonMathsTutor() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);
    const books = [
        {
            filename: 'Common-Core-IBID-Cover-308x400.jpg',
            caption: 'Common Core',
            url: 'https://www.ibid.com.au/maths/mathematics-common-core/',
        },
        {
            filename: 'Cover-Maths-PureSL-Front-305x400.jpg',
            caption: 'Analysis & Approaches SL',
            url: 'https://www.ibid.com.au/maths/mathematics-analysis-approaches-sl/',
        },
        {
            filename: 'Cover-Maths-AppSL-Front-304x400.jpg',
            caption: 'Applications & Interpretations SL',
            url: 'https://www.ibid.com.au/maths/mathematics-applications-and-interpretations-sl/',
        },
        {
            filename: 'AA-HL-IBID-Cover-305x400.jpg',
            caption: 'Analysis & Approaches HL',
            url: 'https://www.ibid.com.au/maths/mathematics-analysis-approaches-hl/',
        },
        {
            filename: 'Cover-Maths-AppHL-Front-304x400.jpg',
            caption: 'Applications & Interpretations HL',
            url: 'https://www.ibid.com.au/maths/mathematics-applications-and-interpretations-hl/',
        },
    ];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
                }}
            />
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-gray-800 dark:text-gray-100">
                {/* Header */}
                <section className="text-center space-y-4">
                    <Image
                        src="/images/about-dr-larson-maths-tutor/cropped-bill2-200x200.jpg"
                        alt="Dr. William Larson"
                        width={128}
                        height={128}
                        className="mx-auto rounded-full shadow-md object-cover transition-transform hover:scale-105"
                    />
                    <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
                        About Dr. W. J. Larson
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        Private Math Tutor in Geneva and Nyon
                    </p>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Education</h2>
                    <p>
                        William Larson holds a Bachelor&apos;s degree in Electrical Engineering from the University of Minnesota and a Ph.D. in Physics from the University of California at Riverside, where he conducted research at{' '}
                        <a href="https://home.cern/about" className="text-blue-700 underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">CERN</a>.
                    </p>
                </section>

                {/* Teaching Experience */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Teaching Experience</h2>
                    <p>
                        Over the past 25 years, Dr. Larson has taught mathematics, physics, astronomy, and SAT preparation at middle school, high school, and first-year university levels. His experience includes teaching the IB Diploma Program, IGCSE, and US high school syllabuses, primarily in the mathematics department at the{' '}
                        <a href="https://www.ecolint.ch/our-campuses/la-grande-boissiere" className="text-blue-700 underline dark:text-blue-400" target="_blank" rel="noopener noreferrer">
                            La Grande Boissière campus of the International School of Geneva
                        </a>.
                    </p>
                </section>

                {/* Achievements */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>IB Maths HL Assistant Examiner</li>
                        <li>Recipient of the Educator of Distinction award (2010) from the National Society of High School Scholars</li>
                    </ul>
                </section>

                {/* Publications */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Publications</h2>
                    <p>In 2019, Dr. Larson authored five mathematics textbooks:</p>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                        {books.map(({ filename, caption, url }) => (
                            <div key={filename} className="text-center">
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    <Image
                                        src={`/images/about-dr-larson-maths-tutor/textbooks/${filename}`}
                                        alt={caption}
                                        width={160}
                                        height={208} // approx. 308x400 scaled
                                        className="rounded shadow-md object-cover mb-2 transition-transform hover:scale-105"
                                    />
                                </a>
                                <p className="text-sm font-medium">{caption}</p>
                            </div>
                        ))}
                    </div>

                    <p className="mt-6">
                        He has also published an astronomy lab manual and a series of guides for the TI-84 calculator. Two of these guides are available under the{' '}
                        <Link href="/#teaching-aids" className="text-blue-700 underline dark:text-blue-400">Teaching Aids</Link> section.
                    </p>
                </section>

                {/* Personal Life */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Personal Life</h2>
                    <p>
                        Dr. Larson is an avid hiker, mountaineer, skier, and bicyclist. He resides in Nyon, Switzerland, with his two sons.
                    </p>
                </section>
            </div>
        </>
    );
}
