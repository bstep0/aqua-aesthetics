"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Droplets } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const routes = [
    { name: "Home", path: "/" },
    { name: "Gallery", path: "/gallery" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ]

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container flex h-20 items-center justify-between px-0 sm:px-4">
        <div className="flex items-center pl-4 sm:pl-0">
          <Link href="/" className="flex items-center space-x-2">
            <Droplets className="h-14 w-14 text-cyan-600 animate-ripple transition-all" />
            <span className="text-2xl font-md text-gray-900">aqua aesthetics</span>
          </Link>
        </div>

        <nav className="hidden md:flex md:items-center md:space-x-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={`text-base font-medium transition-colors hover:text-cyan-600 ${
                isActive(route.path) ? "text-cyan-600" : "text-gray-600"
              }`}
            >
              {route.name}
            </Link>
          ))}
          <Button asChild className="ml-4 bg-cyan-600 hover:bg-cyan-700">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                <Droplets className="h-12 w-12 text-cyan-600" />
                <span className="text-lg font-bold">Aqua Aesthetics</span>
              </Link>
              <Button variant="outline" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={`py-2 text-lg font-medium transition-colors hover:text-cyan-600 ${
                    isActive(route.path) ? "text-cyan-600" : "text-gray-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <Button asChild className="mt-2 bg-cyan-600 hover:bg-cyan-700">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
