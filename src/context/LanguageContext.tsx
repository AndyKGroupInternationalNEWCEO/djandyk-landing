"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";
import type { Locale, TranslationKeys } from "@/lib/translations";
import { translations } from "@/lib/translations";

const COOKIE_KEY = "andy-k-language";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year
const SUPPORTED_LOCALES: Locale[] = ["en", "es", "sk", "de"];

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

function setCookieValue(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=${COOKIE_MAX_AGE};SameSite=Lax`;
}

/** Detect the best matching locale from the browser's language preferences */
function detectBrowserLocale(): Locale | null {
  if (typeof navigator === "undefined") return null;
  const languages = navigator.languages ?? [navigator.language];
  for (const lang of languages) {
    const code = lang.toLowerCase().split("-")[0] as Locale;
    if (SUPPORTED_LOCALES.includes(code)) {
      return code;
    }
  }
  return null;
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  // Load from cookie on mount, falling back to browser preference
  useEffect(() => {
    const saved = getCookie(COOKIE_KEY) as Locale | null;
    if (saved && saved in translations) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- browser-only storage must be read after mount to avoid a hydration mismatch
      setLocaleState(saved);
    } else {
      const detected = detectBrowserLocale();
      if (detected) {
        setLocaleState(detected);
      }
    }
    setMounted(true);
  }, []);

  // Update cookie and HTML lang attribute when locale changes
  useEffect(() => {
    if (mounted) {
      setCookieValue(COOKIE_KEY, locale);
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
