import React from "react";

import Image from "next/image";

// Custom Components
import ContactLink from "@/components/ContactLink";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";
import { createJsonLdGraph } from "@/lib/createJsonLdGraph";

import rawContactData from "@/data/contactInfo.json";

type ContactData = {
    email: string;
    telephone: string;
}

const contactData = rawContactData as ContactData;

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "Contact me",
    description:
        `Contact me Email Dr Larson on: ${contactData.email} | Mobile: ${contactData.telephone} | Teams: ${contactData.email}`,
    slug: "/contact-dr-larson",
    keywords: ["maths tutor", "Geneva", "Nyon", "IB", "IGCSE", "SAT", "ACT", "contact", "Dr. Larson"],
    images: [
        {
            path: "/images/contact/rational-real-200x200.png",
            width: 200,
            height: 200,
            alt: "Rational vs Real numbers",
        },
    ]
});

// function createJsonLdGraph(baseUrl: string) {
//     const webPageJsonLd = {
//         "@type": "WebPage",
//         "@id": `${baseUrl}/contact-dr-larson`,
//         url: `${baseUrl}/contact-dr-larson`,
//         name: metadata.title,
//         description: metadata.description,
//         inLanguage: "en-US",
//         dateModified: new Date().toISOString().split("T")[0],
//         isPartOf: {
//             "@type": "WebSite",
//             url: baseUrl,
//             name: "mathstutorgeneva.ch",
//         },
//         breadcrumb: {
//             "@id": `${baseUrl}/contact-dr-larson#breadcrumb`,
//         },
//         primaryImageOfPage: {
//             "@type": "ImageObject",
//             url: `${baseUrl}/images/contact/rational-real-200x200.png`,
//             width: 200,
//             height: 200,
//         },
//     };

//     const breadcrumbJsonLd = {
//         "@type": "BreadcrumbList",
//         "@id": `${baseUrl}/contact-dr-larson#breadcrumb`,
//         itemListElement: [
//             {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: `${baseUrl}/`,
//             },
//             {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "Contact me",
//                 item: `${baseUrl}/contact-dr-larson`,
//             },
//         ],
//     };
//     const personJsonLd = createPersonJsonLd(baseUrl);
//     return {
//         "@context": "https://schema.org",
//         "@graph": [webPageJsonLd, breadcrumbJsonLd, personJsonLd],
//     };
// }

export default function Contact() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);
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
                        To inquire about tutoring, please contact me via email, phone, or Teams.
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
                <section className="text-center space-y-2 mx-auto flex flex-col w-fit items-baseline" >
                    <p>
                        📧{" "}
                        <ContactLink text={contactData.email} href={`mailto:${encodeURIComponent(contactData.email)}`}/>
                    </p>
                    <p>
                        📞{" "}
                        <ContactLink text={contactData.telephone} href={`mailto:${encodeURIComponent(contactData.telephone.replaceAll(' ', ''))}`}/>
                    </p>
                    <p>
                        💬{" "}
                        <ContactLink text={"Teams"} href={`https://teams.microsoft.com/l/call/0/0?users=${encodeURIComponent(contactData.email)}`} />
                    </p>
                </section>

                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                    I typically respond within 24 hours.
                </p>
            </div>
        </>
    );
}
