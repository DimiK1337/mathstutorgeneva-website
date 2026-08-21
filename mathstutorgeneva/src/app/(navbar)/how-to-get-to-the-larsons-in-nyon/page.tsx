import React from "react";
import Image from "next/image";

// lib
import { getBaseUrl } from "@/lib/getBaseUrl";
import { buildMetadata } from "@/lib/metadataBuilder";
import { createJsonLdGraph } from "@/lib/createJsonLdGraph";
//import createPersonJsonLd from "@/lib/createPersonJsonLd";

import type { Metadata } from "next";
export const metadata: Metadata = buildMetadata({
    title: "How to get to the Larsons’ in Nyon",
    description: "How to get to the Larsons' in Nyon",
    slug: "/how-to-get-to-the-larsons-in-nyon",
    images: [
        {
            path: "/images/location/bill-directions-to-plantaz1-365x400.png",
            width: 365,
            height: 400,
            alt: "Walking map to Chemin des Plantaz",
        },
        {
            path: "/images/location/bill-directions-large-map-400x373.png",
            width: 400,
            height: 373,
            alt: "Large map showing full route",
        },
    ],
});

// ld+json
// function createJsonLdGraph(baseUrl: string) {
//     const webPageJsonLd = {
//         "@type": "WebPage",
//         "@id": `${baseUrl}/how-to-get-to-the-larsons-in-nyon`,
//         url: `${baseUrl}/how-to-get-to-the-larsons-in-nyon`,
//         name: "How to get to the Larsons’ in Nyon",
//         description: "How to get to the Larsons' in Nyon",
//         inLanguage: "en-US",
//         dateModified: new Date().toISOString().split("T")[0],
//         isPartOf: {
//             "@type": "WebSite",
//             url: baseUrl,
//             name: "mathstutorgeneva.ch",
//         },
//         breadcrumb: {
//             "@id": `${baseUrl}/how-to-get-to-the-larsons-in-nyon#breadcrumb`,
//         },
//     };

//     const breadcrumbJsonLd = {
//         "@type": "BreadcrumbList",
//         "@id": `${baseUrl}/how-to-get-to-the-larsons-in-nyon#breadcrumb`,
//         itemListElement: [
//             {
//                 "@type": "ListItem",
//                 position: 1,
//                 name: "Home",
//                 item: `${baseUrl}/`,
//             },
//             {
//                 "@type": "ListItem",
//                 position: 2,
//                 name: "How to get to the Larsons’ in Nyon",
//                 item: `${baseUrl}/how-to-get-to-the-larsons-in-nyon`,
//             },
//         ],
//     };
//     const personJsonLd = createPersonJsonLd(baseUrl);
//     return {
//         "@context": "https://schema.org",
//         "@graph": [webPageJsonLd, breadcrumbJsonLd, personJsonLd],
//     };
// }


// type ClickableImageProps = {
//     src: string;
//     alt: string;
//     width: number;
//     height: number;
// }
// function ClickableImage(props: ClickableImageProps) {
//     const { src, alt, width, height } = props;
//     return (
//         <Image
//             src={src}
//             alt={alt}
//             width={width}
//             height={height}
//             className="mx-auto rounded-lg shadow-md transition-transform hover:scale-105"
//         />
//     )
// }

export default function Location() {
    const baseUrl = getBaseUrl();
    const jsonLd = createJsonLdGraph(baseUrl, metadata);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
            />
            <div className="max-w-4xl mx-auto px-6 py-12 space-y-10 text-gray-800 dark:text-gray-100">
                {/* Header */}
                <section className="text-center space-y-2">
                    <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">
                        How to Get to the Larsons’ in Nyon
                    </h1>
                    <p>
                        Although our address is <strong>48, Chemin des Plantaz</strong>, we are directly over the road from 70, Route de St-Cergue,
                        in other words we are effectively at <strong>71 Rte de St-Cergue</strong>, not 48 Ch. des Plantaz.
                        The apartment building is set back from the road, and its entrance is from an internal courtyard.
                    </p>
                </section>

                <section className="text-center">
                    <iframe
                        className="mx-auto"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5503.741485344116!2d6.229282476938711!3d46.39178867107185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c432c259742dd%3A0x200a016895ee73f!2sChem.%20des%20Plantaz%2048%2C%201260%20Nyon!5e0!3m2!1sen!2sch!4v1787234996765!5m2!1sen!2sch"

                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                    >

                    </iframe>
                </section>

                {/* First map */}
                <section className="text-center">
                    <Image
                        src="/images/location/bill-directions-to-plantaz1-365x400.png"
                        alt="Walking map to Chemin des Plantaz"
                        width={365}
                        height={400}
                        className="mx-auto rounded-lg shadow-md transition-transform hover:scale-105"
                    />
                </section>

                {/* By train and walking */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                        By train and walking
                    </h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Exit the Nyon train station “<i>côté Jura</i>” (the north side, or back of the station).</li>
                        <li>Turn right. You are on the Route de St-Cergue. Continue along the Route de St-Cergue.</li>
                        <li>In 10 minutes you will get to a roundabout. Continue straight ahead.</li>
                        <li>
                            About a hundred meters beyond this roundabout on the right side of the road is a driveway with a large sign saying (among other things):<br />
                            <strong>Chemin des Plantaz 40 a 60►</strong>
                        </li>
                        <li>
                            Follow the driveway to our apartment building (the pink building directly behind it).
                        </li>
                    </ol>
                </section>

                {/* By train and bus */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                        By train and bus
                    </h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Exit the train station “<i>côté Lac</i>” (the south side, or front of the station).</li>
                        <li>Turn right and walk down 50 meters to the bus stop. Take bus 804, which runs quite often.</li>
                        <li>
                            Get off at the Route de Saint-Cergue stop. Walk down the hill to the south for about 50 meters. On the left side of the road is a driveway with a large sign saying (among other things):<br />
                            <strong>Chemin des Plantaz 40 a 60►</strong>
                        </li>
                        <li>
                            Follow the driveway to our apartment building (the pink building directly behind it).
                        </li>
                    </ol>
                </section>

                {/* Second map */}
                <section className="text-center">
                    <Image
                        src="/images/location/bill-directions-large-map-400x373.png"
                        alt="Large map showing full route"
                        width={400}
                        height={373}
                        className="mx-auto rounded-lg shadow-md transition-transform hover:scale-105"
                    />
                </section>

                {/* By car */}
                <section>
                    <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
                        By car
                    </h2>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>From Geneva take the autoroute toward Lausanne. Nyon is a 15–20 minute drive from Geneva.</li>
                        <li>Take the Nyon exit. Turn right (i.e. down the hill toward the lake).</li>
                        <li>At the second roundabout, turn left.</li>
                        <li>
                            At the next roundabout, turn left onto Route de St-Cergue. In 100 meters on the right side of the road is a driveway with a large sign saying (among other things):<br />
                            <strong>Chemin des Plantaz 40 a 60►</strong>
                        </li>
                        <li>
                            Turn right into the small parking lot. <strong>48, Chemin des Plantaz</strong> is the pink apartment building next to the parking lot.
                        </li>
                    </ol>

                    <p className="mt-4">
                        There are <strong className="font-semibold">Visitors Parking</strong> places in this parking lot. Please use these!
                    </p>
                </section>
            </div>
        </>
    );
}
