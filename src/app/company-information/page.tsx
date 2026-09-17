import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Company Information",
  description:
    "Company information for ANDY'K GROUP INTERNATIONAL LTD — official record label of DJ Andy'K.",
  alternates: { canonical: "/company-information" },
};

export default function CompanyInformationPage() {
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
          Imprint / Company Information
        </h1>
        <p className="text-sm text-muted-2 font-mono">(Legal Notice)</p>

        <p className="text-sm text-muted-2 font-mono mt-4 mb-10">
          Last updated: 19 February 2026
        </p>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
          <p>
            This website is operated by DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;).
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1) Company details</h2>
            <div className="space-y-1">
              <p><strong className="text-foreground">Legal name:</strong> DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD</p>
              <p><strong className="text-foreground">Company type:</strong> Private company limited by shares (United Kingdom)</p>
              <p><strong className="text-foreground">Company number:</strong> 16453500</p>
              <p><strong className="text-foreground">Registered office:</strong> 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2) Contact</h2>
            <div className="space-y-1">
              <p><strong className="text-foreground">Email:</strong> ceo@andykgroup.com</p>
              <p><strong className="text-foreground">Website:</strong> djandykofficial.com</p>
            </div>
          </section>

          {/* Artist */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">Artist information</h2>
            <p>
              DJ Andy&apos;K is an artist name of Andrej Kneisl. Music is released under
              ANDY&apos;K GROUP INTERNATIONAL LTD (UK Company No. 16453500,
              86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom).
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3) Business information</h2>
            <p>
              Unless otherwise stated, the content and services described on this website are
              provided by DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4) Intellectual property</h2>
            <p>
              All content on this website (including text, branding, logos, templates, layouts,
              documents, and materials) is owned by or licensed to DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
              and is protected by applicable intellectual property laws. Unauthorised copying,
              reproduction, distribution, or commercial reuse is prohibited.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5) Liability notice</h2>
            <p>
              We make reasonable efforts to keep the content on this website accurate and up to
              date. However, we do not guarantee that all information is complete, accurate, or
              current at all times. Use of this website and reliance on its content is at your own
              risk.
            </p>
            <p className="mt-2">
              For more information, please refer to our{" "}
              <Link href="/terms-and-conditions" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Website Terms &amp; Conditions
              </Link>{" "}
              and{" "}
              <Link href="/disclaimer" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Disclaimer
              </Link>.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6) Privacy and cookies</h2>
            <p>
              Information about how we process personal data is provided in our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>.
              Information about cookies and similar technologies is provided in our{" "}
              <Link href="/cookies-policy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Cookies Policy
              </Link>.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7) Governing law</h2>
            <p>
              This Legal Notice is governed by the laws of England and Wales and any disputes
              shall be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>
        </article>
      </div>
    </main>
      <Footer />
    </>
  );
}
