import './globals.css'
import { Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { CustomToastProvider } from '../components/CustomToast'

const siteUrl = 'https://rianhasansiam.me'
const siteName = 'Rian Hasan Siam Portfolio'
const pageTitle = 'Rian Hasan Siam - Full Stack Developer | React & Next.js Expert'
const pageDescription = 'Full Stack Developer from Dhaka, Bangladesh specializing in React, Next.js, Node.js, scalable web apps, and production-ready digital products.'
const socialProfiles = [
  'https://github.com/rianhasansiam',
  'https://www.linkedin.com/in/rian-hasan-siam/',
  'https://www.facebook.com/rianhasan1971',
  'https://www.instagram.com/rian_hasan_siam/',
  'https://t.me/rianhasansiam',
]

const personId = `${siteUrl}/#person`
const websiteId = `${siteUrl}/#website`
const webpageId = `${siteUrl}/#webpage`

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#050510' },
    { media: '(prefers-color-scheme: dark)', color: '#050510' },
  ],
  colorScheme: 'dark',
}

export const metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: pageTitle,
    template: `%s | ${siteName}`,
  },
  description: pageDescription,
  authors: [{ name: 'Rian Hasan Siam', url: siteUrl }],
  creator: 'Rian Hasan Siam',
  publisher: 'Rian Hasan Siam',
  category: 'technology',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'mask-icon', url: '/favicon.ico', color: '#111827' }],
  },
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/',
    siteName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rian Hasan Siam portfolio preview',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
    creator: '@rianhasansiam',
    images: ['/og-image.jpg'],
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
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteName,
  },
  referrer: 'origin-when-cross-origin',
}

const personStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': personId,
  name: 'Rian Hasan Siam',
  url: siteUrl,
  image: `${siteUrl}/rianface.jpg`,
  jobTitle: 'Full Stack Developer',
  description: pageDescription,
  sameAs: socialProfiles,
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Daffodil International University',
    url: 'https://daffodilvarsity.edu.bd/',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dhaka',
    addressCountry: 'BD',
  },
  knowsAbout: [
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Express.js',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'Web application architecture',
  ],
}

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  url: siteUrl,
  name: siteName,
  description: pageDescription,
  publisher: {
    '@id': personId,
  },
  inLanguage: 'en',
}

const webpageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': webpageId,
  url: siteUrl,
  name: pageTitle,
  description: pageDescription,
  isPartOf: {
    '@id': websiteId,
  },
  about: {
    '@id': personId,
  },
  inLanguage: 'en',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageStructuredData) }}
        />
      </head>
      <body className={spaceGrotesk.className}>
        <CustomToastProvider>
          {children}
        </CustomToastProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
