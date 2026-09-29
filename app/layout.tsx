import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Figtree } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WipBanner from "@/components/wip-banner"
import Analytics from "./analytics"

const display = Fraunces({ subsets: ["latin"], axes: ["opsz"], style: ["normal", "italic"], variable: "--font-display" })
const sans = Figtree({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aquaaestheticspools.com"),
  title: {
    default: "Aqua Aesthetics Pools | Dallas–Fort Worth Pool Builder",
    template: "%s | Aqua Aesthetics Pools",
  },
  description:
    "Family-owned pool builder serving the Dallas–Fort Worth Metroplex from McKinney, TX since 1995. Custom pool construction, remodeling, outdoor living, maintenance and repairs.",
  applicationName: "Aqua Aesthetics Pools",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Aqua Aesthetics Pools",
    locale: "en_US",
    url: "/",
    title: "Aqua Aesthetics Pools | Dallas–Fort Worth Pool Builder",
    description:
      "Custom pools, remodels, outdoor living, maintenance and repairs across Dallas–Fort Worth — McKinney, Frisco, Allen, Plano, Dallas, Fort Worth, Southlake and more.",
    images: [
      {
        url: "/images/pool18.jpg",
        width: 1200,
        height: 630,
        alt: "Custom pool and spa built by Aqua Aesthetics Pools in DFW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aqua Aesthetics Pools | Dallas–Fort Worth Pool Builder",
    description:
      "Custom pools, remodels, outdoor living, maintenance and repairs across Dallas–Fort Worth.",
    images: ["/images/pool18.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-DZR3NFDBB4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-DZR3NFDBB4');
          `}
        </Script>
      </head>

      <body className={`${display.variable} ${sans.variable} font-sans`}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar banner={<WipBanner />} />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
