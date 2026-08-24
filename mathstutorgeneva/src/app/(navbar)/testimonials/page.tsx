
// lib
import { getBaseUrl } from '@/lib/getBaseUrl';
import { buildMetadata } from '@/lib/metadataBuilder';
import { createJsonLdGraph } from '@/lib/createJsonLdGraph';

// Components
import JsonLDScript from '@/components/JsonLDScript';

import type { Metadata } from 'next';
export const metadata: Metadata = buildMetadata({
    title: 'Testimonials',
    description: 'Testimonials from satisfied parents and students',
    slug: '/testimonials',
    keywords: ['Dr. William J. Larson', 'maths tutor', 'Geneva', 'Nyon', 'testimonials', 'parent feedback', 'Dr. Larson'],
});

// Types to represent the structure of testimonials data from the JSON file
type SingleTestimonial = {
    testimonial: string;
    name: string;
}

type YearTestimonials = {
    intro?: string;
    testimonials: SingleTestimonial[];
}

type TestimonialsJSON = {
    _order: string[];
    [year: string]: YearTestimonials | string[]; // safer to keep if years may not be strictly typed
}

import rawData from '@/data/testimonials.json';
const testimonialsData = rawData as TestimonialsJSON;
const order = testimonialsData._order;

const bgColors = [
    'bg-blue-50 dark:bg-blue-900',
    'bg-green-50 dark:bg-green-900',
    'bg-yellow-50 dark:bg-yellow-900',
    'bg-purple-50 dark:bg-purple-900',
    'bg-pink-50 dark:bg-pink-900',
    'bg-gray-100 dark:bg-gray-800',
    'bg-indigo-50 dark:bg-indigo-900',
];

function getRandomBg(): string {
    const index = Math.floor(Math.random() * bgColors.length);
    return bgColors[index];
}

export default function Testimonials() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);
    return (
        <>
            <JsonLDScript data={jsonLd}/>
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-gray-800 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 text-center">
                    Testimonials
                </h1>

                {order.map((year, index) => {
                    const data = testimonialsData[year];

                    // Type guard: ensure it's not the _order key
                    // TODO: Set a message in case there's an error. Can I do this without useState?
                    if (!data || !('testimonials' in data)) return null;

                    const { intro, testimonials } = data as YearTestimonials;

                    return (
                        <section
                            key={year}
                            className={`space-y-6 ${index !== 0 ? 'pt-10 border-t border-gray-300 dark:border-gray-700' : ''}`}
                        >
                            <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-300">{year}</h2>
                            {intro && <p className="italic">{intro}</p>}

                            <div className="space-y-6">
                                {testimonials.map(({ testimonial, name }, idx) => (
                                    <blockquote
                                        key={idx}
                                        className={`p-4 rounded shadow-md ${getRandomBg()} transition duration-300 ease-in-out`}
                                    >
                                        <p className="italic text-lg">“{testimonial}”</p>
                                        <span className="block text-right font-semibold mt-2">— {name}</span>
                                    </blockquote>
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </>
    );
}
