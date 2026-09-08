import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { COMPETITION } from "@/data/this-is-my-choice";

export const metadata: Metadata = {
  title: "Official Rules — This Is My Choice | DJ Andy'K",
  description:
    "Official rules for the This Is My Choice competition by DJ Andy'K, presented by Andy'K Music Lab.",
  alternates: { canonical: "https://www.djandykofficial.com/this-is-my-choice/rules" },
};

export default function ThisIsMyChoiceRulesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-[60px]">
        <div className="max-w-[760px] mx-auto px-6 py-12 md:py-16">
          <Link
            href="/this-is-my-choice"
            className="inline-flex items-center gap-1.5 text-sm text-muted-2 hover:text-muted transition-colors mb-10"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to competition
          </Link>

          <h1 className="text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-2">
            Official Rules
          </h1>
          <p className="text-sm text-muted-2 font-mono mb-1">
            {COMPETITION.title} — {COMPETITION.byLine}
          </p>
          <p className="text-sm text-muted-2 font-mono mt-4 mb-10">
            Entry period: {COMPETITION.dates.startsLabel} – {COMPETITION.dates.closesLabel} ({COMPETITION.dates.timezone})
          </p>

          <div className="border-t border-grid-300" />

          <article className="mt-10 space-y-10 text-[15px] leading-relaxed text-muted">
            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">1) Organizer</h2>
              <p>
                This competition (&ldquo;{COMPETITION.title}&rdquo;) is organized by
                ANDY&apos;K GROUP INTERNATIONAL LTD, a company registered in England and Wales
                (Company No. 16453500), registered office at 86-90 Paul Street, London, EC2A 4NE,
                United Kingdom (&ldquo;we&rdquo;, &ldquo;us&rdquo;, &ldquo;the Organizer&rdquo;).
                ANDY&apos;K GROUP INTERNATIONAL LTD operates both DJ Andy&apos;K
                (djandykofficial.com) and Andy&apos;K Music Lab (lab.djandykofficial.com). The
                competition is based on the music of DJ Andy&apos;K; Andy&apos;K Music Lab
                provides the prizes.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">2) Eligibility</h2>
              <p>
                The competition is open to individuals worldwide who hold a public Instagram
                account, subject to the minimum age requirement below and any restrictions of
                local law in the participant&apos;s country of residence. Employees, contractors
                and immediate family members of the Organizer are not eligible to win.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3) Minimum age</h2>
              <p>
                Participants must be at least 16 years old, or the minimum age required to hold
                an Instagram account and enter competitions of this kind in their country of
                residence, whichever is higher. Instagram&apos;s own minimum age requirement
                applies in all cases.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">3a) Eligible territories</h2>
              <p>
                The competition is open worldwide, except in any country or region where
                participation, the prize, or a competition of this nature is prohibited or
                restricted by local law. It is the entrant&apos;s responsibility to confirm they
                are permitted to participate under the laws applicable to them.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">4) No purchase necessary</h2>
              <p>
                Entry is free. No purchase, payment, or pre-existing subscription to Andy&apos;K
                Music Lab is required to enter or to win.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">5) Dates and timezone</h2>
              <p>
                The competition opens on {COMPETITION.dates.startsLabel} and closes on{" "}
                {COMPETITION.dates.closesLabel}. Winners are announced on{" "}
                {COMPETITION.dates.winnersAnnouncedLabel}. All dates and times are given in the{" "}
                {COMPETITION.dates.timezone} timezone (Vienna time).
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">6) Entry requirements</h2>
              <p>To enter, a participant must, during the entry period:</p>
              <ol className="list-decimal list-inside mt-2 space-y-1.5">
                {COMPETITION.steps.map((step) => (
                  <li key={step.n}>{step.description}</li>
                ))}
              </ol>
              <p className="mt-3">{COMPETITION.eligibilityNote}</p>
              <p className="mt-2">
                Each participant may submit one (1) eligible Reel. Multiple entries from the same
                account do not increase a participant&apos;s chance of winning; only the account
                holder&apos;s most recent eligible Reel at closing time is considered.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">7) Winner-selection process</h2>
              <p>
                At the official closing time, all eligible Reels (those that satisfy Section 6 in
                full) are ranked by their number of genuine likes. The five eligible Reels with the
                highest genuine like count are the winners. The Organizer reviews the leading
                entries for compliance with Section 8 before confirming winners.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">8) Tie-breaking process</h2>
              <p>
                If two or more eligible entries are tied for the fifth winning position, the tied
                entry with the earlier publication timestamp on Instagram is awarded the place.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">9) Fraud and disqualification</h2>
              <p>The following will disqualify an entry:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                {COMPETITION.prohibited.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-3">
                The Organizer may disqualify any entry it reasonably believes violates this
                section, Instagram&apos;s own Terms of Use or Community Guidelines, or applicable
                law, at its sole discretion, at any time before or after winners are announced.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">10) Prize</h2>
              <p>Each of the five winners receives:</p>
              <ul className="list-disc list-inside mt-2 space-y-1.5">
                {COMPETITION.prize.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">11) Lifetime Access definition</h2>
              <p>{COMPETITION.prize.lifetimeNote} Should Andy&apos;K Music Lab cease operating,
              this prize element ends with it and no substitute or compensation is owed.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">12) Feature-request limitations</h2>
              <p>{COMPETITION.prize.featureRequestNote} The Organizer has final discretion over
              whether a requested feature meets this standard and over its implementation
              timeline.</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">13) Prize conditions</h2>
              <p>{COMPETITION.prize.nonTransferableNote}</p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">14) Winner verification</h2>
              <p>
                Prospective winners will be contacted via Instagram direct message on or shortly
                after {COMPETITION.dates.winnersAnnouncedLabel}. A prospective winner must respond
                and confirm eligibility within 7 days of first contact; failure to do so may
                result in forfeiture and selection of the next-highest eligible entry in that
                position.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">15) Privacy and data processing</h2>
              <p>
                Entering this competition requires public engagement with an Instagram post
                (follow, tag, comment); the Organizer does not collect additional personal data
                through this website beyond what is described in our{" "}
                <Link href="/privacy-policy" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
                . Winner contact and prize fulfilment is carried out via Instagram direct message
                and, where needed to deliver the prize, email.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                16) Permission to repost
              </h2>
              <p>
                By entering, a participant grants the Organizer a non-exclusive, royalty-free
                license to repost, embed, or feature their competition Reel across DJ
                Andy&apos;K and Andy&apos;K Music Lab channels (including this website and
                Instagram), with creator credit given.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">17) Tax responsibility</h2>
              <p>
                Winners are solely responsible for any taxes, duties, or fees arising from
                receipt of the prize under the laws of their country of residence.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">18) Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, the Organizer will not be liable for any
                loss or damage arising from or in connection with this competition, including
                entry, participation, or prize use. This includes (without limitation) any
                indirect or consequential loss, loss of profits, loss of revenue, loss of data,
                or loss of goodwill. Nothing in these Official Rules excludes or limits liability
                that cannot be excluded under applicable law, including liability for death or
                personal injury caused by negligence, fraud, or fraudulent misrepresentation.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                18a) Right to modify, suspend or cancel
              </h2>
              <p>
                The Organizer reserves the right to modify, suspend or cancel the competition, in
                whole or in part, at any time in cases of suspected fraud, technical failure, or
                where required by law, without liability to entrants, to the extent permitted by
                applicable law. Material changes will be posted on this page.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">19) Governing law</h2>
              <p>
                These Official Rules are governed by the laws of England and Wales, and any
                disputes shall be subject to the exclusive jurisdiction of the courts of England
                and Wales.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">
                20) Instagram / Meta disclaimer
              </h2>
              <p>
                This competition is in no way sponsored, endorsed, administered by, or associated
                with Instagram or Meta Platforms, Inc. Participants provide information to the
                Organizer, not to Instagram or Meta. Any questions or complaints must be directed
                to the Organizer, not to Instagram or Meta.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-foreground mb-3">21) Organizer contact</h2>
              <p>
                ANDY&apos;K GROUP INTERNATIONAL LTD
                <br />
                86-90 Paul Street, London, EC2A 4NE, United Kingdom
                <br />
                Email: <a href="mailto:ceo@andykgroup.com" className="underline underline-offset-2">ceo@andykgroup.com</a>
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
