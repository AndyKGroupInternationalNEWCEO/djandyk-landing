import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Terms and conditions for djandykofficial.com \u2014 official website of DJ Andy'K.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsAndConditionsPage() {
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
          Website Terms &amp; Conditions
        </h1>
        <p className="text-sm text-muted-2 font-mono">(Terms of Use)</p>

        <p className="text-sm text-muted-2 font-mono mt-4 mb-10">
          Last updated: 19 February 2026
        </p>

        <div className="border-t border-grid-300" />

        <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
          <p>
            These Website Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and
            use of the website operated by DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD (&ldquo;we&rdquo;,
            &ldquo;us&rdquo;, &ldquo;our&rdquo;).
          </p>
          <p>
            By accessing or using this website, you confirm that you have read, understood, and
            agree to be bound by these Terms. If you do not agree, please do not use the website.
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">1. Company details</h2>
            <div className="space-y-1">
              <p><strong className="text-foreground">Company name:</strong> DJ Andy&apos;K / ANDY&apos;K GROUP INTERNATIONAL LTD</p>
              <p><strong className="text-foreground">Company number:</strong> 16453500</p>
              <p><strong className="text-foreground">Registered office:</strong> 86&ndash;90 Paul Street, London, EC2A 4NE, United Kingdom</p>
              <p><strong className="text-foreground">Email:</strong> ceo@andykgroup.com</p>
              <p><strong className="text-foreground">Website:</strong> djandykofficial.com</p>
            </div>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">2. Purpose of the website</h2>
            <p>
              Our website provides information about our services and may provide access to
              digital documents and workflows (for example: questionnaires, proposals, strategy
              documents, contracts, invoices, onboarding materials, or similar
              &ldquo;Documents&rdquo;).
            </p>
            <p className="mt-2">
              Information on this website is provided for general informational purposes only and
              does not constitute legal, tax, financial, or other professional advice.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">3. Eligibility and acceptable use</h2>
            <p>You agree that you will:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>use the website only for lawful purposes;</li>
              <li>not misuse the website, attempt to gain unauthorised access, interfere with security, or disrupt the website;</li>
              <li>not upload, submit, or transmit unlawful, harmful, misleading, infringing, or confidential content that you are not authorised to share.</li>
            </ul>
            <p className="mt-2">
              We may restrict or suspend access to the website if we reasonably believe you are
              breaching these Terms or applicable law.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">4. No guarantee of outcomes</h2>
            <p>
              Any examples, projections, timelines, or performance indicators presented on the
              website are illustrative only. Business development, lead generation, tender research,
              and related services involve factors outside our control. We do not guarantee specific
              results unless explicitly agreed in a signed contract.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">5. Documents, forms, and submissions</h2>
            <p>
              <strong className="text-foreground">5.1 Submissions.</strong> If you submit
              information through forms or questionnaires, you confirm that the information is
              accurate to the best of your knowledge and that you have the right to provide it.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">5.2 Non-binding unless agreed.</strong> Any
              proposals, drafts, price indications, or documents available on the website are not
              legally binding unless and until both parties execute a written agreement (including an
              online signature, where applicable).
            </p>
            <p className="mt-2">
              <strong className="text-foreground">5.3 Client access links.</strong> Some documents
              may be accessible through unique links provided to you (for example, &ldquo;open&rdquo;
              document routes or client-specific access pages). You agree to keep such links
              confidential and not share them with unauthorised persons. We are not responsible for
              access or disclosure caused by you sharing a link.
            </p>
            <p className="mt-2">
              <strong className="text-foreground">5.4 Right to refuse.</strong> We may refuse,
              pause, or stop processing a submission or request if we reasonably suspect misuse,
              fraud, unlawful activity, or violation of these Terms.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">6. Intellectual property</h2>
            <p>
              All content on this website, including text, branding, logos, layouts, templates,
              frameworks, workflows, documents, and any related materials (collectively
              &ldquo;Content&rdquo;), is owned by or licensed to us and is protected by intellectual
              property laws.
            </p>
            <p className="mt-2">
              You may view and download Content only for your internal business use and only as
              necessary to evaluate or receive our services. You must not:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>copy, reproduce, sell, sublicense, publish, or distribute Content without our prior written permission;</li>
              <li>reverse engineer, extract, or recreate our templates, workflows, or systems for commercial use.</li>
            </ul>
            <p className="mt-2">
              If we provide you with documents specifically for your business (e.g.,
              proposal/contract/invoice), your permitted use is limited to the intended purpose of
              that engagement.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">7. Third-party services and links</h2>
            <p>
              The website may reference or integrate third-party services (such as email delivery,
              hosting, analytics, or document tools) or link to third-party websites. We do not
              control and are not responsible for third-party content, terms, or privacy practices.
              Your use of third-party services is at your own risk and subject to their terms.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">8. Privacy and cookies</h2>
            <p>
              Our collection and use of personal data is described in our{" "}
              <Link href="/privacy-policy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Privacy Policy
              </Link>.
              Our use of cookies and similar technologies is described in our{" "}
              <Link href="/cookies-policy" className="underline underline-offset-2 hover:text-foreground transition-colors">
                Cookies Policy
              </Link>.
              In case of conflict between these Terms and the Privacy/Cookies Policies regarding
              data processing, the Privacy/Cookies Policies prevail.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">9. Availability and changes</h2>
            <p>
              We aim to keep the website available, but we do not guarantee uninterrupted or
              error-free operation. We may update, modify, suspend, or discontinue any part of the
              website at any time.
            </p>
            <p className="mt-2">
              We may revise these Terms from time to time. The &ldquo;Last updated&rdquo; date at
              the top indicates when changes were made. Continued use of the website after changes
              means you accept the updated Terms.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">10. Disclaimer of warranties</h2>
            <p>
              To the maximum extent permitted by law, the website and all Content are provided
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind,
              whether express or implied, including (without limitation) implied warranties of
              merchantability, fitness for a particular purpose, accuracy, and non-infringement.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">11. Limitation of liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                we will not be liable for any indirect, incidental, special, consequential, or
                punitive damages, or for any loss of profits, revenue, business, goodwill, data, or
                opportunities arising from or related to your use of the website;
              </li>
              <li>
                our total liability for any claim arising out of or relating to the website or these
                Terms shall not exceed &pound;100, except where such limitation is not permitted by
                law.
              </li>
            </ul>
            <p className="mt-2">
              Nothing in these Terms limits or excludes liability that cannot be excluded under
              applicable law (including liability for death or personal injury caused by negligence,
              fraud, or fraudulent misrepresentation).
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">12. Indemnity</h2>
            <p>
              You agree to indemnify and hold us harmless from and against any claims, damages,
              liabilities, costs, and expenses (including reasonable legal fees) arising from your
              misuse of the website, breach of these Terms, or violation of applicable law.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">13. Governing law and jurisdiction</h2>
            <p>
              These Terms are governed by the laws of England and Wales. The courts of England
              and Wales shall have exclusive jurisdiction over any disputes arising out of or
              relating to these Terms or your use of the website.
            </p>
          </section>

          {/* 14 */}
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-3">14. Contact</h2>
            <p>
              If you have any questions about these Terms, contact us at:
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
