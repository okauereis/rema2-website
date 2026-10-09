export default function sitemap() {
  const lastModified = new Date("2026-10-09T00:00:00Z");
  return [
    { url: "https://rema2.com/", lastModified, changeFrequency: "weekly", priority: 1 },
    { url: "https://rema2.com/workforce-solutions", lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: "https://rema2.com/cleaning-services", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://rema2.com/construction-support", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://rema2.com/landscaping", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://rema2.com/property-services", lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: "https://rema2.com/privacy", lastModified, changeFrequency: "yearly", priority: 0.2 },
  ];
}
