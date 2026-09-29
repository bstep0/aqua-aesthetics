import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Contact us — free pool quote in DFW",
  description:
    "Contact aqua aesthetics pools for a free consultation or quote. We serve homeowners throughout Dallas, Frisco, Plano, Southlake, Fort Worth, and the DFW Metroplex. Call (214) 971-5996 or send a message.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: import("react").ReactNode }) {
  return <>{children}</>
}
