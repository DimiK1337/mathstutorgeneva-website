//src/app/(teaching-aids)/handouts/ib-sl-questions/page.tsx

import React from "react";
import Link from "next/link";

import { FaRegFilePdf } from "react-icons/fa";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";
import { createJsonLdGraph } from "@/lib/createJsonLdGraph";

// Components
import JsonLDScript from "@/components/JsonLDScript";
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "IB SL questions",
    description:
        "IB SL Questions – SL Vectors, Trig Identities, Sequences, and Normal Distribution (2008–2014), with full mark schemes.",
    slug: "/handouts/ib-sl-questions",
    keywords: ["Dr. William J. Larson", "maths tutor", "Geneva", "Nyon", "IB", "handouts", "SL", "Dr. Larson"],
    images: [],
});

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
    const jsonLd = createJsonLdGraph(baseUrl, metadata);

    return (
        <>
            <JsonLDScript data={jsonLd} />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-800 dark:text-gray-100">
                <h1 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">IB SL Questions</h1>

                <ul className="space-y-3">

                    {pdfs.map(({ title, file }) => (
                        <div key={title} className="flex items-center space-x-2">
                            <FaRegFilePdf className="text-red-600" />
                            {file ? (
                                <Link
                                    href={`/pdfs/handouts/sl/${file}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900"
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
                </ul>
                {/* Teaching Aids Link */}
                <TeachingAidsBtn />
            </div>
        </>
    );
}
