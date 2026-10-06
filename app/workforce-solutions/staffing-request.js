"use client";
import { useState } from "react";

export default function StaffingRequest() {
  const [request, setRequest] = useState({ location: "", workers: "", start: "", details: "" });
  const update = (event) => setRequest({ ...request, [event.target.name]: event.target.value });
  const body = `Hello REMA² Group,\n\nI would like to discuss workforce support.\n\nProject location: ${request.location}\nNumber of workers: ${request.workers}\nPreferred start date: ${request.start}\nTasks, schedule and expected duration:\n${request.details}\n\nCompany:\nContact name:\nPhone:\n\nThank you.`;
  const email = "mailto:hello@rema2.com?subject=" + encodeURIComponent("Staffing quote request — MA / NH") + "&body=" + encodeURIComponent(body);
  return <div className="staffingForm">
    <div className="staffingFormFields">
      <label htmlFor="staffing-location">Project city & state<input id="staffing-location" name="location" value={request.location} onChange={update} placeholder="e.g. Woburn, MA" maxLength={200} /></label>
      <label htmlFor="staffing-workers">Number of workers<input id="staffing-workers" name="workers" value={request.workers} onChange={update} placeholder="e.g. 4 workers" maxLength={100} /></label>
      <label htmlFor="staffing-start">Preferred start date<input id="staffing-start" name="start" value={request.start} onChange={update} placeholder="e.g. Next week or a specific date" maxLength={100} /></label>
      <label htmlFor="staffing-details">Tasks, schedule & expected duration<textarea id="staffing-details" name="details" value={request.details} onChange={update} placeholder="Describe the work, working hours, duration and site requirements." rows={5} maxLength={1500} /></label>
    </div>
    <a className="primary black" href={email}>PREPARE REQUEST EMAIL →</a>
    <p className="staffingFormNote">Opens your email app with a draft. Review it and send to hello@rema2.com to request a quote. Prefer to call? <a href="tel:+19786487729">(978) 648-7729</a>.</p>
  </div>;
}
