import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: 'Rian Hasan Siam - Full Stack Developer | React & Next.js Expert',
    template: '%s | Rian Hasan Siam Portfolio'
  },
  description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Dhaka, Bangladesh. View my portfolio showcasing 50+ projects and 2+ years of experience.',
  keywords: [
    'Rian Hasan Siam',
    'rianhasansiam',
    'rian hasan siam',
    'Full Stack Developer',
    'React Developer',
    'Next.js Expert',
    'JavaScript Developer',
    'Node.js Developer',
    'MERN Stack Developer',
    'Frontend Developer',
    'Backend Developer',
    'Web Developer',
    'Software Engineer',
    'Portfolio',
    'Dhaka Bangladesh',
    'Daffodil International University',
    'daffodil international univercity',
    'Daffodil International Univercity',
    'Khadiza Islam Meherin',
    'khadiza islam meherin',
    'Rian Hasan Siam Portfolio',
    'Khadija Islam Meherin',
    'khadija islam meherin',
    'rianhasansiam.me',
    'Meherin Islam',
    'meherin islam',
    'Oni Meharun',
    'Ani Monusi',
    'ani monusi',
    'oni meharun',
    'Rian Hasan',
    'Ani Akter',
    'ani akter',
    'oni akter',
    'Oni Akter',
    'Messi',
    'Leo Messi',
    'leo messi',
    'messi',
    'Yamal',
    'yamal',
    'Yamal Musiala',
    'lamin yamal',
    'Lamin Yamal',
    'Mirpur-1',
    'Mirpur 1',
    'Mirpur',
    'Mirpur Dhaka',
    'Mirpur Dhaka Bangladesh',
    'Rian Hasan Siam Portfolio',
    'Rian Hasan Siam Portfolio Website',
    'Rian Hasan Siam Portfolio Site',
    'Rian Hasan Siam Portfolio Web',
    'bcic college',
    'BCIC College',
    'bcic college mirpur',
    'bcicsportsclub',
    'BCIC Sports Club',
    'BCIC Sports Club Mirpur',
    
    'Rian Diu',
    'rian diu',
    'daffodil rian',
    'Daffodil Rian',
    'Rian Daffodil',
    'rian daffodil',
    'TypeScript',
    'MongoDB',
    'Express.js',
    'Tailwind CSS',
    'Firebase',
    'Git',
    'GitHub'
  ].join(', '),
  authors: [{ name: 'Rian Hasan Siam', url: 'https://rianhasansiam.me' }],
  creator: 'Rian Hasan Siam',
  publisher: 'Rian Hasan Siam',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://rianhasansiam.me'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rian Hasan Siam - Full Stack Developer | React & Next.js Expert',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Dhaka, Bangladesh. View my portfolio showcasing 50+ projects and 2+ years of experience.',
    url: 'https://rianhasansiam.me',
    siteName: 'Rian Hasan Siam Portfolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rian Hasan Siam - Full Stack Developer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rian Hasan Siam - Full Stack Developer | React & Next.js Expert',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Dhaka, Bangladesh.',
    images: ['/og-image.jpg'],
    creator: '@rianhasansiam',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
}

export default function RootLayout({ children }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rian Hasan Siam",
    "jobTitle": "Full Stack Developer",
    "description": "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
    "url": "https://rianhasansiam.me",
    "image": "https://rianhasansiam.me/rianface.jpg",
    "email": "rianhasan1971@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Daffodil International University"
    },
    "knowsAbout": [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Tailwind CSS",
      "Full Stack Development",
      "Web Development",
      "Software Engineering"
    ],
    "sameAs": [
      "https://github.com/rianhasansiam",
      "https://www.linkedin.com/in/rian-hasan-siam/",
      "https://www.facebook.com/rianhasan1971",
      "https://www.instagram.com/rian_hasan_siam/",
      "https://t.me/rianhasansiam"
    ]
  }

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.1/css/all.min.css" 
          integrity="sha512-5Hs3dF2AEPkpNAR7UiOHba+lRSJNeM2ECkwxUIxC1Q/FLycGTbNapWXB4tP889k5T5Ju8fs4b1P5z/iB4nMfSQ==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
