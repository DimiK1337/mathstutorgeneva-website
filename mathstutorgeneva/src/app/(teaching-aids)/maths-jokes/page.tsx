import React from "react";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

import type { Metadata } from "next";
export const metadata: Metadata = {
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    title: "Ten commandments of Mathematics",
    description: "Dr Larson's Ten Commandments for learning maths",
    alternates: {
        canonical: "/maths-jokes",
    },
    openGraph: {
        title: "Ten commandments of Mathematics",
        description: "Dr Larson's Ten Commandments for learning maths",
        url: "/maths-jokes",
        siteName: "mathstutorgeneva.ch",
        type: "article",
        locale: "en_US",
    },
    twitter: {
        card: "summary_large_image",
        title: "Ten commandments of Mathematics",
        description: "Dr Larson's Ten Commandments for learning maths",
    },
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
};

const commandments = [
    "Thou shalt read Thy problem.",
    "Whatsoever Thou doest to one side of the equation, Do Thee also to the other.",
    "Thou shalt use Thy “Common Sense”, else Thou wilt have flagpoles 9’000 feet in height, yea … even fathers younger than sons.",
    "Thou shalt ignore the teachings of false prophets to do work in Thy head.",
    "When Thou knowest not, Thou shalt look it up, and if Thy search still elude Thee, then Thou shalt ask the all-knowing teacher.",
    "Thou shalt master each step before putting Thy heavy foot down on the next.",
    "Thy correct answer does not prove that Thou hast worked Thy problem correctly. This argument convincest none, least of all, Thy teacher.",
    "Thou shalt first see that Thou hast copied Thy problem correctly before bearing false witness that the answer book lieth.",
    "Thou shalt look back even unto Thy youth and remember Thy arithmetic.",
    "Thou shalt learn, speak, write, and listen correctly in the language of mathematics, and verily A’s and B’s will follow Thee even unto graduation."
];

export default function MathsCommandments() {
    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
            <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-400">
                    The Ten Commandments of Mathematics
                </h1>
                <p className="italic text-gray-500 dark:text-gray-400">(With Apologies to the K.J.V.)</p>
            </section>

            <section className="space-y-4">
                {commandments.map((line, idx) => (
                    <div
                        key={idx}
                        className="p-4 bg-orange-100 dark:bg-orange-900/40 rounded-lg shadow transition"
                    >
                        <p className="font-semibold">
                            {idx + 1}. {line}
                        </p>
                    </div>
                ))}
            </section>

            {/* Teaching Aids Link */}
            <TeachingAidsBtn/>
        </div>
    );
}
