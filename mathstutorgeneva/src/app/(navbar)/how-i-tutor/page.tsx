import React from "react";

import type { Metadata } from "next";
import Link from "next/link";
import { getBaseUrl } from "@/lib/getBaseUrl";

export const metadata: Metadata = {
    title: "How I tutor",
    description:
        "How I tutor: Typically, I set the student a problem on the topic. Typically the student cannot do the problem ... so, I set an easier problem.",
    keywords: ["math tutor", "Geneva", "Nyon", "Dr Larson", "how I tutor"],
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/how-i-tutor",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://mathstutorgeneva.ch/how-i-tutor",
        title: "How I tutor",
        description:
            "How I tutor: Typically, I set the student a problem on the topic. Typically the student cannot do the problem ... so, I set an easier problem.",
        siteName: "mathstutorgeneva.ch",
    },
    twitter: {
        card: "summary",
        title: "How I tutor",
        description:
            "Dr. W. J. Larson explains how he approaches private math tutoring for students in Geneva and Nyon.",
    },
};

// ld+json
function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/how-i-tutor`,
        url: `${baseUrl}/how-i-tutor`,
        name: "How I tutor",
        description: "How I tutor: Typically, I set the student a problem on the topic. Typically the student cannot do the problem ... so, I set an easier problem.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/how-i-tutor#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/how-i-tutor#breadcrumb`,
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
                name: "How I tutor",
                item: `${baseUrl}/how-i-tutor`,
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


export default function HowITutor() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
                }}
            />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                {/* Title */}
                <section className="space-y-2">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                        How I Tutor
                    </h1>
                    <div className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-800 dark:text-green-100 rounded p-4 text-center text-sm md:text-base font-medium">
                        “I hear and I forget. I see and I remember. I do and I understand.”
                    </div>
                    <p className="italic text-sm md:text-base text-right">
                        <span className="font-semibold">— Xunzi, 3rd century BC Chinese philosopher</span>
                    </p>
                </section>

                {/* Structure Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        How My Lessons are Structured
                    </h2>
                    <p>
                        Once we have identified topics that the student thinks that s/he needs help with, I go through a cycle.
                    </p>
                    <p>
                        I set the student a problem on the topic. Typically the student cannot do the problem. That’s why s/he came to me in the first place, after all. So, I set an easier problem on the same topic.
                    </p>
                    <p>
                        By this time I understand how well or poorly s/he understands this topic. If necessary, I give a mini-lesson. Then we try again. I may create and work on examples until s/he understands and can do the original problem. Then we do another similar problem to be sure.
                    </p>
                    <p>
                        It’s not uncommon that in this process I discover that the student has learned and been using for years false methods that s/he must unlearn. (See my list of math errors on this site.) The student has been building on sand. So we stop what we were doing, put in the needed strong foundations for progress and then return to the current topic.
                    </p>
                </section>

                {/* Schedule Section */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        Lesson Schedule
                    </h2>
                    <p>
                        Normally I suggest one two-hour per week. Two hours is enough time to get a lot done. I find that one-on-one, I have no trouble keeping students engaged and productive for the whole two hours.
                    </p>
                    <p>
                        I try to schedule as many lessons as possible on Saturdays, but am also available after school. If the student needs more help or has conflicting commitments on Saturdays, I can be flexible.
                    </p>
                    <div className="bg-red-100 dark:bg-orange-900 border border-red-400 dark:border-orange-500 text-red-800 dark:text-orange-200 rounded p-4 text-center text-sm md:text-base font-medium">
                        “It ain’t what you don’t know that gets you into trouble. It’s what you know for sure… that just ain’t so.”
                    </div>
                    <p className="italic text-sm md:text-base text-right">
                        <span className="font-semibold">— Mark Twain</span>
                    </p>
                </section>

                {/* Optional reference */}
                <p className="text-sm italic mt-8">
                    See also:{" "}
                    <Link
                        href="/sat-math"
                        className="text-blue-600 dark:text-blue-400 underline"
                    >
                        SAT math
                    </Link>
                </p>
            </div>
        </>
    );
}
