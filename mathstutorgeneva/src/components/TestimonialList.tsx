//src/components/TestimonialList.tsx

"use client";

import { useEffect, useState } from "react";

type SingleTestimonial = {
    testimonial: string;
    name: string;
};

type TestimonialListProps = {
    testimonials: SingleTestimonial[];
};

const bgColors = [
    "bg-blue-50 dark:bg-blue-900",
    "bg-green-50 dark:bg-green-900",
    "bg-yellow-50 dark:bg-yellow-900",
    "bg-purple-50 dark:bg-purple-900",
    "bg-pink-50 dark:bg-pink-900",
    "bg-gray-100 dark:bg-gray-800",
    "bg-indigo-50 dark:bg-indigo-900",
];

function shuffle<T>(array: T[]): T[] {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

export default function TestimonialsList({testimonials,}: TestimonialListProps) {
    const [items, setItems] = useState(testimonials);

    useEffect(() => {
        setItems(shuffle(testimonials));
    }, [testimonials]);

    return (
        <>
            {items.map(({ testimonial, name }, index) => (
                <blockquote
                    key={`${name}-${index}`}
                    className={`p-4 rounded shadow-md ${bgColors[index % bgColors.length]} transition duration-300 ease-in-out`}
                >
                    <p className="italic text-lg">
                        “{testimonial}”
                    </p>

                    <span className="block text-right font-semibold mt-2">
                        — {name}
                    </span>
                </blockquote>
            ))}
        </>
    );
}
