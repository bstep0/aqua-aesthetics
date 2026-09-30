import { pageMeta } from "@/lib/seo"

export const metadata = pageMeta({
  title: "Contact Us — free pool quote in DFW",
  description:
    "Get a free pool quote from Aqua Aesthetics. Call (214) 971-5996 or send a message. Based in McKinney, serving all of Dallas–Fort Worth.",
  path: "/contact",
})

export default function ContactLayout({ children }: { children: import("react").ReactNode }) {
  return <>{children}</>
}
