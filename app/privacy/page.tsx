import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { SITE } from "@/lib/site"
import LegalPage from "@/components/site/legal-page"

export const metadata = pageMeta({
  title: "Privacy Policy",
  description: "How Aqua Aesthetics collects, uses and protects the information you share through our website and quote forms.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy policy" updated="September 29, 2026">
      <p>
        {SITE.name} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) is a family-owned pool company based in {SITE.base}. This policy explains what information we
        collect through aquaaestheticspools.com, how we use it and the choices you have.
      </p>

      <h2>Information you give us</h2>
      <p>When you request a quote or contact us, we collect what you enter in the form:</p>
      <ul>
        <li>Your name and phone number</li>
        <li>Your email address, city and project timing, if you provide them</li>
        <li>Your message and any backyard design you create with our pool designer</li>
      </ul>
      <p>We use this information only to respond to you, prepare estimates and provide the services you ask for.</p>

      <h2>Information collected automatically</h2>
      <p>
        We use Google Analytics to understand how visitors use our site, such as which pages are viewed and how people find us. Google Analytics uses
        cookies and collects information like your browser type, device, approximate location and pages visited. It does not tell us who you are. You
        can opt out with the{" "}
        <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
          Google Analytics opt-out add-on
        </a>{" "}
        or by blocking cookies in your browser.
      </p>
      <p>Our pool designer runs in your browser. Your design is only sent to us if you choose to include it with a quote request.</p>

      <h2>How we share information</h2>
      <p>We do not sell or rent your personal information. We share it only with:</p>
      <ul>
        <li>Service providers that help us run the site, such as our website host and the email service that delivers form submissions to us</li>
        <li>Google, for the analytics described above</li>
        <li>Authorities, when required by law</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>We keep inquiry details for as long as needed to respond, provide service and keep normal business records, then delete them.</p>

      <h2>Your choices</h2>
      <p>
        You can ask us to see, correct or delete the personal information you&apos;ve sent us by emailing{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or calling <a href={SITE.phoneHref}>{SITE.phone}</a>.
      </p>

      <h2>Children</h2>
      <p>Our site is meant for adults. We don&apos;t knowingly collect information from children under 13.</p>

      <h2>Changes</h2>
      <p>
        If we update this policy, we&apos;ll change the date at the top of this page. See also our <Link href="/terms">terms of use</Link>.
      </p>
    </LegalPage>
  )
}
