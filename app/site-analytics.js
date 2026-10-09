"use client";
import Script from "next/script";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const measurementId = "G-6T9L05WTTZ";
const consentKey = "rema2-analytics-consent";
let analyticsReady = false;
function allowed() {
  try { return localStorage.getItem(consentKey) === "allow"; } catch { return false; }
}
export function trackEvent(name, parameters = {}) {
  if (!analyticsReady || !allowed() || typeof window.gtag !== "function") return;
  if (!["generate_lead", "contact_click"].includes(name)) return;
  window.gtag("event", name, { ...parameters, page_location: window.location.origin + window.location.pathname, page_path: window.location.pathname });
}

export default function SiteAnalytics() {
  const pathname = usePathname();
  const [consent, setConsent] = useState(null);
  const [showChoices, setShowChoices] = useState(false);
  const [ready, setReady] = useState(false);
  const [production, setProduction] = useState(false);
  useEffect(() => {
    setProduction(["rema2.com", "www.rema2.com"].includes(window.location.hostname));
    let saved = null;
    try { saved = localStorage.getItem(consentKey); } catch {}
    setConsent(saved);
    setShowChoices(!saved);
    function contactClick(event) {
      const anchor = event.target.closest?.("a[href]");
      const href = anchor?.getAttribute("href") || "";
      if (href.startsWith("tel:") || href.startsWith("mailto:")) trackEvent("contact_click", { contact_method: href.startsWith("tel:") ? "phone" : "email" });
    }
    document.addEventListener("click", contactClick);
    return () => document.removeEventListener("click", contactClick);
  }, []);
  useEffect(() => {
    if (!ready || consent !== "allow" || !allowed()) return;
    window.gtag("event", "page_view", { page_location: window.location.origin + pathname, page_path: pathname, page_title: document.title, page_referrer: document.referrer ? new URL(document.referrer).origin : "" });
  }, [pathname, ready, consent]);
  function choose(value) {
    try { localStorage.setItem(consentKey, value); } catch {}
    setConsent(value);
    setShowChoices(false);
    if (value === "decline") {
      analyticsReady = false;
      window[`ga-disable-${measurementId}`] = true;
      window.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      for (const cookie of document.cookie.split(";")) {
        const name = cookie.split("=")[0].trim();
        if (!name.startsWith("_ga")) continue;
        for (const domain of ["", ";domain=" + location.hostname, ";domain=.rema2.com"]) document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/${domain}`;
      }
    } else if (ready) {
      window[`ga-disable-${measurementId}`] = false;
      window.gtag?.("consent", "update", { analytics_storage: "granted" });
      analyticsReady = true;
    }
  }
  return <>
    {measurementId && production && consent === "allow" && <Script id="rema2-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" onReady={() => {
      if (!allowed() || !["rema2.com", "www.rema2.com"].includes(window.location.hostname)) return;
      window[`ga-disable-${measurementId}`] = false;
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag("consent", "default", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
      window.gtag("js", new Date());
      window.gtag("config", measurementId, { page_location: window.location.origin + window.location.pathname, page_referrer: document.referrer ? new URL(document.referrer).origin : "", send_page_view: false, allow_google_signals: false, allow_ad_personalization_signals: false });
      analyticsReady = true;
      setReady(true);
    }} />}
    {measurementId && (showChoices ? <aside className="analyticsConsent" aria-label="Analytics choices"><p>Optional analytics help us understand visits and requests. Your form details are not sent to Google Analytics. <a href="/privacy">Privacy notice</a></p><div><button type="button" onClick={() => choose("allow")}>Allow analytics</button><button type="button" onClick={() => choose("decline")}>Decline</button></div></aside> : <button className="analyticsPreferences" type="button" onClick={() => setShowChoices(true)}>Privacy choices</button>)}
  </>;
}
