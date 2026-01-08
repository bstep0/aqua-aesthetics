import Link from "next/link"
import { Droplets, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center space-x-2">
              <Droplets className="h-6 w-6 text-cyan-600" />
              <span className="text-xl text-gray-900">aqua aesthetics</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Premium pool construction, remodeling, repairs and maintenance services in DFW. Transforming backyards
              into luxurious retreats since 1995.
            </p>
            {/*
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-500 transition-colors hover:text-cyan-600">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-cyan-600">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-500 transition-colors hover:text-cyan-600">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
            */}
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#new-construction" className="text-gray-600 transition-colors hover:text-cyan-600">
                  New Pool Construction
                </Link>
              </li>
              <li>
                <Link href="/services#remodels" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Pool Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services#outdoor-living" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Outdoor Living
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Regular Maintenance
                </Link>
              </li>
              <li>
                <Link href="/services#service" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Pool Equipment Service & Repairs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 transition-colors hover:text-cyan-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 transition-colors hover:text-cyan-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-cyan-600" />
                <a
                  href="mailto:info@aquaaesthetics.com"
                  className="text-gray-600 transition-colors hover:text-cyan-600"
                >
                  contact@AquaAestheticsPools.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-cyan-600" />
                <a href="tel:+15615551234" className="text-gray-600 transition-colors hover:text-cyan-600">
                  (214) 971-5996
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-sm text-gray-600">© {new Date().getFullYear()} Aqua Aesthetics Pools. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
