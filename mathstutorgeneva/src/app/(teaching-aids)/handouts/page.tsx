import React from "react";
import Link from "next/link";

import { FaRegFilePdf } from "react-icons/fa"; // https://react-icons.github.io/react-icons/icons?name=fa

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";
import { createJsonLdGraph } from "@/lib/createJsonLdGraph";

// Custom handouts data
import handouts from "@/data/generalHandouts.json";

// Components
import JsonLDScript from "@/components/JsonLDScript";
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
    title: "General handouts",
    description:
        "General Handouts – Printable PDFs for exponents, functions, transformations, asymptotes, quadratics and more. Tailored support from Dr. William J. Larson.",
    slug: "/handouts",
    keywords: [
        "Dr. William J. Larson",
        "math tutor",
        "Geneva",
        "Nyon",
        "IB",
        "SAT",
        "handouts",
        "Dr. Larson",
    ],
    images: [],
});


export default function GeneralHandouts() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);
    return (
        <>
            <JsonLDScript data={jsonLd} />
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
                                        <Link
                                            href={`/pdfs/handouts/general/${file}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 hover:underline text-sm"
                                        >
                                            {title}
                                        </Link>
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
