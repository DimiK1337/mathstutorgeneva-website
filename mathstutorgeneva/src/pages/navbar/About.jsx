import React from 'react';

export default function AboutDrLarsonMathsTutor() {
    const books = [
        {
            filename: 'Common-Core-IBID-Cover-308x400.jpg',
            caption: 'Common Core',
            url: 'https://www.ibid.com.au/maths/mathematics-common-core/'
        },
        {
            filename: 'Cover-Maths-PureSL-Front-305x400.jpg',
            caption: 'Analysis & Approaches SL',
            url: 'https://www.ibid.com.au/maths/mathematics-analysis-approaches-sl/'
        },
        {
            filename: 'Cover-Maths-AppSL-Front-304x400.jpg',
            caption: 'Applications & Interpretations SL',
            url: 'https://www.ibid.com.au/maths/mathematics-applications-and-interpretations-sl/'
        },
        {
            filename: 'AA-HL-IBID-Cover-305x400.jpg',
            caption: 'Analysis & Approaches HL',
            url: 'https://www.ibid.com.au/maths/mathematics-analysis-approaches-hl/'
        },
        {
            filename: 'Cover-Maths-AppHL-Front-304x400.jpg',
            caption: 'Applications & Interpretations HL',
            url: 'https://www.ibid.com.au/maths/mathematics-applications-and-interpretations-hl/'
        },
    ];

    return (
        <div className="max-w-5xl mx-auto px-6 py-12 space-y-12 text-gray-800 dark:text-gray-100">
            {/* Header */}
            <section className="text-center space-y-4">
                <img
                    src="/images/about-dr-larson-maths-tutor/cropped-bill2-200x200.jpg"
                    alt="Dr. William Larson"
                    className="mx-auto rounded-full shadow-md w-32 h-32 object-cover"
                />
                <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-400">
                    About Dr. W. J. Larson
                </h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                    Private Math Tutor in Geneva and Nyon
                </p>
            </section>

            {/* Education */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Education</h2>
                <p>
                    William Larson holds a Bachelor's degree in Electrical Engineering from the University of Minnesota and a Ph.D. in Physics from the University of California at Riverside, where he conducted research at{' '}
                    <a href="https://home.cern/about" className="text-blue-700 underline dark:text-blue-400">CERN</a>.
                </p>
            </section>

            {/* Teaching Experience */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Teaching Experience</h2>
                <p>
                    Over the past 25 years, Dr. Larson has taught mathematics, physics, astronomy, and SAT preparation at middle school, high school, and first-year university levels. His experience includes teaching the IB Diploma Program, IGCSE, and US high school syllabuses, primarily in the mathematics department at the{' '}
                    <a href="https://www.ecolint.ch/our-campuses/la-grande-boissiere" className="text-blue-700 underline dark:text-blue-400">
                        La Grande Boissière campus of the International School of Geneva
                    </a>.
                </p>
            </section>

            {/* Achievements */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Achievements</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>IB Maths HL Assistant Examiner</li>
                    <li>Recipient of the Educator of Distinction award (2010) from the National Society of High School Scholars</li>
                </ul>
            </section>

            {/* Publications */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Publications</h2>
                <p>In 2019, Dr. Larson authored five mathematics textbooks:</p>

                {/* Textbook covers with captions */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
                    {books.map(({ filename, caption, url }) => (
                        <div key={filename} className="text-center">
                            <a href={url} target="_blank" rel="noopener noreferrer">
                                <img
                                    src={`/images/about-dr-larson-maths-tutor/textbooks/${filename}`}
                                    alt={caption}
                                    className="rounded shadow-md w-full object-cover mb-2"
                                />
                            </a>
                            <p className="text-sm font-medium">{caption}</p>
                        </div>
                    ))}
                </div>

                <p className="mt-6">
                    He has also published an astronomy lab manual and a series of guides for the TI-84 calculator. Two of these guides are available under the{' '}
                    <a href="/#teaching-aids" className="text-blue-700 underline dark:text-blue-400">Teaching Aids</a> section.
                </p>
            </section>

            {/* Personal Life */}
            <section>
                <h2 className="text-2xl font-semibold mb-4">Personal Life</h2>
                <p>
                    Dr. Larson is an avid hiker, mountaineer, skier, and bicyclist. He resides in Nyon, Switzerland, with his two sons.
                </p>
            </section>
        </div>
    );
}
