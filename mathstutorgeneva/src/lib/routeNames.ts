//src/lib/routeNames.ts

export const routeNames = {
    "/": "Home",

    "/about-dr-larson-maths-tutor": "About Dr Larson",
    "/how-i-tutor": "How I Tutor",
    "/sat-math": "SAT Math",
    "/testimonials": "Testimonials",
    "/fees": "Tutoring Fees",
    "/how-to-get-to-the-larsons-in-nyon": "How to get to the Larsons’ in Nyon",
    "/contact-dr-larson": "Contact me",


    // Not visible from NavBar
    "/handouts": "General handouts",
    "/handouts/ib-sl-questions": "IB SL questions",
    "/handouts/ib-hl-questions": "IB HL questions",

    "/ti-84-calculator-docs": "TI-84 calculator docs",
    "/maths-jokes": "Ten commandments of Mathematics",
} as const satisfies Record<string, string>;

export type RoutePath = keyof typeof routeNames;

export function isKnownRoute(path: string): path is RoutePath {
    return path in routeNames;
}
