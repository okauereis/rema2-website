const services=[
["01","Workforce Solutions","Supplemental crews for recurring operations, workload peaks, special projects and workforce coverage."],
["02","Cleaning Services","Commercial, post-construction, turnover, deep cleaning and recurring cleaning support."],
["03","Construction Support","Field crews for demolition, concrete, site work, general labor and project support."],
["04","Landscape Support","Flexible labor for maintenance, installation, seasonal demand and landscape operations."],
["05","Property Services","Cleanup, exterior maintenance, snow & ice support and recurring field services."],
["06","Project & Operations","Workforce coordination, field documentation, progress tracking and operational support."]
];
export default function Home(){return <main>
<header><a className="brand" href="#">REMA<sup>2</sup><span>GROUP</span></a><nav><a href="#solutions">Solutions</a><a href="#how">How We Help</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><a className="headerCta" href="#contact">LET'S TALK →</a><a className="mobileCta" href="#contact" aria-label="Contact REMA2">CONTACT</a></header>

<section className="hero">
<div className="heroInner"><div className="eyebrow">WORKFORCE · SERVICES · OPERATIONS</div>
<h1>More capacity.<br/><em>Less complexity.</em></h1>
<p className="heroLead">REMA² helps businesses get the people, crews and field support they need to keep work moving.</p>
<div className="actions"><a className="primary" href="mailto:hello@rema2.com?subject=Workforce Request">I NEED WORKERS <span>→</span></a><a className="secondary" href="mailto:hello@rema2.com?subject=Service Request">I NEED A SERVICE</a></div>
</div>
<div className="heroBottom"><span>BASED IN WOBURN, MA</span><span>•</span><span>SERVING MASSACHUSETTS & NEW HAMPSHIRE</span></div>
</section>

<section className="choice" id="how">
<div className="choiceCard dark"><span className="tag">01 / WORKFORCE</span><h2>Need people?</h2><p>Add reliable capacity when demand changes — from individual labor support to supplemental field crews.</p><a href="mailto:hello@rema2.com?subject=Workforce Request">REQUEST WORKERS →</a></div>
<div className="choiceCard light"><span className="tag">02 / SERVICES</span><h2>Need it done?</h2><p>Let REMA² take responsibility for the service, crew coordination and field execution.</p><a href="mailto:hello@rema2.com?subject=Service Request">REQUEST A SERVICE →</a></div>
</section>

<section className="intro" id="solutions"><div><div className="eyebrow">ONE PARTNER. MULTIPLE SOLUTIONS.</div><h2>Built around the work<br/>you need done.</h2></div><p>We combine flexible workforce capacity with hands-on field services and operational coordination. One relationship. Multiple ways to support your business.</p></section>
<section className="grid">{services.map(s=><article key={s[1]}><b>{s[0]}</b><h3>{s[1]}</h3><p>{s[2]}</p><a href="#contact">EXPLORE →</a></article>)}</section>

<section className="scale"><div className="eyebrow">BUILT TO SCALE WITH YOUR BUSINESS</div><h2>Your workload changes.<br/><em>Your support should too.</em></h2><div className="scaleCopy"><p>From a few additional workers to a complete supplemental crew — or a service you want handled end-to-end — REMA² helps increase field capacity without unnecessary operational burden.</p><strong>Not just labor. Not just a contractor.<br/>A flexible operational partner.</strong></div></section>

<section className="proof" id="experience"><div className="proofTitle"><div className="eyebrow">EXPERIENCE BEHIND THE OPERATION</div><h2>Built from real<br/>operations.</h2><p>REMA² brings field execution together with leadership experience managing complex outsourced operations and large workforces.</p></div><div className="stats"><div><strong>500+</strong><span>Permanent workforce managed</span></div><div><strong>200+</strong><span>Temporary workers at peak</span></div><div><strong>100+</strong><span>Rapid workforce mobilizations</span></div></div></section>

<section className="principles"><div className="eyebrow">THE REMA² APPROACH</div><div className="principleGrid"><div><b>01</b><h3>Responsive</h3><p>Built for changing workloads and real-world field demands.</p></div><div><b>02</b><h3>Accountable</h3><p>Clear communication, coordination and ownership of the work.</p></div><div><b>03</b><h3>Scalable</h3><p>Support that can expand or contract as your operation requires.</p></div></div></section>

<section className="cta" id="contact"><div className="eyebrow">LET'S GET TO WORK</div><h2>Tell us what<br/>you need.</h2><p>Workers for tomorrow, a crew for an ongoing account, or a service you need executed — start with REMA².</p><div className="actions"><a className="primary black" href="mailto:hello@rema2.com?subject=Workforce Request">REQUEST WORKERS →</a><a className="secondary darkBorder" href="mailto:hello@rema2.com?subject=Service Request">REQUEST A SERVICE</a></div><a className="email" href="mailto:hello@rema2.com">hello@rema2.com</a></section>

<footer><a className="brand" href="#">REMA<sup>2</sup><span>GROUP</span></a><p>Workforce · Services · Operations<br/>Woburn, Massachusetts<br/>Serving MA & NH</p><p><a href="mailto:hello@rema2.com">hello@rema2.com</a><br/><a href="tel:+19786487729">(978) 648-7729</a></p><small>© 2026 REMA² Group. All rights reserved.</small></footer>
</main>}