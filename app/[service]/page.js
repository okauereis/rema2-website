import { notFound } from "next/navigation";
import { servicePages } from "../service-pages";
import ServiceRequest from "./service-request";

export const dynamicParams = false;
export function generateStaticParams() {
  return Object.keys(servicePages).map(service => ({ service }));
}

export function generateMetadata({ params }) {
  const page = servicePages[params.service];
  if (!page) notFound();
  const url = `https://rema2.com/${params.service}`;
  return {
    title: page.title, description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", url, siteName: "REMA² Group", locale: "en_US", title: page.title, description: page.description,
      images: [{ url: "/social-card.png", width: 1200, height: 630, alt: `REMA² Group — ${page.name} in Massachusetts & New Hampshire` }],
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: ["/social-card.png"] },
  };
}

export default function ServicePage({ params }) {
  const page = servicePages[params.service];
  if (!page) notFound();
  const url = `https://rema2.com/${params.service}`;
  const schema = {
    "@context": "https://schema.org", "@graph": [
      { "@type": "Service", "@id": url + "#service", name: page.name, serviceType: page.name, description: page.description, url,
        provider: { "@id": "https://rema2.com/#organization" },
        areaServed: [{ "@type": "State", name: "Massachusetts" }, { "@type": "State", name: "New Hampshire" }] },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rema2.com/" },
        { "@type": "ListItem", position: 2, name: page.name, item: url },
      ] },
    ],
  };
  return <main className="staffingPage servicePage">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header>
      <a className="brand" href="/" aria-label="REMA² Group home">REMA<sup>2</sup><span>GROUP</span></a>
      <nav aria-label="Main navigation"><a href="/workforce-solutions">Staffing</a><a href="/#solutions">All solutions</a><a href="#how-it-works">How it works</a></nav>
      <a className="headerCta staffingHeaderCta" href="#request">REQUEST A QUOTE →</a>
    </header>
    <section className="hero staffingHero">
      <div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>{page.name}</span></div>
      <div className="eyebrow">{page.name.toUpperCase()} · MASSACHUSETTS & NEW HAMPSHIRE</div>
      <h1>{page.headline}<br/><em>{page.accent}</em></h1>
      <p className="heroLead">{page.lead}</p>
      <div className="actions"><a className="primary" href="#request">REQUEST A {params.service === "cleaning-services" ? "CLEANING " : ""}QUOTE →</a><a className="secondary" href="tel:+19786487729">CALL (978) 648-7729</a></div>
      <p className="staffingHours">Monday–Friday, 7 AM–6 PM · Saturday & Sunday closed</p>
    </section>
    <section className="staffingSection staffingLight" id="scope">
      <div className="eyebrow">SERVICE SCOPE</div><h2>{page.scopeTitle}</h2>
      <p className="sectionLead">{page.scopeIntro}</p>
      <div className="staffingGrid">{page.services.map(([heading, text]) => <div className="staffingCard" key={heading}><h3>{heading}</h3><p>{text}</p></div>)}</div>
    </section>
    <section className="staffingSection" id="how-it-works">
      <div className="eyebrow">HOW IT WORKS</div><h2>From your request<br/>to an agreed plan.</h2>
      <ol className="staffingSteps">{page.steps.map(([heading, text], index) => <li key={heading}><span>0{index + 1}</span><h3>{heading}</h3><p>{text}</p></li>)}</ol>
    </section>
    <section className="staffingSection staffingLight staffingSplit">
      <div><div className="eyebrow">PLAN THE REQUEST</div><h2>{page.planningTitle}</h2><p>Serving Massachusetts and New Hampshire from Woburn, MA. Include these details so we can discuss your project.</p></div>
      <ul className="servicePlanning">{page.planning.map(item => <li key={item}>{item}</li>)}</ul>
    </section>
    <section className="staffingSection staffingFaq"><div className="eyebrow">COMMON QUESTIONS</div><h2>Before we get to work.</h2>
      {page.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
    </section>
    <section className="staffingSection staffingLight staffingRequest" id="request">
      <div><div className="eyebrow">LET'S GET TO WORK</div><h2>{page.requestTitle}</h2><p className="sectionLead">Send your request directly using the form below, or call us to discuss the work.</p>
        <div className="staffingContact"><a href="tel:+19786487729">(978) 648-7729</a><a href="mailto:hello@rema2.com">hello@rema2.com</a><span>Monday–Friday, 7 AM–6 PM</span><span>Based in Woburn, MA · Serving MA & NH</span></div>
      </div><ServiceRequest serviceName={page.name} placeholder={page.requestPlaceholder} />
    </section>
    <section className="staffingSection serviceRelated"><div className="eyebrow">WORKFORCE · SERVICES · OPERATIONS</div><h2>More ways to support your work.</h2>
      <p>Need additional people for your existing operation? Explore <a href="/workforce-solutions">staffing and workforce solutions</a>, our primary focus, or discuss a service with crew coordination and field execution.</p>
      <div className="serviceRelatedLinks">{Object.entries(servicePages).filter(([slug]) => slug !== params.service).map(([slug, related]) => <a key={slug} href={`/${slug}`}>{related.name} →</a>)}</div>
    </section>
    <footer><a className="brand" href="/">REMA<sup>2</sup><span>GROUP</span></a><p>Workforce · Services · Operations<br/>Woburn, Massachusetts<br/>Serving Massachusetts & New Hampshire</p><p><a href="mailto:hello@rema2.com">hello@rema2.com</a><br/><a href="tel:+19786487729">(978) 648-7729</a><br/><a href="https://www.facebook.com/profile.php?id=61591892310845" target="_blank" rel="noopener noreferrer">Facebook ↗</a><br/><a href="https://www.instagram.com/rema2us/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></p><small>© 2026 REMA² Group. All rights reserved.</small></footer>
  </main>;
}
