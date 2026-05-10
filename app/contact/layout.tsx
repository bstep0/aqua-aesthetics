import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us — Free Pool Quote in DFW",
  description:
    "Contact Aqua Aesthetics Pools for a free consultation or quote. We serve homeowners throughout Dallas, Frisco, Plano, Southlake, Fort Worth, and the DFW Metroplex. Call (214) 971-5996 or send a message.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
