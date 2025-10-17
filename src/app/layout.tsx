import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import { DOMAIN_NAME } from '@/config/env'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  metadataBase: new URL(`https://${DOMAIN_NAME}`),
  title: 'Web Utilities',
  description:
    'A collection of free, simple, and powerful online web utilities. Tools for developers, designers, and content creators to make your tasks easier.',
  authors: [{ name: 'Web Utilities' }],
  keywords: [
    'web utilities',
    'online utilities',
    'web tools',
    'online tools',
    'free web utilities',
    'free online utilities',
    'free web tools',
    'free online tools',
    'free utilities',
    'free tools'
  ],
  alternates: {
    canonical: '/'
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  openGraph: {
    title: 'Web Utilities',
    description:
      'A collection of free, simple, and powerful online web utilities. Tools for developers, designers, and content creators to make your tasks easier.',
    url: `https://${DOMAIN_NAME}`,
    siteName: 'Web Utilities',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `https://${DOMAIN_NAME}/images/og-image.png`,
        alt: 'Web Utilities',
        width: 1200,
        height: 630
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Utilities',
    description:
      'A collection of free, simple, and powerful online web utilities. Tools for developers, designers, and content creators to make your tasks easier.',
    images: {
      url: `https://${DOMAIN_NAME}/images/og-image.png`,
      alt: 'Web Utilities'
    }
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    noarchive: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  manifest: `https://${DOMAIN_NAME}/manifest.webmanifest`,
  icons: {
    icon: `https://${DOMAIN_NAME}/images/icon.png`,
    shortcut: `https://${DOMAIN_NAME}/images/icon.png`,
    apple: `https://${DOMAIN_NAME}/images/icon.png`
  }
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ]
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
