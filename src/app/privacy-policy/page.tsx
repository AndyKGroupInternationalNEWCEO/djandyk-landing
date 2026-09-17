import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for djandykofficial.com — official website of DJ Andy'K, released under ANDY'K GROUP INTERNATIONAL LTD.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
      <div className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to home
        </Link>

        <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
          Privacy Policy
        </h1>

        <div className="mt-3 mb-10">
          <p className="text-sm text-muted-2 font-mono">DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD</p>
          <p className="text-sm text-muted-2 font-mono">Registered Company Number: 16453500</p>
          <p className="text-sm text-muted-2 font-mono">86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
          <p className="text-sm text-muted-2 font-mono">Email: ceo@andykgroup.com</p>
        </div>

        <p className="text-sm text-muted-2 font-mono mt-2">
          DJ Andy&apos;K is an artist name of Andrej Kneisl. Music released under ANDY&apos;K GROUP INTERNATIONAL LTD (UK Company No. 16453500, 86&ndash;90 Paul Street, London, EC2A 4NE).
        </p>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
          {/* Introduction */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Introduction</h2>
            <p>
              DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD (&ldquo;we&rdquo;, &ldquo;us&rdquo;,
              &ldquo;our&rdquo;) is committed to protecting and respecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard personal data in
              connection with our B2G and B2B lead generation and outreach services conducted
              across multiple languages and regions.
            </p>
            <p className="mt-2">
              We comply fully with the UK General Data Protection Regulation (UK GDPR) and the
              UK Data Protection Act 2018.
            </p>
          </section>

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Data We Collect</h2>
            <p>
              We collect personal data necessary for B2B lead generation and outreach, including
              but not limited to:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Business contact details (name, job title, company name, business email, phone number)</li>
              <li>Communication content (emails, call recordings, meeting notes)</li>
              <li>Technical data (IP addresses, device information, browsing behavior when you visit our website)</li>
              <li>Language preferences and regional data for outreach customization</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. How We Use Your Data</h2>
            <p>We use your personal data to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Identify and contact potential business clients and partners</li>
              <li>Customize communication and outreach based on language and region</li>
              <li>Provide, manage, and improve our B2B lead generation and outreach services</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Legal Basis for Processing</h2>
            <p>Our processing of your data is based on one or more of the following:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your consent (where applicable)</li>
              <li>Legitimate interests: To conduct and improve our business outreach activities, provided this does not override your rights</li>
              <li>Compliance with legal obligations</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. Data Sharing</h2>
            <p>We do not sell or rent your personal data. We may share data with:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Trusted third-party service providers (e.g., CRM platforms, communication tools)</li>
              <li>Regulatory authorities if required by law</li>
            </ul>
            <p className="mt-2">
              All third parties are required to process your data securely and in accordance with
              GDPR and UK Data Protection laws.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. International Transfers</h2>
            <p>
              As we operate in multiple countries and languages, your data may be transferred
              outside the UK and European Economic Area (EEA). When this happens, we ensure
              appropriate safeguards are in place to protect your data according to GDPR standards.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Data Retention</h2>
            <p>
              We retain your personal data only for as long as necessary to fulfill the purposes
              outlined, or as required by law. When data is no longer needed, it will be securely
              deleted or anonymized.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your data</li>
              <li>Object to or restrict processing</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time (where processing is based on consent)</li>
              <li>Lodge a complaint with the UK Information Commissioner&apos;s Office (ICO)</li>
            </ul>
            <p className="mt-2">
              To exercise any of these rights, please contact us at:
              ceo@andykgroup.com.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your data
              from unauthorized access, loss, or destruction.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">9. Cookies &amp; Tracking</h2>
            <p>
              Our website uses cookies to improve user experience and gather technical data. You
              can manage cookie preferences via your browser settings or our{" "}
              <Link href="/cookies-policy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                cookie consent banner
              </Link>.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              significant changes via our website or direct communication.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">11. Contact</h2>
            <p>
              For questions or concerns about this Privacy Policy or our data practices, please
              contact:
            </p>
            <div className="mt-3 text-sm font-mono text-muted-2 space-y-0.5">
              <p className="font-medium text-foreground">DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD</p>
              <p>Email: ceo@andykgroup.com</p>
              <p>Address: 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
            </div>
          </section>
        </article>
      </div>
    </main>
      <Footer />
    </>
  );
}
