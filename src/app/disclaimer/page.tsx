import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer",
  description:
    "Website disclaimer for djandykofficial.com — official website of DJ Andy'K.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
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
          Website Disclaimer
        </h1>

        <p className="text-sm text-muted-2 font-mono mt-4 mb-10">
          Last updated: 19 February 2026
        </p>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
          <p>
            This Disclaimer applies to the website operated by DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD
            (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;our&rdquo;). By using this website,
            you accept this Disclaimer. If you do not agree, please do not use the website.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1) Informational purposes only</h2>
            <p>
              All information on this website is provided for general informational purposes only.
              It does not constitute (and must not be relied upon as) legal, tax, financial,
              accounting, procurement, compliance, or other professional advice.
            </p>
            <p className="mt-2">
              You should obtain professional advice appropriate to your situation before taking any
              action based on information from this website.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2) No client relationship created</h2>
            <p>
              Your use of this website (including downloading materials, viewing documents, or
              submitting forms) does not create a client-consultant relationship with us. Any
              engagement, scope, deliverables, fees, timelines, and responsibilities are only
              established through a separate written agreement executed by both parties (including
              valid electronic signature where applicable).
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3) No guarantees / results may vary</h2>
            <p>
              Where we describe services such as business development, lead generation, outreach
              support, tender research, bid support, market entry, consulting, or similar services,
              you acknowledge that outcomes depend on multiple factors outside our control
              (including third-party responses, market conditions, procurement decisions, internal
              client processes, and timing).
            </p>
            <p className="mt-2">
              Unless expressly agreed in a signed contract, we do not guarantee results, including
              (without limitation) number of leads, conversion rates, revenue, procurement awards,
              shortlist selection, or any specific business outcome.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4) Accuracy, completeness and updates</h2>
            <p>
              We aim to keep information on this website accurate and up to date. However, we make
              no representations or warranties that the content is accurate, complete, reliable, or
              current at all times. Content may be changed, updated, or removed without notice.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5) Third-party links and tools</h2>
            <p>
              This website may include links to third-party websites or may integrate third-party
              services (for example, hosting, analytics, email delivery, document tools, payment
              providers). We do not control third-party services and are not responsible for their
              content, availability, security, or privacy practices. Your use of third-party services
              is at your own risk and subject to their terms.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6) Documents, templates and downloads</h2>
            <p>
              Any templates, example documents, workflows, or downloadable materials are provided
              &ldquo;as is&rdquo; and may require adaptation for your specific circumstances. Where
              documents relate to services, they may be drafts, examples, or non-binding versions
              unless expressly stated otherwise.
            </p>
            <p className="mt-2">
              If you are provided with a client-specific document link or access, you are
              responsible for keeping it confidential and not sharing it with unauthorised parties.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7) Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, we will not be liable for any loss or damage
              arising from or in connection with your use of (or inability to use) this website,
              including any reliance on its content.
            </p>
            <p className="mt-2">
              This includes (without limitation) any indirect or consequential loss, loss of
              profits, loss of revenue, loss of business, loss of data, loss of goodwill, or
              business interruption.
            </p>
            <p className="mt-2">
              Nothing in this Disclaimer excludes or limits liability that cannot be excluded under
              applicable law, including liability for death or personal injury caused by negligence,
              fraud, or fraudulent misrepresentation.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8) Governing law</h2>
            <p>
              This Disclaimer is governed by the laws of England and Wales, and any disputes shall
              be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">9) Contact</h2>
            <p>
              If you have questions about this Disclaimer, contact us at:
              ceo@andykgroup.com
            </p>
          </section>
        </article>
      </div>
    </main>
      <Footer />
    </>
  );
}
