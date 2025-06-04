import React from "react";

import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tutoring fees",
    description: "Flexible fees for private maths tuition",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "fees", "Dr Larson"],
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/fees",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://mathstutorgeneva.ch/fees",
        title: "Tutoring fees",
        description: "Flexible fees for private maths tuition",
        siteName: "mathstutorgeneva.ch",
        images: [
            {
                url: "/images/fees/addition-768x231.png",
                width: 768,
                height: 231,
                alt: "Calvin and Hobbes math cartoon",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Tutoring fees – Dr. Larson, Math Tutor in Geneva",
        description: "Flexible fees for private maths tuition in Geneva and Nyon",
        images: ["/images/fees/addition-768x231.png"],
    },
};


export default function Fees() {
    return (
        <div className="max-w-3xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
            {/* Page Title */}
            <section className="space-y-2">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                    Tutoring Fees
                </h1>
                <p className="font-semibold">On January 1, 2023 my rates go up as follows:</p>
                <p>
                    If the student comes to me or I tutor online, my fee is{" "}
                    <span className="font-medium">170 CHF per hour</span>, so{" "}
                    <span className="font-medium">340 CHF for a 2-hour lesson</span>.
                </p>
                <p>
                    If I go to the student, I charge{" "}
                    <span className="font-medium">250 CHF per hour</span>, so{" "}
                    <span className="font-medium">500 CHF for a 2-hour lesson</span>.
                </p>
            </section>

            {/* Cartoon */}
            <section className="text-center">
                <Image
                    src="/images/fees/addition-768x231.png"
                    alt="Calvin and Hobbes math cartoon"
                    width={768}
                    height={231}
                    className="mx-auto rounded shadow-md transition-transform hover:scale-105"
                />
            </section>
        </div>
    );
}
