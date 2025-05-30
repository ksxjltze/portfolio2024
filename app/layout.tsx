import './global.css'
import type { Metadata } from 'next'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from './contexts/ThemeContext'

import { SandPackCSS } from "@/components/sandpack-styles";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Lee Jia Keat',
    template: '%s | Lee Jia Keat',
  },
  description: 'Life of a Malaysian Gen Z tech bro',
  openGraph: {
    title: 'Lee Jia Keat',
    description: 'Life of a Malaysian Gen Z tech bro',
    images: [
      {
        url: "/images/thumbnail.jpg",
      },
    ],
    url: baseUrl,
    siteName: 'LJK',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Lee Jia Keat" />
        <SandPackCSS />
      </head>
      <body className="antialiased w-full mt-8 flex justify-center items-center text-foreground dark:text-white bg-background aero:bg-linear-to-b from-(--gradient-from) to-(--gradient-to)">
        <main className="flex-auto max-w-xl min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <ThemeProvider initialTheme={'light'}>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </main>
        <Script src='https://storage.ko-fi.com/cdn/scripts/overlay-widget.js' strategy='beforeInteractive' />
        <Script id="kofi-donations" strategy='beforeInteractive'>
          {`kofiWidgetOverlay.draw('ksxjltze', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#5cb85c',
            'floating-chat.donateButton.text-color': '#fff'
          });`}
        </Script>
      </body>
    </html>
  )
}
