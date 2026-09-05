"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { NAV_SERVICES, COMPANY } from "@/lib/data";
import type { Locale } from "@/lib/translations";
import { useTheme } from "@/context/ThemeContext";

function ChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
      <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function resolveHref(href: string, isHome: boolean): string {
  if (isHome) return href;
  if (href.startsWith("#")) return `/${href}`;
  return href;
}

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { locale, setLocale, t } = useLanguage();
  const { theme, toggle: toggleTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const [mobilePlatformsOpen, setMobilePlatformsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const navLinks = [
    { label: t.nav.about, href: "#about" },
    { label: t.nav.music, href: "#music" },
    { label: t.nav.albums, href: "#discography" },
    { label: "Sets", href: "#sets" },
    { label: t.nav.contact, href: "#contact" },
    { label: t.nav.press, href: "/press" },
    { label: "Lab", href: "https://lab.djandykofficial.com" },
  ];

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setPlatformsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) setMobileOpen(false);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setPlatformsOpen(true);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setPlatformsOpen(false), 150);
  }

  function closeMobile() {
    setMobileOpen(false);
    setMobilePlatformsOpen(false);
  }

  return (
  <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-grid-300">
      <div className="relative max-w-[1200px] mx-auto flex items-center justify-between px-6 sm:px-8 h-[60px]">

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <a href={isHome ? "#hero" : "/"} className="shrink-0 flex items-center gap-2">
          <img src="/logo.png" alt="DJ Andy'K official logo" className="h-8 w-8 object-contain nav-logo" />
          <span className="font-bold text-foreground tracking-tight text-base">DJ Andy&apos;K</span>
        </a>

        {/* Desktop nav — centered */}
        <div className="hidden md:flex items-center gap-7 text-sm text-muted absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href, isHome)}
              className="hover:text-foreground transition-colors"
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}

          {/* Platforms dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              onClick={() => setPlatformsOpen(true)}
              className="flex items-center gap-1 hover:text-foreground transition-colors"
            >
              {t.nav.listenNow}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${platformsOpen ? "rotate-180" : ""}`} />
            </button>

            {platformsOpen && (
              <div className="absolute top-full right-0 mt-2 w-[400px] bg-white rounded-xl border border-grid-300 shadow-lg p-5 grid grid-cols-2 gap-5">
                {NAV_SERVICES.map((group) => (
                  <div key={group.group}>
                    <p className="text-[10px] uppercase tracking-widest text-muted-2 font-medium mb-2">
                      {group.group}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          {...(item.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                          onClick={() => setPlatformsOpen(false)}
                          className="block p-2 -mx-1 rounded-lg hover:bg-bg-light transition-colors group/item"
                        >
                          <span className="text-sm font-medium text-foreground group-hover/item:text-highlight transition-colors">
                            {item.label}
                          </span>
                          <span className="block text-xs text-muted-2 mt-0.5">
                            {item.description}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right: language + theme toggle + CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="w-8 h-8 flex items-center justify-center rounded-full border border-highlight text-sm hover:bg-soft-green transition-colors"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            aria-label="Select language"
            className="text-xs text-muted bg-transparent border border-grid-500 rounded px-1.5 py-1 cursor-pointer hover:border-grid-700 transition-colors focus:outline-none w-[52px]"
          >
            <option value="en">EN</option>
            <option value="es">ES</option>
            <option value="sk">SK</option>
            <option value="de">DE</option>
          </select>
          <a
            href={COMPANY.hyperfollow}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 px-4 text-xs font-medium bg-highlight text-white hover:bg-deep-teal transition-colors rounded"
          >
            {t.nav.listenNow}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-foreground"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
      </div>
    </nav>

    {/* Mobile menu — rendered outside <nav> to avoid backdrop-filter containing-block bug
        (backdrop-blur-sm creates a stacking context that traps fixed children) */}
    {mobileOpen && (
      <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 z-[60] bg-white overflow-y-auto">
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href, isHome)}
              onClick={closeMobile}
              className="block py-3 text-base font-medium text-foreground border-b border-grid-300"
              {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          ))}

          {/* Platforms accordion */}
          <div className="border-b border-grid-300">
            <button
              onClick={() => setMobilePlatformsOpen(!mobilePlatformsOpen)}
              className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground"
            >
              {t.nav.listenNow}
              <ChevronDown className={`w-5 h-5 text-muted transition-transform duration-200 ${mobilePlatformsOpen ? "rotate-180" : ""}`} />
            </button>

            {mobilePlatformsOpen && (
              <div className="pb-4 space-y-4">
                {NAV_SERVICES.map((group) => (
                  <div key={group.group}>
                    <p className="text-[10px] uppercase tracking-widest text-muted-2 font-medium mb-2 px-2">
                      {group.group}
                    </p>
                    <div className="space-y-1">
                      {group.items.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          {...(item.href.startsWith("/") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                          onClick={closeMobile}
                          className="block px-3 py-2.5 rounded-lg hover:bg-bg-light transition-colors"
                        >
                          <span className="text-sm font-medium text-foreground">{item.label}</span>
                          <span className="block text-xs text-muted-2 mt-0.5">{item.description}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Language + theme + CTA */}
          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-highlight text-sm hover:bg-soft-green transition-colors"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <select
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              aria-label="Select language"
              className="text-xs text-muted bg-transparent border border-grid-500 px-2 py-1.5 cursor-pointer focus:outline-none"
            >
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="sk">SK</option>
              <option value="de">DE</option>
            </select>
            <a
              href={COMPANY.hyperfollow}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-9 px-5 text-sm font-medium bg-highlight text-white hover:bg-deep-teal transition-colors rounded"
            >
              {t.nav.listenNow}
            </a>
          </div>
        </div>
      </div>
    )}
  </>
  );
}
