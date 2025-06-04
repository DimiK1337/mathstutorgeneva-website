import React from "react";

import { FaRegFilePdf } from "react-icons/fa";

// Components
import TeachingAidsBtn from "../../components/TeachingAidsBtn";

export default function IBHLQuestions() {
    const pdfs = [
        {
            title: "COUNTING PRINCIPLES 2008–2014 HL WITH MS",
            file: "Counting.pdf"
        },
        {
            title: "MATHEMATICAL INDUCTION 2008–14 WITH MS",
            file: "Induction.pdf"
        },
        {
            title: "INTEGRATION BY SUBSTITUTION AND PARTS 2008–2014 WITH MS",
            file: "Integration.pdf"
        },
        {
            title: "LOGS & EXPONENTS 2008–14 WITH MS",
            file: null  // <-- marks it as missing
        },
        {
            title: "RELATED RATES 2008–2014 WITH MS",
            file: "Related-Rates.pdf"
        },
        {
            title: "SEQUENCES 2008–2014 WITH MS",
            file: "Sequences.pdf"
        },
        {
            title: "TRIG FUNCTIONS, EQUATIONS & IDENTITIES MAY 2008–2014 WITH MS",
            file: "Trig-Functions.pdf"
        },
    ];


    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-gray-800 dark:text-gray-100">
            <h1 className="text-2xl font-semibold text-blue-700 dark:text-blue-400">IB HL Questions</h1>

            <ul className="space-y-3">
                {pdfs.map(({ title, file }) => (
                    <div key={title} className="flex items-center space-x-2">
                        <FaRegFilePdf className="text-red-600" />
                        {file ? (
                            <a
                                href={`/pdfs/handouts/hl/${file}`}
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

            </ul>
                
            {/* Teaching Aids Link */}
            <TeachingAidsBtn />
        </div>
    );
}
