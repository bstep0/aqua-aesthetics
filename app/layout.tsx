import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import WipBanner from "@/components/wip-banner"
import Analytics from "./analytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Pool builders serving Dallas, Fort Worth, Frisco, Plano, Southlake, Colleyville, and Flower Mound. | Aqua Aesthetics Pools",
    template: "%s | Aqua Aesthetics Pools",
  },
  description:
    "Pool builders serving Dallas, Fort Worth, Frisco, Plano, Southlake, Colleyville, and Flower Mound. Custom pool construction, remodeling, service and repairs.",
  openGraph: {
    type: "website",
    siteName: "Aqua Aesthetics Pools",
    title: "Pool builders serving Dallas, Fort Worth, Frisco, Plano, Southlake, Colleyville, and Flower Mound. | Aqua Aesthetics Pools",
    description:
      "Pool builders serving Dallas, Fort Worth, Frisco, Plano, Southlake, Colleyville, and Flower Mound. Custom pool construction, remodeling, service and repairs.",
    images: [
      {
        url: "/images/pool6.jpg",
        width: 1200,
        height: 630,
        alt: "Custom pool with fire feature built by Aqua Aesthetics Pools in DFW",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pool builders serving Dallas, Fort Worth, Frisco, Plano, Southlake, Colleyville, and Flower Mound. | Aqua Aesthetics Pools",
    description:
      "Pool builders serving Dallas, Fort Worth, Frisco, Plano, Southlake, Colleyville, and Flower Mound. Custom pool construction, remodeling, service and repairs.",
    images: ["/images/pool6.jpg"],
  },
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

      <body className={inter.className}>
        <Analytics />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <WipBanner />
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
