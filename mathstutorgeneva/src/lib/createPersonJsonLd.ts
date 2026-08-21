//src/lib/createPersonJsonLd.ts


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

export default createPersonJsonLd;