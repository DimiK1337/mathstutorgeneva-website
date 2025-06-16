import rawData from '@/data/testimonials.json';

// lib
import { getBaseUrl } from '@/lib/getBaseUrl';
import { buildMetadata } from '@/lib/metadataBuilder';

import type { Metadata } from 'next';
export const metadata: Metadata = buildMetadata({
    title: 'Testimonials',
    description: 'Testimonials from satisfied parents and students',
    slug: '/testimonials',
    keywords: ['math tutor', 'Geneva', 'Nyon', 'testimonials', 'parent feedback'],
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


// ld+json
function createJsonLdGraph(baseUrl: string) {
    const webPageJsonLd = {
        "@type": "WebPage",
        "@id": `${baseUrl}/testimonials`,
        url: `${baseUrl}/testimonials`,
        name: "Testimonials",
        description: "Testimonials from satisfied parents and students",
        inLanguage: "en-US",
        dateModified: new Date().toISOString().split("T")[0],
        isPartOf: {
            "@type": "WebSite",
            url: baseUrl,
            name: "mathstutorgeneva.ch",
        },
        breadcrumb: {
            "@id": `${baseUrl}/testimonials#breadcrumb`,
        },
    };

    const breadcrumbJsonLd = {
        "@type": "BreadcrumbList",
        "@id": `${baseUrl}/testimonials#breadcrumb`,
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${baseUrl}/`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Testimonials",
                item: `${baseUrl}/testimonials`,
            },
        ],
    };

    const personJsonLd = {
        "@type": "Person",
        name: "Dr. W. J. Larson",
        jobTitle: "Private Math Tutor",
        url: `${baseUrl}/`,
        image: `${baseUrl}/images/about-dr-larson-maths-tutor/cropped-bill2-200x200.jpg`,
        worksFor: [
            {
                "@type": "Organization",
                name: "CERN",
                url: "https://home.cern/",
            },
            {
                "@type": "EducationalOrganization",
                name: "International School of Geneva – La Grande Boissière",
                url: "https://www.ecolint.ch/our-campuses/la-grande-boissiere",
            },
        ],
    };

    return {
        "@context": "https://schema.org",
        "@graph": [webPageJsonLd, breadcrumbJsonLd, personJsonLd],
    };
}

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
    const jsonLd = createJsonLdGraph(baseUrl);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
            />
            <div className="max-w-5xl mx-auto px-6 py-12 space-y-16 text-gray-800 dark:text-gray-100">
                <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400 text-center">
                    Testimonials
                </h1>

                {order.map((year, index) => {
                    const data = testimonialsData[year];

                    // Type guard: ensure it's not the _order key
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
