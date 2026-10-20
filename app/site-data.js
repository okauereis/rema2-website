const areaServed = [
  { "@type": "State", name: "Massachusetts" },
  { "@type": "State", name: "New Hampshire" },
];
const servicePaths = ["/solutions/business", "/solutions/property", "/solutions/construction", "/solutions/workforce"];
const services = [
  ["Business Intelligence", "Business strategy, operational consulting, marketing and managed digital services through specialized partners."],
  ["Property Intelligence", "Coordinated property maintenance, landscaping, cleaning and seasonal services through specialized partners."],
  ["Construction Intelligence", "Project planning, trade partner coordination and progress reporting for construction and renovation work."],
  ["Workforce Intelligence", "Specialized crew sourcing, workforce coordination and managed operational support."]
];

// Organization markup keeps the service-area business's street address private.
export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": "https://rema2.com/#organization",
      name: "REMA² Group", legalName: "REMA2 GROUP, INC", alternateName: "Rema2 Group",
      url: "https://rema2.com/", logo: "https://rema2.com/logo.png",
      description: "Intelligence and service management hub connecting clients with specialized partners for business, property, construction and workforce solutions in Massachusetts and New Hampshire.",
      telephone: "+1-978-648-7729", email: "hello@rema2.com", areaServed,
      sameAs: ["https://www.instagram.com/rema2us/", "https://www.facebook.com/profile.php?id=61591892310845"],
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Integrated Intelligence & Managed Solutions",
        itemListElement: services.map(([name, description], index) => ({
          "@type": "Offer", itemOffered: {
            "@type": "Service", name, description, areaServed,
            url: "https://rema2.com" + servicePaths[index],
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
