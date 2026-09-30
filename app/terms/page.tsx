import Link from "next/link"
import { pageMeta } from "@/lib/seo"
import { SITE } from "@/lib/site"
import LegalPage from "@/components/site/legal-page"

export const metadata = pageMeta({
  title: "Terms Of Use",
  description: "The terms that apply when you use the aqua aesthetics pools website, pool designer and quote forms.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <LegalPage title="Terms of use" updated="September 29, 2026">
      <p>
        By using aquaaestheticspools.com, you agree to these terms. If you don&apos;t agree, please don&apos;t use the site.
      </p>

      <h2>Information on this site</h2>
      <p>
        We work to keep our service descriptions, photos and other content accurate, but they are for general information only. Availability, materials
        and timelines vary by project.
      </p>

      <h2>Quotes and estimates</h2>
      <p>
        Submitting a form does not create a contract. Any price or timeline we discuss is an estimate until we both sign a written agreement for your
        project, and that agreement governs the work.
      </p>

      <h2>The pool designer</h2>
      <p>
        Our backyard designer is a planning tool. Sizes, shapes and 3D views are approximate and are not engineering drawings or a guarantee of what can
        be built on your property. We confirm every design on site before construction.
      </p>

      <h2>Photos and content</h2>
      <p>
        Photos, text, graphics and the designer on this site belong to {SITE.name} or are used with permission. Please don&apos;t copy or reuse them
        without our written consent.
      </p>

      <h2>Acceptable use</h2>
      <p>Please don&apos;t misuse the site, submit false information, send spam through our forms or try to disrupt the site.</p>

      <h2>Links to other sites</h2>
      <p>We may link to sites we don&apos;t control, and we aren&apos;t responsible for their content or practices.</p>

      <h2>Limitation of liability</h2>
      <p>
        The site is provided &ldquo;as is.&rdquo; To the extent allowed by law, {SITE.name} is not liable for damages that result from using the site.
        This does not affect any written agreement for pool work.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the State of Texas.</p>

      <h2>Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={SITE.phoneHref}>{SITE.phone}</a>. See also our{" "}
        <Link href="/privacy">privacy policy</Link>.
      </p>
    </LegalPage>
  )
}
