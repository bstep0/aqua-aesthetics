"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Phone, X } from "lucide-react"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { SITE } from "@/lib/site"
import Logo from "@/components/site/logo"

const ROUTES = [
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Design your pool", path: "/design" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
]

// Pages that open with a full-bleed dark hero: the nav floats over them.
const OVERLAY = (path: string) => path === "/" || path === "/design" || path.startsWith("/services") || path.startsWith("/service-areas")

export default function Navbar({ banner }: { banner?: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const overlay = OVERLAY(pathname)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (path: string) => (path === "/" ? pathname === "/" : pathname.startsWith(path))
  const dark = overlay && !scrolled
  const solidDark = overlay && scrolled

  return (
    <header className={`${overlay ? "fixed" : "sticky"} inset-x-0 top-0 z-50`}>
      {banner}
      <div
        className={`transition-colors duration-300 ${
          dark ? "bg-transparent" : solidDark ? "bg-navy/95 backdrop-blur-md" : "border-b border-navy/10 bg-ivory/95 backdrop-blur-md"
        }`}
      >
        <div className={`container flex h-20 items-center justify-between ${overlay ? "text-ivory" : "text-navy"}`}>
          <Logo tone={overlay ? "light" : "dark"} />

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
            {ROUTES.map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className={`aa-link-u py-1 text-[15px] ${isActive(route.path) ? "font-bold" : "font-medium"} ${
                  isActive(route.path) ? (overlay ? "text-sun" : "text-teal") : ""
                }`}
              >
                {route.name}
              </Link>
            ))}
            <a
              href={SITE.phoneHref}
              className={`flex items-center gap-2 border-l pl-7 text-[15px] font-semibold ${overlay ? "border-ivory/25" : "border-navy/15"}`}
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {SITE.phone}
            </a>
            <Link href="/contact" className="rounded-full bg-sun px-5 py-3 text-[15px] font-bold text-navy transition-transform hover:-translate-y-0.5">
              Free quote
            </Link>
          </nav>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className={`flex h-12 w-12 items-center justify-center rounded-full border lg:hidden ${overlay ? "border-ivory/35" : "border-navy/20"}`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] border-none bg-navy p-6 text-ivory sm:w-[400px] [&>button]:hidden">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <div className="flex items-center justify-between">
                <Logo tone="light" onClick={() => setIsOpen(false)} />
                <button type="button" aria-label="Close menu" onClick={() => setIsOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/30">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <nav aria-label="Mobile" className="mt-10 flex flex-col">
                <Link href="/" onClick={() => setIsOpen(false)} className="border-b border-ivory/15 py-3 font-display text-3xl font-light">
                  Home
                </Link>
                {ROUTES.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    onClick={() => setIsOpen(false)}
                    className={`border-b border-ivory/15 py-3 font-display text-3xl font-light ${isActive(route.path) ? "text-sun" : ""}`}
                  >
                    {route.name}
                  </Link>
                ))}
                <a href={SITE.phoneHref} className="mt-8 text-xl font-bold text-sun">
                  {SITE.phone}
                </a>
                <Link href="/contact" onClick={() => setIsOpen(false)} className="mt-4 rounded-full bg-sun py-3.5 text-center font-bold text-navy">
                  Get a free quote
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
