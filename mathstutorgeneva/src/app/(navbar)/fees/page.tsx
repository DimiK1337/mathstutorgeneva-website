import React from "react";
import Image from "next/image";

// Components
import JsonLDScript from "@/components/JsonLDScript";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";
import { createJsonLdGraph } from "@/lib/createJsonLdGraph";

import type { Metadata } from "next";

export const metadata: Metadata = buildMetadata({
    title: "Tutoring fees",
    description: "Flexible fees for private maths tuition",
    slug: "/fees",
    keywords: ["Dr. William J. Larson", "maths tutor", "Geneva", "Nyon", "IB", "IGCSE", "SAT", "ACT", "fees", "Dr. Larson"],
    images: [
        {
            path: "/images/fees/addition-768x231.png",
            width: 768,
            height: 231,
            alt: "Calvin and Hobbes math cartoon",
        },
    ],
});


export default function Fees() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);
    return (
        <>
            <JsonLDScript data={jsonLd}/>

            {/* Page content */}
            <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                {/* Page Title */}
                <section className="space-y-2">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 text-center">
                        Tutoring Fees
                    </h1>
                    <p className="font-semibold">On January 1, 2023 my rates go up as follows:</p>
                    <p>
                        If I go to the student, I charge{" "}
                        <span className="font-medium">250 CHF per hour</span>, so{" "}
                        <span className="font-medium">500 CHF for a 2-hour lesson</span>.
                    </p>
                    <p>
                        If the student comes to me or I tutor online, my fee is{" "}
                        <span className="font-medium">170 CHF per hour.</span>{" "}
                        <span className="font-medium">Then I am flexible about how long the lesson needs to be.</span>.
                    </p>
                </section>

                {/* Cartoon */}
                <section className="text-center">
                    <Image
                        src="/images/fees/addition-768x231.png"
                        alt="Calvin and Hobbes maths cartoon"
                        width={768}
                        height={231}
                        className="mx-auto rounded shadow-md transition-transform hover:scale-105 w-auto h-auto"
                        loading="eager"
                    />
                </section>
            </div>
        </>
    );
}
