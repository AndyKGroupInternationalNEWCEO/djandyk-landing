"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

const CONSENT_KEY = "andy-k-cookie-consent";

interface CookieConsent {
  necessary: true;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
}

const DEFAULT_CONSENT: CookieConsent = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

function getStoredConsent(): CookieConsent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as CookieConsent;
  } catch {
    return null;
  }
}

function storeConsent(consent: CookieConsent) {
  localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
}

const CATEGORIES = [
  {
    key: "necessary" as const,
    label: "Strictly necessary",
    tag: "Always on",
    description:
      "Required for security, network management, and core functionality (including secure areas and form submission).",
    locked: true,
    cookies: [
      { name: "cookie_consent_status", provider: "djandykofficial.com", purpose: "Stores your cookie consent choice", duration: "6 months" },
      { name: "cookie_consent_preferences", provider: "djandykofficial.com", purpose: "Stores category preferences", duration: "6 months" },
      { name: "csrf_token", provider: "djandykofficial.com", purpose: "CSRF protection for forms", duration: "Session" },
      { name: "session_id", provider: "djandykofficial.com", purpose: "Maintains session state", duration: "Session" },
    ],
  },
  {
    key: "analytics" as const,
    label: "Performance & analytics",
    tag: "Optional",
    description:
      "Helps us understand how visitors use the website (e.g., pages visited, traffic sources, time spent). Only activated with your consent.",
    locked: false,
    cookies: [
      { name: "_ga", provider: "Google Analytics", purpose: "Distinguishes users", duration: "2 years" },
      { name: "_ga_<container-id>", provider: "Google Analytics", purpose: "Persists session state for GA4", duration: "2 years" },
      { name: "_gid", provider: "Google Analytics", purpose: "Distinguishes users", duration: "24 hours" },
      { name: "_gat / _gat_gtag_*", provider: "Google Analytics", purpose: "Throttles request rate", duration: "1 minute" },
    ],
  },
  {
    key: "functional" as const,
    label: "Functional",
    tag: "Optional",
    description:
      "Remembers your preferences (e.g., language, region, saved settings, login session if applicable).",
    locked: false,
    cookies: [
      { name: "site_language", provider: "djandykofficial.com", purpose: "Saves language preference", duration: "12 months" },
      { name: "region_preference", provider: "djandykofficial.com", purpose: "Saves region selection", duration: "12 months" },
    ],
  },
  {
    key: "marketing" as const,
    label: "Marketing & tracking",
    tag: "Optional",
    description:
      "Used for campaign measurement and remarketing. Only used with your explicit consent (if enabled).",
    locked: false,
    cookies: [
      { name: "_fbp", provider: "Meta (Facebook)", purpose: "Browser ID for ads & remarketing", duration: "3 months" },
      { name: "_fbc", provider: "Meta (Facebook)", purpose: "Stores click ID from ads", duration: "3 months" },
    ],
  },
];

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [consent, setConsent] = useState<CookieConsent>(DEFAULT_CONSENT);

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only storage must be read after mount to avoid a hydration mismatch
      setVisible(true);
    }
  }, []);

  const save = useCallback((c: CookieConsent) => {
    storeConsent(c);
    setVisible(false);
    setShowPreferences(false);
  }, []);

  const acceptAll = useCallback(() => {
    save({ necessary: true, analytics: true, functional: true, marketing: true });
  }, [save]);

  const rejectNonEssential = useCallback(() => {
    save(DEFAULT_CONSENT);
  }, [save]);

  const savePreferences = useCallback(() => {
    save(consent);
  }, [save, consent]);

  const toggle = useCallback(
    (key: keyof Omit<CookieConsent, "necessary">) => {
      setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
    },
    []
  );

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-3 md:p-6">
      <div className={`max-w-[520px] mx-auto md:mx-0 md:ml-auto bg-white border border-grid-500 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.1)] overflow-hidden md:max-h-none ${showPreferences ? "max-h-[90vh] overflow-y-auto" : "max-h-[200px]"}`}>
        {!showPreferences ? (
          /* ── Layer 1: Banner ── */
          <div className="p-3 md:p-5">
            <p className="text-sm text-foreground font-medium mb-1">
              We value your privacy
            </p>
            <p className="text-[13px] text-muted leading-relaxed hidden md:block">
              We use cookies to make this website work, improve your experience,
              and (with your consent) measure performance and marketing
              effectiveness. You can accept all cookies, reject non-essential
              cookies, or manage your preferences at any time.
            </p>
            <p className="text-[13px] text-muted leading-relaxed md:hidden">
              We use cookies to improve your experience. Accept or reject below.
            </p>

            <div className="flex flex-wrap gap-2 mt-2 md:mt-4">
              <button
                onClick={acceptAll}
                className="btn-primary-gradient relative px-4 py-2.5 text-[13px] font-medium text-foreground cursor-pointer"
              >
                <span className="relative z-10">Accept all</span>
              </button>
              <button
                onClick={rejectNonEssential}
                className="btn-secondary px-4 py-2.5 text-[13px] font-medium text-muted cursor-pointer"
              >
                Reject non-essential
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2.5 text-[13px] font-medium text-muted-2 hover:text-muted transition-colors cursor-pointer"
              >
                Customize
              </button>
            </div>

            <div className="hidden md:flex gap-4 mt-3">
              <Link
                href="/cookies-policy"
                className="text-[12px] text-muted-2 underline underline-offset-2 hover:text-muted transition-colors"
              >
                Cookies Policy
              </Link>
              <Link
                href="/privacy-policy"
                className="text-[12px] text-muted-2 underline underline-offset-2 hover:text-muted transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        ) : (
          /* ── Layer 2: Preferences ── */
          <div className="p-5">
            <p className="text-sm text-foreground font-medium mb-1">
              Cookie preferences
            </p>
            <p className="text-[12px] text-muted-2 leading-relaxed mb-4">
              Choose which cookies you allow. Strictly necessary cookies are
              always on because they are essential for the website to function.
              You can change your preferences at any time.
            </p>

            <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
              {CATEGORIES.map((cat) => {
                const isExpanded = expanded === cat.key;
                return (
                  <div
                    key={cat.key}
                    className="border border-grid-300"
                  >
                    <div className="flex items-start justify-between gap-3 p-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-medium text-foreground">
                            {cat.label}
                          </p>
                          <span className={`text-[10px] font-mono px-1.5 py-0.5 ${
                            cat.locked
                              ? "bg-highlight/10 text-highlight"
                              : "bg-grid-300 text-muted-2"
                          }`}>
                            {cat.tag}
                          </span>
                        </div>
                        <p className="text-[12px] text-muted-2 mt-0.5 leading-relaxed">
                          {cat.description}
                        </p>
                        <button
                          onClick={() => setExpanded(isExpanded ? null : cat.key)}
                          className="text-[11px] text-muted-2 hover:text-muted transition-colors mt-1 cursor-pointer underline underline-offset-2"
                        >
                          {isExpanded ? "Hide cookies" : `View cookies (${cat.cookies.length})`}
                        </button>
                      </div>
                      <button
                        disabled={cat.locked}
                        onClick={() =>
                          !cat.locked &&
                          toggle(cat.key as keyof Omit<CookieConsent, "necessary">)
                        }
                        className={`relative shrink-0 w-9 h-5 mt-0.5 transition-colors ${
                          cat.locked || consent[cat.key]
                            ? "bg-highlight"
                            : "bg-grid-500"
                        } ${cat.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                        aria-label={`Toggle ${cat.label}`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white toggle-knob shadow-sm transition-transform ${
                            cat.locked || consent[cat.key]
                              ? "translate-x-4"
                              : "translate-x-0"
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable cookie list */}
                    {isExpanded && (
                      <div className="border-t border-grid-300 px-3 py-2">
                        <table className="w-full text-[11px]">
                          <thead>
                            <tr className="text-left text-muted-2">
                              <th className="pb-1 pr-2 font-medium">Cookie</th>
                              <th className="pb-1 pr-2 font-medium">Provider</th>
                              <th className="pb-1 pr-2 font-medium">Purpose</th>
                              <th className="pb-1 font-medium">Duration</th>
                            </tr>
                          </thead>
                          <tbody className="text-muted">
                            {cat.cookies.map((c) => (
                              <tr key={c.name} className="border-t border-grid-300/50">
                                <td className="py-1 pr-2 font-mono text-foreground whitespace-nowrap">{c.name}</td>
                                <td className="py-1 pr-2 whitespace-nowrap">{c.provider}</td>
                                <td className="py-1 pr-2">{c.purpose}</td>
                                <td className="py-1 whitespace-nowrap">{c.duration}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <button
                onClick={savePreferences}
                className="btn-primary-gradient relative px-4 py-2.5 text-[13px] font-medium text-foreground cursor-pointer"
              >
                <span className="relative z-10">Save preferences</span>
              </button>
              <button
                onClick={acceptAll}
                className="btn-secondary px-4 py-2.5 text-[13px] font-medium text-muted cursor-pointer"
              >
                Accept all
              </button>
              <button
                onClick={rejectNonEssential}
                className="px-4 py-2.5 text-[13px] font-medium text-muted-2 hover:text-muted transition-colors cursor-pointer"
              >
                Reject non-essential
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
