import React from "react";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";

import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
    title: "SAT Math Tutor – Dr W. J. Larson",
    description:
        "Expert SAT Math preparation in Geneva and Nyon by Dr W. J. Larson – covering algebra, advanced math, data analysis, geometry and trigonometry.",
    slug: "/sat-math",
    keywords: [
        "SAT math tutor",
        "Geneva",
        "Nyon",
        "private tutor",
        "Dr W. J. Larson",
        "SAT preparation",
        "digital SAT",
        "Bluebook",
    ],
    images: [],
});

// ld+json

function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/sat-math`,
        url: `${baseUrl}/sat-math`,
        name: "SAT Math Tutor – Dr. W. J. Larson in Nyon, Switzerland",
        description:
            "SAT Math preparation covering algebra, advanced math, problem-solving and data analysis, geometry and trigonometry.",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        // TODO: Find image to use (perhaps just Dr. Larson)
        primaryImageOfPage: {
            "@type": "ImageObject",
            url: "",
            width: "",
            height: "",
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

// Should probably be moved to data folder
const satTopics = [
    {
        title: "Algebra",
        topics: [
            "Linear equations in 1 variable",
            "Linear equations in 2 variables",
            "Linear functions",
            "Systems of 2 linear equations in 2 variables",
            "Linear inequalities in 1 or 2 variables",
        ],
    },
    {
        title: "Advanced Math",
        topics: [
            "Equivalent expressions",
            "Nonlinear equations in 1 variable",
            "Systems of equations in 2 variables",
            "Nonlinear functions",
        ],
    },
    {
        title: "Problem-Solving and Data Analysis",
        topics: [
            "Ratios, rates, proportional relationships, and units",
            "Percentages",
            "One-variable data: distributions and measures of center and spread",
            "Two-variable data: models and scatterplots",
            "Probability and conditional probability",
            "Inference from sample statistics and margin of error",
            "Evaluating statistical claims: observational studies and experiments",
        ],
    },
    {
        title: "Geometry and Trigonometry",
        topics: [
            "Area and volume formulas",
            "Lines, angles, and triangles",
            "Right triangles and trigonometry",
            "Circles",
        ],
    },
];

const bluebookUrl = "https://bluebook.app.collegeboard.org/";

export default function SATMath() {
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

            <div className="max-w-4xl mx-auto px-6 py-12 space-y-12 text-gray-800 dark:text-gray-100">
                {/* Header */}
                <section className="space-y-2">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                        SAT Math Preparation
                    </h1>

                    <p>
                        I have helped students prepare for the SAT since the
                        1990s. My tutoring focuses on understanding the
                        mathematics, identifying weak areas, developing
                        efficient problem-solving methods, and practising under
                        realistic SAT conditions.
                    </p>

                    <ul className="list-disc list-inside space-y-2 mt-2">
                        <li>
                            Teaching students the mathematical content they need
                            for the SAT
                        </li>
                        <li>
                            Reviewing algebra, geometry, statistics and other
                            topics that may have been forgotten
                        </li>
                        <li>
                            Developing efficient approaches to unfamiliar
                            problems
                        </li>
                        <li>
                            Giving students extensive practice with feedback
                        </li>
                    </ul>
                </section>

                {/* SAT Math Structure */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        The Digital SAT Math Section
                    </h2>

                    <p>
                        The SAT Math section is digital and adaptive. It lasts
                        70 minutes and contains 44 questions divided into two
                        modules.
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            <strong>Module 1:</strong> 35 minutes
                        </li>
                        <li>
                            <strong>Module 2:</strong> 35 minutes
                        </li>
                    </ul>

                    <p>
                        Students answer both multiple-choice questions and
                        student-produced response questions. Performance on the
                        first module influences the difficulty of the second
                        module.
                    </p>

                    <p>
                        A calculator may be used throughout the Math section.
                        Bluebook also provides a built-in calculator.
                    </p>
                </section>

                {/* SAT Math Topics */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        SAT Math Topics
                    </h2>

                    <p>
                        The SAT Math section is organised into four main content
                        areas. Expand each section to see the topics covered.
                    </p>

                    <div className="space-y-3">
                        {satTopics.map(({ title, topics }) => (
                            <details
                                key={title}
                                className="group rounded-lg border border-gray-300 dark:border-slate-700 p-4"
                            >
                                <summary className="cursor-pointer font-semibold text-lg text-blue-700 dark:text-blue-400">
                                    {title}
                                </summary>

                                <ul className="list-disc pl-6 mt-3 space-y-1">
                                    {topics.map((topic) => (
                                        <li key={topic}>{topic}</li>
                                    ))}
                                </ul>
                            </details>
                        ))}
                    </div>
                </section>

                {/* Bluebook */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        Practice with Bluebook
                    </h2>

                    <p>
                        College Board provides full-length adaptive SAT practice
                        tests through its Bluebook application. These practice
                        tests allow students to become familiar with the same
                        digital format used for the SAT.
                    </p>

                    <p>
                        After completing a practice test, students can review
                        their scores, correct answers, and explanations to
                        identify areas that need further work.
                    </p>

                    <a
                        href={bluebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Download Bluebook
                    </a>
                </section>

                {/* How I Prepare Students */}
                <section className="space-y-4">
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">
                        How I Prepare Students
                    </h2>

                    <p>
                        SAT preparation is most effective when students
                        understand both the mathematics and the way the test
                        presents its questions.
                    </p>

                    <ul className="list-disc list-inside space-y-2">
                        <li>
                            Identify gaps in algebra, geometry and data analysis
                        </li>
                        <li>
                            Review concepts that have been forgotten or never
                            fully mastered
                        </li>
                        <li>
                            Work through difficult SAT-style questions step by
                            step
                        </li>
                        <li>
                            Develop efficient problem-solving strategies
                        </li>
                        <li>
                            Practise pacing and working under timed conditions
                        </li>
                        <li>
                            Review mistakes to identify recurring weaknesses
                        </li>
                    </ul>
                </section>
            </div>
        </>
    );
}