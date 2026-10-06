"use client";
import { useRef, useState } from "react";
import { trackEvent } from "./site-analytics";

const services = ["Workforce solutions", "Cleaning services", "Construction support", "Landscaping", "Property services", "Projects & operations"];
const copy = {
  en: { name: "Contact name", email: "Email", phone: "Phone (optional)", company: "Company (optional)", service: "Service needed", location: "Project city & state", workers: "Number of workers (optional)", schedule: "Preferred start date & schedule (optional)", details: "Tell us about the work", send: "SEND REQUEST →", sending: "SENDING…", success: "Thank you — your request has been received. Our team will contact you using the details provided.", error: "Your request could not be sent. Please try again, or call (978) 648-7729.", note: "We use these details to respond to your request.", privacy: "Privacy notice", another: "Send another request" },
  pt: { name: "Nome do contato", email: "E-mail", phone: "Telefone (opcional)", company: "Empresa (opcional)", service: "Serviço desejado", location: "Cidade e estado do projeto", workers: "Número de profissionais (opcional)", schedule: "Data de início e horários desejados (opcional)", details: "Conte sobre o trabalho", send: "ENVIAR SOLICITAÇÃO →", sending: "ENVIANDO…", success: "Obrigado — recebemos sua solicitação. Nossa equipe entrará em contato pelos dados informados.", error: "Não foi possível enviar. Tente novamente ou ligue para (978) 648-7729.", note: "Usamos esses dados para responder à sua solicitação.", privacy: "Aviso de privacidade", another: "Enviar outra solicitação" },
  es: { name: "Nombre del contacto", email: "Correo electrónico", phone: "Teléfono (opcional)", company: "Empresa (opcional)", service: "Servicio necesario", location: "Ciudad y estado del proyecto", workers: "Número de trabajadores (opcional)", schedule: "Fecha de inicio y horario (opcional)", details: "Cuéntenos sobre el trabajo", send: "ENVIAR SOLICITUD →", sending: "ENVIANDO…", success: "Gracias — recibimos su solicitud. Nuestro equipo se comunicará con usted usando los datos proporcionados.", error: "No se pudo enviar. Intente de nuevo o llame al (978) 648-7729.", note: "Usamos estos datos para responder a su solicitud.", privacy: "Aviso de privacidad", another: "Enviar otra solicitud" },
};

export default function LeadForm({ serviceName = "", staffing = false, lang = "en", placeholder = "Describe the tasks, scope, schedule and any site requirements." }) {
  const t = copy[lang] || copy.en;
  const [status, setStatus] = useState("idle");
  const submitting = useRef(false);
  async function submit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (data.get("bot-field")) return;
    submitting.current = true;
    setStatus("pending");
    data.set("page_path", window.location.pathname);
    const service = services.find(value => value.toLowerCase() === String(data.get("service")).toLowerCase()) || "General inquiry";
    data.set("subject", `REMA² website request — ${services.includes(service) ? service : "General inquiry"}`);
    try {
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams(data).toString() });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      form.reset();
      trackEvent("generate_lead", { service_name: services.includes(service) ? service : "General inquiry", method: "website_form" });
    } catch {
      setStatus("error");
    } finally {
      submitting.current = false;
    }
  }
  if (status === "success") return <div className="staffingForm leadSuccess" role="status"><h3>{lang === "pt" ? "Solicitação recebida." : lang === "es" ? "Solicitud recibida." : "Request received."}</h3><p>{t.success}</p><button className="primary black" type="button" onClick={() => setStatus("idle")}>{t.another}</button></div>;
  return <form name="rema2-quote" className="staffingForm" onSubmit={submit}>
    <input type="hidden" name="form-name" value="rema2-quote" />
    <input type="hidden" name="subject" value="REMA² website request" />
    <input type="hidden" name="page_path" value="" />
    <p hidden><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
    <div className="staffingFormFields">
      <label>{t.name}<input name="name" autoComplete="name" required maxLength={120} /></label>
      <label>{t.email}<input name="email" type="email" autoComplete="email" required maxLength={254} /></label>
      <label>{t.phone}<input name="phone" type="tel" autoComplete="tel" maxLength={50} /></label>
      <label>{t.company}<input name="company" autoComplete="organization" maxLength={160} /></label>
      {serviceName ? <input type="hidden" name="service" value={serviceName} /> : <label>{t.service}<select name="service" required defaultValue=""><option value="" disabled>{lang === "pt" ? "Selecione um serviço" : lang === "es" ? "Seleccione un servicio" : "Select a service"}</option>{services.map(service => <option key={service}>{service}</option>)}</select></label>}
      <label>{t.location}<input name="location" placeholder="e.g. Woburn, MA" required maxLength={200} /></label>
      {staffing && <label>{t.workers}<input name="workers" placeholder="e.g. 4 workers" maxLength={100} /></label>}
      <label>{t.schedule}<input name="schedule" maxLength={200} /></label>
      <label>{t.details}<textarea name="details" required placeholder={placeholder} rows={5} maxLength={3000} /></label>
    </div>
    <button className="primary black" type="submit" disabled={status === "pending"}>{status === "pending" ? t.sending : t.send}</button>
    {status === "error" && <p className="formError" role="alert">{t.error}</p>}
    <p className="staffingFormNote">{t.note} <a href="/privacy">{t.privacy}</a>.</p>
  </form>;
}
