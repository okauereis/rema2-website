import StaffingRequest from "./staffing-request";

const title = "Staffing & Workforce Solutions in MA & NH | REMA² Group";
const description = "Request workers and supplemental field crews for construction, cleaning, landscaping and property operations in Massachusetts and New Hampshire. Based in Woburn, MA.";
const url = "https://rema2.com/workforce-solutions";

export const metadata = {
  title, description,
  alternates: { canonical: url },
  openGraph: {
    type: "website", url, siteName: "REMA² Group", locale: "en_US", title, description,
    images: [{ url: "/social-card.png", width: 1200, height: 630, alt: "REMA² Group — Workforce Solutions in Massachusetts & New Hampshire" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/social-card.png"] },
};

const support = [
  ["Construction & general labor", "Supplemental field crews for site work, demolition, concrete and general project support. Tell us the tasks, site conditions and experience your project requires."],
  ["Cleaning operations", "Workforce support for commercial cleaning, post-construction cleanup, turnover work and recurring cleaning accounts."],
  ["Landscaping operations", "Additional people for maintenance, installation and seasonal workloads, helping your landscape operation adjust to changing demand."],
  ["Property & field services", "Labor support for property cleanup, exterior maintenance, snow and ice work and recurring field operations."],
];
const faqs = [
  ["Where does REMA² provide workforce support?", "REMA² is based in Woburn, Massachusetts, and serves businesses and contractors in Massachusetts and New Hampshire. Share the project location so we can review the request."],
  ["Can I request workers for a short project or recurring work?", "Yes. Requests can cover workload peaks, special projects, workforce coverage or recurring operations. Include the number of workers, expected schedule and duration so we can discuss the scope and availability."],
  ["Can REMA² execute the service as well as provide workers?", "Yes. REMA² also offers construction support, cleaning, landscaping and property services. Tell us whether you need supplemental workers for your operation or a service that includes crew coordination and field execution."],
  ["How do I get a staffing quote?", "Send your project location, tasks, number of workers, preferred start date and expected duration. We will review the request with you and discuss scope, availability and pricing before work is agreed."],
];
const schema = {
  "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": url + "#service", name: "Staffing & Workforce Solutions", serviceType: "Workforce solutions and supplemental field crews", description, url,
      provider: { "@id": "https://rema2.com/#organization" },
      areaServed: [{ "@type": "State", name: "Massachusetts" }, { "@type": "State", name: "New Hampshire" }] },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rema2.com/" },
      { "@type": "ListItem", position: 2, name: "Workforce Solutions", item: url },
    ] },
  ],
};

export default function WorkforceSolutions() {
  return <main className="staffingPage">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <header>
      <a className="brand" href="/" aria-label="REMA² Group home">REMA<sup>2</sup><span>GROUP</span></a>
      <nav aria-label="Main navigation"><a href="/#solutions">All solutions</a><a href="/#story">Our story</a><a href="#how-it-works">How it works</a></nav>
      <a className="headerCta staffingHeaderCta" href="#request">REQUEST WORKERS →</a>
    </header>
    <section className="hero staffingHero">
      <div className="breadcrumbs"><a href="/">Home</a><span>/</span><span>Workforce Solutions</span></div>
      <div className="eyebrow">WORKFORCE SOLUTIONS · MASSACHUSETTS & NEW HAMPSHIRE</div>
      <h1>Staffing for your team.<br/><em>Support for your projects.</em></h1>
      <p className="heroLead">Staffing and supplemental field crews for businesses and contractors in Massachusetts and New Hampshire. Based in Woburn, REMA² helps you add workforce capacity for projects, recurring operations and changing workloads.</p>
      <div className="actions"><a className="primary" href="#request">REQUEST A STAFFING QUOTE →</a><a className="secondary" href="tel:+19786487729">CALL (978) 648-7729</a></div>
      <p className="staffingHours">Monday–Friday, 7 AM–6 PM · Saturday & Sunday closed</p>
    </section>
    <section className="staffingSection staffingLight" id="support">
      <div className="eyebrow">FLEXIBLE WORKFORCE CAPACITY</div><h2>Staffing for field operations.</h2>
      <p className="sectionLead">From individual labor support to supplemental crews, start with the work you need covered. We discuss the tasks, schedule and coordination needs to define the right scope for your operation.</p>
      <div className="staffingGrid">{support.map(([heading, text]) => <div className="staffingCard" key={heading}><h3>{heading}</h3><p>{text}</p></div>)}</div>
    </section>
    <section className="staffingSection" id="how-it-works">
      <div className="eyebrow">HOW IT WORKS</div><h2>A clear scope.<br/>A practical next step.</h2>
      <ol className="staffingSteps">
        <li><span>01</span><h3>Tell us what you need.</h3><p>Share the project location, tasks, team size, start date and expected duration. Include site requirements and any equipment or experience the work calls for.</p></li>
        <li><span>02</span><h3>Review the plan together.</h3><p>We discuss availability, responsibilities, coordination and pricing. The scope and terms are agreed before work starts.</p></li>
        <li><span>03</span><h3>Keep the work coordinated.</h3><p>Set clear responsibilities and communication for the assignment. Managed REMA² operations can also include field documentation and progress reporting.</p></li>
      </ol>
    </section>
    <section className="staffingSection staffingLight staffingSplit">
      <div><div className="eyebrow">ONE PARTNER. TWO WAYS TO HELP.</div><h2>Need people,<br/>or need it done?</h2></div>
      <div><p>Request workers to add capacity to your existing team, or ask REMA² to take responsibility for a field service, crew coordination and execution.</p><p>Our services include construction support, cleaning, landscaping and property services. We will discuss which approach fits your project.</p><a className="staffingTextLink" href="/#solutions">EXPLORE ALL SOLUTIONS →</a></div>
    </section>
    <section className="staffingSection staffingFaq"><div className="eyebrow">BEFORE YOU REQUEST A TEAM</div><h2>Common questions.</h2>
      {faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
    </section>
    <section className="staffingSection staffingLight staffingRequest" id="request">
      <div><div className="eyebrow">LET'S GET TO WORK</div><h2>Request workers.</h2><p className="sectionLead">Tell us about the work. Use the short request below to prepare an email, or speak with us directly.</p>
        <div className="staffingContact"><a href="tel:+19786487729">(978) 648-7729</a><a href="mailto:hello@rema2.com">hello@rema2.com</a><span>Monday–Friday, 7 AM–6 PM</span><span>Based in Woburn, MA · Serving MA & NH</span></div>
      </div><StaffingRequest />
    </section>
    <footer><a className="brand" href="/">REMA<sup>2</sup><span>GROUP</span></a><p>Workforce · Services · Operations<br/>Woburn, Massachusetts<br/>Serving Massachusetts & New Hampshire</p><p><a href="mailto:hello@rema2.com">hello@rema2.com</a><br/><a href="tel:+19786487729">(978) 648-7729</a><br/><a href="https://www.facebook.com/profile.php?id=61591892310845" target="_blank" rel="noopener noreferrer">Facebook ↗</a><br/><a href="https://www.instagram.com/rema2us/" target="_blank" rel="noopener noreferrer">Instagram ↗</a></p><small>© 2026 REMA² Group. All rights reserved.</small></footer>
  </main>;
}
