import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"   // 👈 ADD THIS
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Analytics from "./analytics" // 👈 we’ll create this next

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Pool Construction & Remodeling in DFW | Aqua Aesthetics Pools",
    template: "%s | Aqua Aesthetics Pools",
  },
  description:
    "Aqua Aesthetics Pools offers expert pool construction, remodeling, maintenance, and repair services throughout Dallas, Frisco, Plano, Southlake, Colleyville, Fort Worth, and Flower Mound. Get a free quote today.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
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
        <Analytics /> {/* 👈 ADD THIS */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}