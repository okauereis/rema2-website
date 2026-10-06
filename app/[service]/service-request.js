"use client";
import { useState } from "react";

export default function ServiceRequest({ serviceName, placeholder }) {
  const [request, setRequest] = useState({ location: "", schedule: "", approach: "Service execution", details: "" });
  const update = event => setRequest({ ...request, [event.target.name]: event.target.value });
  const body = `Hello REMA² Group,\n\nI would like to discuss ${serviceName.toLowerCase()}.\n\nProject city & state: ${request.location}\nPreferred schedule / frequency: ${request.schedule}\nSupport needed: ${request.approach}\nProject details:\n${request.details}\n\nCompany:\nContact name:\nPhone:\n\nThank you.`;
  const email = "mailto:hello@rema2.com?subject=" + encodeURIComponent(`${serviceName} quote request — MA / NH`) + "&body=" + encodeURIComponent(body);
  return <div className="staffingForm">
    <div className="staffingFormFields">
      <label htmlFor="service-location">Project city & state<input id="service-location" name="location" value={request.location} onChange={update} placeholder="e.g. Woburn, MA" maxLength={200} /></label>
      <label htmlFor="service-schedule">Preferred schedule / frequency<input id="service-schedule" name="schedule" value={request.schedule} onChange={update} placeholder="Start date, duration or recurring schedule" maxLength={200} /></label>
      <label htmlFor="service-approach">Support needed<select id="service-approach" name="approach" value={request.approach} onChange={update}><option>Service execution</option><option>Supplemental workers / crews</option><option>Help defining the scope</option></select></label>
      <label htmlFor="service-details">Project details<textarea id="service-details" name="details" value={request.details} onChange={update} placeholder={placeholder} rows={5} maxLength={1500} /></label>
    </div>
    <a className="primary black" href={email}>PREPARE REQUEST EMAIL →</a>
    <p className="staffingFormNote">Opens your email app with a draft. Review it and send to hello@rema2.com to request a quote. Prefer to call? <a href="tel:+19786487729">(978) 648-7729</a>.</p>
  </div>;
}
