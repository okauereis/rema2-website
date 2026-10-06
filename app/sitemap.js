export default function sitemap() {
  const lastModified = new Date();
  return [
    {
      url: "https://rema2.com/",
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://rema2.com/workforce-solutions",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://rema2.com/privacy",
      lastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];
}
