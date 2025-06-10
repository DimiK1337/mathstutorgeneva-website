import React from "react";
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
    },
    robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

export default function GeneralHandouts() {
    return (
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
            <TeachingAidsBtn/>
        </div>
    );
}
