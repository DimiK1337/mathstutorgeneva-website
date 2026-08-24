import React from "react";
import Link from "next/link";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";
import { createJsonLdGraph } from "@/lib/createJsonLdGraph";

// Components
import JsonLDScript from "@/components/JsonLDScript";
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "TI-84 calculator docs",
    description:
        "TI-84 Calculator Guides. Learn which calculators are allowed in the IB exam, how to update your TI-84 software, and download printable guides.",
    slug: "/ti-84-calculator-docs",
    keywords: ["Dr. William J. Larson", "maths tutor", "Geneva", "Nyon", "IB", "IGCSE", "SAT", "ACT", "TI-84", "Dr. Larson"],
    images: [],
});

const pdfs = [
    {
        title: "TI-84 Skills for the IB Maths HL",
        file: "TI-84 Skills for the IB Maths HL.pdf",
        image: "ti-84-skills-hl.png"
    },
    {
        title: "TI-84 Skills for the IB Maths SL",
        file: "TI-84 Skills for the IB Maths SL.pdf",
        image: "ti-84-skills-sl.png"
    },
];

export default function TI84CalculatorDocs() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);

    return (
        <>
            <JsonLDScript data={jsonLd} />
            <div className="w-full max-w-screen-xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">TI-84 Calculator Guides</h1>

                {/* External links */}
                <div className="space-y-2">
                    <p>
                        Read this to find out which calculators you can take into the IB exam:{" "}
                        <a
                            href="https://www.ibo.org/contentassets/e3e2d5a7b79e48f7a47f8973e7873a10/use-of-calculators-in-examinations-2019_en.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-300 underline"
                        >
                            IB Calculators Allowed
                        </a>
                    </p>
                    <p>
                        How to update software on the TI-84:{" "}
                        <Link
                            href="/pdfs/ti-84-calculator-docs/updating-ti-84-calculators.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-300 underline"
                        >
                            Updating TI-84
                        </Link>
                    </p>
                </div>

                {/* PDF Viewer Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-16 xl:gap-20 place-items-center">
                    {pdfs.map(({ title, file }) => (
                        <div
                            key={file}
                            className="text-center space-y-4 p-4 rounded-lg border border-gray-300 shadow-md w-full sm:w-96 md:w-[28rem] lg:w-[32rem]"
                        >

                            <iframe
                                src={`/pdfs/ti-84-calculator-docs/${file}#page=1`}
                                width="100%"
                                height="350"
                                className="rounded"
                                title={title}
                            />
                            <p className="text-base font-medium">{title}</p>
                            <Link
                                href={`/pdfs/ti-84-calculator-docs/${file}`}
                                download
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                            >
                                Download PDF
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Teaching Aids Link */}
                <TeachingAidsBtn />
            </div>
        </>
    );
}
