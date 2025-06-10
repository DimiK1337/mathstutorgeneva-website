import type { Metadata } from "next";

import Image from "next/image";

// TODO: Image srcsets for SEO

// app/page.tsx

export const metadata: Metadata = {
    title: "mathstutorgeneva.ch – Maths tutoring in Geneva and Nyon",
    description: "Dr W. J. Larson, formerly of the Ecole Internationale is now a private math tutor working in Geneva and Nyon, Switzerland. Math for IB and SAT.",
    keywords: ["math tutor", "Geneva", "Nyon", "IB", "SAT", "private tutor"],
    robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    metadataBase: new URL("https://mathstutorgeneva.ch"),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://mathstutorgeneva.ch/",
        title: "mathstutorgeneva.ch – Maths tutoring in Geneva and Nyon",
        description: "Dr W. J. Larson, private math tutor in Geneva and Nyon, Switzerland. Math for IB and SAT.",
        siteName: "mathstutorgeneva.ch",
        images: [
            {
                url: "/images/home/mtg-2019-tutee1-half-400x350.jpg",
                width: 400,
                height: 350,
                alt: "Student 1 tutoring session with Dr. Larson",
            },
            {
                url: "/images/home/mtg-2019-tutee2-half-400x350.jpg",
                width: 400,
                height: 350,
                alt: "Student 2 tutoring session with Dr. Larson",
            }
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "mathstutorgeneva.ch – Math Tutoring in Geneva",
        description: "Private tutoring for IB, SAT, AP and more by Dr. W. J. Larson",
        images: [
            "/images/home/mtg-2019-tutee1-half-400x350.jpg",
            "/images/home/mtg-2019-tutee2-half-400x350.jpg",
        ],
    },
};


export default function Home() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center mt-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-400">
                    Dr. W. J. Larson, Private Math Tutor
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300">
                    Formerly of <a className="text-blue-700 underline dark:text-blue-400" href="https://home.cern/about">CERN</a> and the <a className="text-blue-700 underline dark:text-blue-400" href="https://www.ecolint.ch/en/la-grande-boissiere">Ecole Internationale in Geneva</a>. Teaching IB, SAT, AP, and university-level math with clarity and passion.
                </p>
            </section>

            {/* Quote */}
            <section className="text-center px-4">
                <blockquote className="italic text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                    “I hear and I forget. I see and I remember. I do and I understand.”
                    <br />
                    <span className="block font-semibold mt-2">— Xunzi, Chinese Philosopher</span>
                </blockquote>
            </section>

            {/* Topics & Images Together */}
            <span className="text-center">
                <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-300 mb-4">
                    Topics I Teach
                </h2>
            </span>

            <section className="flex flex-wrap justify-center items-start gap-12 max-w-8xl mx-auto mt-12 px-4">
                {/* Left Image */}
                <Image
                    src="/images/home/mtg-2019-tutee1-half-400x350.jpg"
                    alt="Student 1 tutoring session with Dr. Larson"
                    width={260}
                    height={227} // maintains 400x350 ratio
                    className="rounded-xl shadow-md object-cover transition-transform hover:scale-105"
                />


                {/* Topics List */}
                {/* Topics List with Background */}
                <div className="bg-slate-100 dark:bg-slate-700 p-6 rounded-lg shadow-md max-w-xs self-center">
                    <ul className="text-blue-800 dark:text-blue-100 space-y-2 text-lg text-center md:text-left">
                        <li>Year 7–11 Math</li>
                        <li>IB HL/SL AA & AI</li>
                        <li>IGCSE Math</li>
                        <li>AP Calculus & Physics</li>
                        <li>University Math</li>
                        <li>Statistics & Science</li>
                        <li>SAT & ACT Math</li>
                    </ul>
                </div>


                {/* Right Image */}
                <Image
                    src="/images/home/mtg-2019-tutee2-half-400x350.jpg"
                    alt="Student 2 tutoring session with Dr. Larson"
                    width={260}
                    height={227} // maintains 400x350 ratio
                    className="rounded-xl shadow-md object-cover transition-transform hover:scale-105"
                />
            </section>



            {/* Strengths */}
            <section className="bg-green-100 dark:bg-green-900 py-10 px-6 rounded-lg shadow max-w-4xl mx-auto">
                <h2 className="text-2xl font-semibold text-center mb-6 text-green-900 dark:text-white">
                    My Strengths
                </h2>
                <ul className="list-disc list-inside text-green-800 dark:text-green-100 space-y-2">
                    <li>Encouraging students with low confidence to succeed</li>
                    <li>Challenging advanced students to reach their full potential</li>
                    <li>Flexible tutoring hours</li>
                </ul>
            </section>

            {/* Mini Testimonial */}
            <section className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow max-w-3xl mx-auto text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                    What Parents Say
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                    “Dr. Larson helped our son regain his confidence and love for math.
                    Thanks to his support, he excelled in the IB exam.”
                    <br />
                    <span className="mt-2 block font-bold text-sm">— B, father of tutee</span>
                </p>
                <a
                    href="/testimonials"
                    className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:underline font-medium"
                >
                    Read more testimonials →
                </a>
            </section>

            {/* Experience */}
            <section className="text-center text-gray-700 dark:text-gray-300 px-6">
                <h2 className="text-2xl font-semibold mb-4">Experience & Qualifications</h2>
                <p>
                    PhD in Physics · 30+ years teaching Math, Physics, Statistics, Astronomy, and US History in Swiss & US high schools and universities (e.g., Pomona College, Ecole Internationale Geneva).
                </p>
            </section>

            {/* Where I Tutor */}
            <section className="bg-orange-200 dark:bg-orange-700 py-6 px-4 text-center">
                <p className="text-lg font-medium text-gray-800 dark:text-white">Where I tutor:</p>
                <ul className="flex flex-wrap justify-center gap-4 mt-2 text-blue-700 dark:text-blue-300">
                    <li>• At the student’s home</li>
                    <li>• <a href="/how-to-get-there" className="underline">At the Larsons’ home in Nyon</a></li>
                    <li>• By Skype</li>
                </ul>
            </section>

            {/* Free Teaching Aids */}
            <section className="text-center py-6" id="TeachingAids">
                <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">Free Teaching Aids</h2>
                <nav className="flex flex-wrap justify-center gap-4 text-sm font-medium text-blue-700 dark:text-blue-300">
                    <a href="/maths-jokes" className="hover:underline">Maths Ten Commandments</a>
                    <a href="/handouts" className="hover:underline">General Handouts</a>
                    <a href="/handouts/ib-hl-questions" className="hover:underline">IB HL Questions</a>
                    <a href="/handouts/ib-sl-questions" className="hover:underline">IB SL Questions</a>
                    <a href="/ti-84-calculator-docs" className="hover:underline">TI-84 Calculator Guides</a>

                    <a
                        href="https://tutorial.math.lamar.edu/Extras/CommonErrors/AlgebraErrors.aspx"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        Common Math Errors to Avoid
                    </a>
                </nav>
            </section>

        </div>
    );
}
