import React from "react";
import type { Metadata } from "next";
import Image from "next/image";

// TODO: Replace Skype with Teams

export const metadata: Metadata = {
    title: "Contact me",
    description:
        "Contact me Email Dr Larson on: DrL@mathstutorgeneva.ch Mobile: +41 79 373 4686 Skype: live:bill_larson_1",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "contact", "Dr Larson"],
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/contact",
    },
    openGraph: {
        type: "article",
        locale: "en_US",
        url: "https://mathstutorgeneva.ch/contact",
        title: "Contact me",
        description:
            "Contact me Email Dr Larson on: DrL@mathstutorgeneva.ch Mobile: +41 79 373 4686 Skype: live:bill_larson_1",
        siteName: "mathstutorgeneva.ch",
        images: [
            {
                url: "/images/contact/rational-real-200x200.png",
                width: 200,
                height: 200,
                alt: "rational vs. real",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Dr. Larson – Math Tutor in Geneva",
        description:
            "Get in touch with Dr. W. J. Larson for private math tutoring in Geneva and Nyon. IB, SAT, and more.",
        images: ["/images/contact/rational-real-200x200.png"],
    },
};

export default function Contact() {
    return (
        <div className="max-w-2xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
            {/* Header */}
            <section className="text-center space-y-4">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                    Contact Dr. W. J. Larson
                </h1>
                <p>
                    To inquire about tutoring, please contact me via email, phone, or Skype.
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
            <section className="text-center space-y-2">
                <p>
                    📧{" "}
                    <a
                        href="mailto:DrL@MathsTutorGeneva.ch"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        DrL@MathsTutorGeneva.ch
                    </a>
                </p>
                <p>
                    📞{" "}
                    <a
                        href="tel:+41793734686"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        +41 79 373 4686
                    </a>
                </p>
                <p>
                    💬{" "}
                    <a
                        href="skype:live:bill_larson_1?call"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                        Skype: live:bill_larson_1
                    </a>
                </p>
            </section>

            <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                I typically respond within 24 hours.
            </p>
        </div>
    );
}
