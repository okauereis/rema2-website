const areaServed = [
  { "@type": "State", name: "Massachusetts" },
  { "@type": "State", name: "New Hampshire" },
];
const services = [
  ["Workforce Solutions", "Supplemental crews for recurring operations, workload peaks, special projects and workforce coverage."],
  ["Cleaning Services", "Commercial, post-construction, turnover, deep cleaning and recurring cleaning support."],
  ["Construction Support", "Field crews for demolition, concrete, site work, general labor and project support."],
  ["Landscape Support", "Flexible labor for maintenance, installation, seasonal demand and landscape operations."],
  ["Property Services", "Cleanup, exterior maintenance, snow and ice support and recurring field services."],
  ["Project & Operations", "Workforce coordination, field documentation, progress tracking and operational support."],
];

// Organization markup keeps the service-area business's street address private.
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": "https://rema2.com/#organization",
      name: "REMA² Group", legalName: "REMA2 GROUP, INC", alternateName: "Rema2 Group",
      url: "https://rema2.com/", logo: "https://rema2.com/logo.png",
      description: "Workforce solutions and field services for businesses and contractors. Based in Woburn, Massachusetts, serving Massachusetts and New Hampshire.",
      telephone: "+1-978-648-7729", email: "hello@rema2.com", areaServed,
      sameAs: ["https://www.instagram.com/rema2us/"],
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Workforce and Field Services",
        itemListElement: services.map(([name, description]) => ({
          "@type": "Offer", itemOffered: {
            "@type": "Service", name, description, areaServed,
            provider: { "@id": "https://rema2.com/#organization" },
          },
        })),
      },
    },
    {
      "@type": "WebSite", "@id": "https://rema2.com/#website",
      url: "https://rema2.com/", name: "REMA² Group", inLanguage: "en",
      publisher: { "@id": "https://rema2.com/#organization" },
    },
  ],
};
