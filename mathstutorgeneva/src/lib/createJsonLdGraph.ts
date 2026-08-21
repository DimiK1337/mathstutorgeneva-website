// src/lib/createJsonLdGraph.ts

import type { Metadata } from "next";

import { routeNames, type RoutePath } from "@/lib/routeNames";

const SITE_NAME = "mathstutorgeneva.ch";

function getSlugFromMetadata(metadata: Metadata): string {
  const canonical = metadata.alternates?.canonical;
  if (typeof canonical !== "string") {
    throw new Error("Metadata must contain a string alternates.canonical value");
  }

  return canonical.startsWith("/") ? canonical : `/${canonical}`;
}

const createPersonJsonLd = (baseUrl: string) => ({
  "@type": "Person",
  name: "Dr. William J. Larson",
  jobTitle: "Private Maths Tutor",
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
});

function buildBreadcrumbPaths(slug: string): string[] {
  if (slug === "/") return ["/"];

  const segments = slug.split("/").filter(Boolean);
  return [
    "/",
    ...segments.map(
      (_, index) => `/${segments.slice(0, index + 1).join("/")}`
    ),
  ];
}

function getRouteName(path: string): string {
  if (path in routeNames) return routeNames[path as RoutePath];
  throw new Error(`Missing route name for breadcrumb path: ${path}`);
}

function createBreadcrumbJsonLd(baseUrl: string, slug: string) {
  const breadcrumbPaths = buildBreadcrumbPaths(slug);
  return {
    "@type": "BreadcrumbList",
    "@id": `${baseUrl}${slug === "/" ? "/" : slug}#breadcrumb`,
    itemListElement: breadcrumbPaths.map((path, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: getRouteName(path),
      item:
        path === "/" ? `${baseUrl}/` : `${baseUrl}${path}`,
    })),
  };
}

export function createJsonLdGraph(baseUrl: string, metadata: Metadata) {
  const slug = getSlugFromMetadata(metadata);
  const pageUrl = slug === "/" ? `${baseUrl}/` : `${baseUrl}${slug}`;

  const webPageJsonLd = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: metadata.title,
    description: metadata.description,
    inLanguage: "en-US",
    dateModified: new Date().toISOString().split("T")[0],
    isPartOf: {
      "@type": "WebSite",
      url: baseUrl,
      name: SITE_NAME,
    },
    breadcrumb: {
      "@id": `${pageUrl}#breadcrumb`,
    },
  };

  const breadcrumbJsonLd = createBreadcrumbJsonLd(baseUrl, slug);
  const personJsonLd = createPersonJsonLd(baseUrl);
  return {
    "@context": "https://schema.org",
    "@graph": [
      webPageJsonLd,
      breadcrumbJsonLd,
      personJsonLd,
    ],
  };
}
