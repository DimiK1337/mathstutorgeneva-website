import React from "react";
import { Link } from "react-router-dom";

export default function TI84CalculatorDocs() {
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

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
            <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">TI-84 Calculator Guides</h1>

            {/* External links */}
            <div className="space-y-2">
                <p>
                    Read this to find out which calculators you can take into the IB exam:{" "}
                    <a
                        href="https://www.ibo.org/globalassets/programme-information/dp/ib-calculator-policy-en.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-300 underline"
                    >
                        IB Calculators Allowed
                    </a>
                </p>
                <p>
                    How to update software on the TI-84:{" "}
                    <a
                        href="/pdfs/ti-84-calculator-docs/updating-ti-84-calculators.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-300 underline"
                    >
                        Updating TI-84
                    </a>
                </p>
            </div>

            {/*
            <p className="text-center text-orange-600 font-medium text-sm">
                You can click each of the images below to download a copy in PDF format.
            </p>
            */}

            {/* PDF Viewer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 place-items-center">
                {pdfs.map(({ title, file }) => (
                    <div
                        key={file}
                        className="text-center space-y-4 p-4 rounded-lg border border-gray-300 shadow-md w-full max-w-xs"
                    >
                        <iframe
                            src={`/pdfs/ti-84-calculator-docs/${file}#page=1`}
                            width="100%"
                            height="350"
                            className="rounded"
                            title={title}
                        />
                        <p className="text-base font-medium">{title}</p>
                        <a
                            href={`/pdfs/ti-84-calculator-docs/${file}`}
                            download
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                        >
                            Download PDF
                        </a>
                    </div>
                ))}
            </div>

            {/* Teaching Aids Link */}
            <div className="text-center pt-8">
                <Link
                    to="/#teaching-aids"
                    className="inline-block bg-orange-600 text-white px-5 py-3 rounded hover:bg-orange-700 transition text-sm font-medium"
                >
                    Back to Teaching Aids
                </Link>
            </div>
        </div>
    );
}
