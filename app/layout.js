import "./globals.css";
import SiteAnalytics from "./site-analytics";
import { structuredData } from "./site-data";

const title = "REMA² Group | Intelligence & Managed Solutions in MA & NH";
const description = "REMA² Group is an intelligence and service management hub connecting clients with specialized partners across business, property, construction and workforce solutions in Massachusetts and New Hampshire.";

export const metadata = {
  metadataBase: new URL("https://rema2.com"),
  title,
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website", url: "/", siteName: "REMA² Group", locale: "en_US",
    title, description,
    images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "REMA² Group — Intelligence & Managed Solutions — Massachusetts & New Hampshire" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/social-card.png"] },
  icons: { icon: [{ url: "/favicon.ico" }, { url: "/icon.svg", type: "image/svg+xml" }], apple: "/apple-touch-icon.png" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    {children}
    <SiteAnalytics />
  </body></html>;
}
