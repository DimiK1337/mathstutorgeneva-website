import React from "react";

import { FaRegFilePdf } from "react-icons/fa";

// Components
import TeachingAidsBtn from "@/components/TeachingAidsBtn";

export default function IBSLQuestions() {
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

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-800 dark:text-gray-100">
            <h1 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">IB SL Questions</h1>

            <ul className="space-y-3">

                {pdfs.map(({ title, file }) => (
                    <div key={title} className="flex items-center space-x-2">
                        <FaRegFilePdf className="text-red-600" />
                        {file ? (
                            <a
                                href={`/pdfs/handouts/sl/${file}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-700 dark:text-blue-300 underline hover:text-blue-900"
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
            </ul>
            {/* Teaching Aids Link */}
            <TeachingAidsBtn />
        </div>
    );
}
