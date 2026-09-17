import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Cookies Policy",
  description:
    "Cookies policy for djandykofficial.com — how DJ Andy'K uses cookies and tracking technologies.",
  alternates: { canonical: "/cookies-policy" },
};

export default function CookiesPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
      <div className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="shrink-0"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Cookies Policy
        </h1>

        <div className="mt-3 mb-10">
          <p className="text-sm text-muted-2 font-mono">
            DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
          </p>
          <p className="text-sm text-muted-2 font-mono">
            Company Number: 16453500
          </p>
          <p className="text-sm text-muted-2 font-mono">
            86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom
          </p>
          <p className="text-sm text-muted-2 font-mono">
            Email: ceo@andykgroup.com
          </p>
          <p className="text-sm text-muted-2 font-mono mt-2">
            Last Updated: 20 February 2026
          </p>
        </div>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
          {/* 1. Introduction */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              1. Introduction
            </h2>
            <p>
              This Cookies Policy explains how DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
              (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;) uses
              cookies and similar technologies when you visit our website.
            </p>
            <p className="mt-2">
              This policy should be read together with our Privacy Policy.
            </p>
            <p className="mt-2">
              We comply with the UK GDPR, the Data Protection Act 2018, and the
              Privacy and Electronic Communications Regulations (PECR).
            </p>
          </section>

          {/* 2. What Are Cookies? */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              2. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device (computer,
              tablet, smartphone) when you visit a website. They help websites
              function properly, improve user experience, and provide analytical
              information.
            </p>
            <p className="mt-3">Cookies may be:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Session cookies</strong> &mdash; deleted when you close
                your browser
              </li>
              <li>
                <strong>Persistent cookies</strong> &mdash; remain stored for a
                defined period
              </li>
              <li>
                <strong>First-party cookies</strong> &mdash; set by us
              </li>
              <li>
                <strong>Third-party cookies</strong> &mdash; set by external
                services
              </li>
            </ul>
          </section>

          {/* 3. Types of Cookies We Use */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              3. Types of Cookies We Use
            </h2>

            <h3 className="text-base font-medium text-foreground mt-5 mb-2">
              A. Strictly Necessary Cookies
            </h3>
            <p>
              These cookies are essential for the operation of our website. They
              enable core functionalities such as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Security</li>
              <li>Network management</li>
              <li>Access to secure areas</li>
              <li>Form submission</li>
            </ul>
            <p className="mt-2 text-sm text-muted-2">
              These cookies do not require your consent.
            </p>

            <h3 className="text-base font-medium text-foreground mt-5 mb-2">
              B. Performance &amp; Analytics Cookies
            </h3>
            <p>
              These cookies help us understand how visitors use our website by
              collecting anonymous information such as:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Number of visitors</li>
              <li>Pages visited</li>
              <li>Traffic sources</li>
              <li>Time spent on pages</li>
            </ul>
            <p className="mt-2">We may use tools such as:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1">
              <li>Google Analytics (or equivalent)</li>
              <li>Server log monitoring tools</li>
            </ul>
            <p className="mt-2 text-sm text-muted-2">
              These cookies are only activated with your consent.
            </p>

            <h3 className="text-base font-medium text-foreground mt-5 mb-2">
              C. Functional Cookies
            </h3>
            <p>
              These cookies allow the website to remember:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Language preferences</li>
              <li>Region selection</li>
              <li>Saved settings</li>
              <li>Login session (if applicable)</li>
            </ul>
            <p className="mt-2 text-sm text-muted-2">
              They improve usability but are not strictly necessary.
            </p>

            <h3 className="text-base font-medium text-foreground mt-5 mb-2">
              D. Marketing &amp; Tracking Cookies
            </h3>
            <p>If used, these cookies may:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Track browsing behavior</li>
              <li>Measure campaign performance</li>
              <li>Enable remarketing</li>
            </ul>
            <p className="mt-2 text-sm text-muted-2">
              We only use marketing cookies with your explicit consent.
            </p>
          </section>

          {/* 4. Legal Basis */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              4. Legal Basis for Using Cookies
            </h2>
            <p>Under UK GDPR and PECR:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Strictly necessary cookies are used based on legitimate interest.
              </li>
              <li>
                All non-essential cookies require your prior consent.
              </li>
            </ul>
            <p className="mt-2">
              You may withdraw your consent at any time.
            </p>
          </section>

          {/* 5. Managing Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              5. Managing Cookies
            </h2>
            <p>You can manage cookies in the following ways:</p>

            <h3 className="text-base font-medium text-foreground mt-4 mb-2">
              A. Cookie Banner
            </h3>
            <p>
              When you first visit our website, you will be presented with a
              cookie consent banner allowing you to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Accept all cookies</li>
              <li>Reject non-essential cookies</li>
              <li>Customize preferences</li>
            </ul>

            <h3 className="text-base font-medium text-foreground mt-4 mb-2">
              B. Browser Settings
            </h3>
            <p>
              You can also control cookies through your browser settings:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Block all cookies</li>
              <li>Delete stored cookies</li>
              <li>Set preferences per website</li>
            </ul>
            <p className="mt-2 text-sm text-muted-2">
              Note: Blocking essential cookies may affect website functionality.
            </p>
          </section>

          {/* Cookie List Tables */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              Cookie List
            </h2>
            <p className="text-sm text-muted-2 mb-6">
              Below is a list of the cookies we use, grouped by category. Keep
              in mind this is a starter list &mdash; only cookies that are
              actively in use on this website apply.
            </p>

            {/* A) Strictly Necessary */}
            <h3 className="text-base font-medium text-foreground mb-3">
              A) Strictly Necessary Cookies
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[13px] border border-grid-300">
                <thead>
                  <tr className="bg-grid-300/40 text-left text-foreground">
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Cookie name</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Provider</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Purpose</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Type</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">cookie_consent_status</td>
                    <td className="px-3 py-2">djandykofficial.com</td>
                    <td className="px-3 py-2">Stores your cookie consent choice (accept/reject/preferences).</td>
                    <td className="px-3 py-2">First-party</td>
                    <td className="px-3 py-2">6 months</td>
                  </tr>
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">cookie_consent_preferences</td>
                    <td className="px-3 py-2">djandykofficial.com</td>
                    <td className="px-3 py-2">Stores category preferences (analytics/functional/marketing).</td>
                    <td className="px-3 py-2">First-party</td>
                    <td className="px-3 py-2">6 months</td>
                  </tr>
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">csrf_token</td>
                    <td className="px-3 py-2">djandykofficial.com</td>
                    <td className="px-3 py-2">Security cookie to protect forms from abuse (CSRF protection).</td>
                    <td className="px-3 py-2">First-party</td>
                    <td className="px-3 py-2">Session</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">session_id</td>
                    <td className="px-3 py-2">djandykofficial.com</td>
                    <td className="px-3 py-2">Maintains session state (e.g., login session if applicable).</td>
                    <td className="px-3 py-2">First-party</td>
                    <td className="px-3 py-2">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* B) Performance & Analytics */}
            <h3 className="text-base font-medium text-foreground mb-3">
              B) Performance &amp; Analytics Cookies (GA4)
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[13px] border border-grid-300">
                <thead>
                  <tr className="bg-grid-300/40 text-left text-foreground">
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Cookie name</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Provider</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Purpose</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Type</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">_ga</td>
                    <td className="px-3 py-2">Google Analytics</td>
                    <td className="px-3 py-2">Distinguishes users for analytics.</td>
                    <td className="px-3 py-2">Third-party</td>
                    <td className="px-3 py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">_ga_&lt;container-id&gt;</td>
                    <td className="px-3 py-2">Google Analytics</td>
                    <td className="px-3 py-2">Persists session state for GA4.</td>
                    <td className="px-3 py-2">Third-party</td>
                    <td className="px-3 py-2">2 years</td>
                  </tr>
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">_gid</td>
                    <td className="px-3 py-2">Google Analytics</td>
                    <td className="px-3 py-2">Distinguishes users for analytics.</td>
                    <td className="px-3 py-2">Third-party</td>
                    <td className="px-3 py-2">24 hours</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">_gat / _gat_gtag_*</td>
                    <td className="px-3 py-2">Google Analytics</td>
                    <td className="px-3 py-2">Throttles request rate.</td>
                    <td className="px-3 py-2">Third-party</td>
                    <td className="px-3 py-2">1 minute</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* C) Functional */}
            <h3 className="text-base font-medium text-foreground mb-3">
              C) Functional Cookies
            </h3>
            <div className="overflow-x-auto mb-8">
              <table className="w-full text-[13px] border border-grid-300">
                <thead>
                  <tr className="bg-grid-300/40 text-left text-foreground">
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Cookie name</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Provider</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Purpose</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Type</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">site_language</td>
                    <td className="px-3 py-2">djandykofficial.com</td>
                    <td className="px-3 py-2">Saves language preference.</td>
                    <td className="px-3 py-2">First-party</td>
                    <td className="px-3 py-2">12 months</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">region_preference</td>
                    <td className="px-3 py-2">djandykofficial.com</td>
                    <td className="px-3 py-2">Saves region selection.</td>
                    <td className="px-3 py-2">First-party</td>
                    <td className="px-3 py-2">12 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* D) Marketing & Tracking */}
            <h3 className="text-base font-medium text-foreground mb-3">
              D) Marketing &amp; Tracking Cookies (Meta Pixel)
            </h3>
            <div className="overflow-x-auto mb-4">
              <table className="w-full text-[13px] border border-grid-300">
                <thead>
                  <tr className="bg-grid-300/40 text-left text-foreground">
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Cookie name</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Provider</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Purpose</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Type</th>
                    <th className="px-3 py-2 font-medium border-b border-grid-300">Duration</th>
                  </tr>
                </thead>
                <tbody className="text-muted">
                  <tr className="border-b border-grid-300/50">
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">_fbp</td>
                    <td className="px-3 py-2">Meta (Facebook)</td>
                    <td className="px-3 py-2">Stores browser ID to deliver/measure ads and remarketing (if enabled).</td>
                    <td className="px-3 py-2">Third-party</td>
                    <td className="px-3 py-2">3 months</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 font-mono text-foreground text-[12px]">_fbc</td>
                    <td className="px-3 py-2">Meta (Facebook)</td>
                    <td className="px-3 py-2">Stores click ID from ads (if enabled).</td>
                    <td className="px-3 py-2">Third-party</td>
                    <td className="px-3 py-2">3 months</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm text-muted-2 italic">
              Analytics and marketing cookies are only activated after you
              provide consent via the cookie banner.
            </p>
          </section>

          {/* 6. Third-Party Cookies */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              6. Third-Party Cookies
            </h2>
            <p>
              Some cookies may be set by third-party services integrated into our
              website, including:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Payment processors</li>
              <li>CRM systems</li>
              <li>Analytics tools</li>
              <li>Embedded content providers</li>
            </ul>
            <p className="mt-2">
              We ensure these providers comply with GDPR standards and process
              data securely.
            </p>
          </section>

          {/* 7. Data Retention */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              7. Data Retention
            </h2>
            <p>
              Cookies are stored for varying durations depending on their type:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                <strong>Session cookies:</strong> deleted after browser session
                ends
              </li>
              <li>
                <strong>Persistent cookies:</strong> stored for up to 24 months
                (or as required for functionality)
              </li>
            </ul>
          </section>

          {/* 8. Updates */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              8. Updates to This Policy
            </h2>
            <p>
              We may update this Cookies Policy from time to time. Any
              significant changes will be published on our website.
            </p>
          </section>

          {/* 9. Contact */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">
              9. Contact
            </h2>
            <p>
              For any questions regarding this Cookies Policy, please contact:
            </p>
            <div className="mt-3 text-sm font-mono text-muted-2 space-y-0.5">
              <p className="font-medium text-foreground">
                DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
              </p>
              <p>Email: ceo@andykgroup.com</p>
              <p>
                Address: 86&ndash;90 Paul Street, London, EC2A 4NE, United
                Kingdom
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
      <Footer />
    </>
  );
}
