
// lib
import { getBaseUrl } from '@/lib/getBaseUrl';
import { buildMetadata } from '@/lib/metadataBuilder';
import { createJsonLdGraph } from '@/lib/createJsonLdGraph';

// Components
import JsonLDScript from '@/components/JsonLDScript';
import TestimonialsList from '@/components/TestimonialList';

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

export default function Testimonials() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);

    const testimonials = order.flatMap((year) => {
        const data = testimonialsData[year];
        if (!data || !("testimonials" in data)) return [];
        return data.testimonials;
    });

    return (
        <>
            <JsonLDScript data={jsonLd} />

            <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-gray-800 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 text-center">
                    Testimonials
                </h1>

                <TestimonialsList testimonials={testimonials} />
            </div>
        </>
    );
}
