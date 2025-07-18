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
    'Bangladesh Developer',
    'Daffodil International University',
    'daffodil international univercity',
    'Daffodil International Univercity',
    'rianhasansiam.me',
    'Rian Hasan Siam Portfolio',
    'Rian Hasan Siam Portfolio Website',
    'Rian Hasan Siam Portfolio Site',
    'Rian Hasan Siam Portfolio Web',
    'Mirpur Dhaka',
    'Mirpur Dhaka Bangladesh',
    'bcic college',
    'BCIC College',
    'bcic college mirpur',
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
    'GitHub',
    'React.js',
    'HTML5',
    'CSS3',
    'Bootstrap',
    'REST API',
    'GraphQL',
    'MySQL',
    'PostgreSQL',
    'AWS',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Agile Development',
    'Responsive Design',
    'Progressive Web Apps',
    'PWA',
    'Web Performance',
    'SEO Optimization',
    'Modern Web Development',
    'JavaScript ES6+',
    'Async/Await',
    'Microservices',
    'API Development',
    'Database Design',
    'Version Control',
    'Testing',
    'Jest',
    'Cypress',
    'Webpack',
    'Babel',
    'NPM',
    'Yarn',
    'Freelance Developer Bangladesh',
    'Remote Developer',
    'Full Stack Engineer',
    'React Specialist',
    'Next.js Developer Bangladesh',
    'MERN Stack Expert',
    'JavaScript Expert',
    'TypeScript Developer',
    'Node.js Backend Developer',
    'MongoDB Developer',
    'Express.js Developer',
    'Tailwind CSS Expert',
    'Frontend Engineer',
    'Backend Engineer',
    'Web Application Developer',
    'E-commerce Developer',
    'Portfolio Website',
    'Professional Developer',
    'Skilled Developer',
    'Experienced Developer',
    'Senior Developer',
    'Junior Developer',
    'Mid-level Developer',
    'Software Development',
    'Web Development Services',
    'Custom Web Development',
    'Responsive Web Design',
    'Mobile First Development',
    'Cross Platform Development',
    'API Integration',
    'Database Integration',
    'Third Party Integration',
    'Payment Gateway Integration',
    'E-commerce Solutions',
    'Business Solutions',
    'Startup Developer',
    'Enterprise Developer',
    'Consulting Services',
    'Technical Consulting',
    'Code Review',
    'Performance Optimization',
    'SEO Friendly Development',
    'User Experience Design',
    'User Interface Design',
    'Modern Web Technologies',
    'Latest Technologies',
    'Best Practices',
    'Clean Code',
    'Scalable Applications',
    'High Performance Applications',
    'Secure Applications',
    'Professional Services',
    'Quality Assurance',
    'Bug Fixes',
    'Maintenance Services',
    'Technical Support',
    'Project Management',
    'Agile Methodology',
    'Scrum',
    'DevOps',
    'CI/CD Pipeline',
    'Cloud Solutions',
    'AWS Services',
    'Vercel Deployment',
    'Netlify Deployment',
    'Digital Solutions',
    'Innovation',
    'Technology Solutions',
    'Business Growth',
    'Online Presence',
    'Digital Transformation'
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
        type: 'image/jpeg',
      },
      {
        url: '/rianface.jpg',
        width: 400,
        height: 400,
        alt: 'Rian Hasan Siam Profile Picture',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_US',
    type: 'profile',
    profile: {
      firstName: 'Rian Hasan',
      lastName: 'Siam',
      username: 'rianhasansiam',
      gender: 'male',
    },
    countryName: 'Bangladesh',
    email: 'rianhasan1971@gmail.com',
    phoneNumber: '+880-1234567890',
    faxNumber: '',
    streetAddress: 'Mirpur, Dhaka',
    locality: 'Dhaka',
    region: 'Dhaka',
    postalCode: '1216',
    countryName: 'Bangladesh',
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
    'bing': 'your-bing-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
  coverage: 'Worldwide',
  distribution: 'Global',
  rating: 'General',
  referrer: 'no-referrer-when-downgrade',
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1f2937' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Rian Hasan Siam Portfolio',
  },
  applicationName: 'Rian Hasan Siam Portfolio',
  generator: 'Next.js',
  abstract: 'Professional portfolio website of Rian Hasan Siam, a skilled Full Stack Developer from Dhaka, Bangladesh.',
  subject: 'Full Stack Web Development Services',
  language: 'English',
  revisitAfter: '7 days',
  distribution: 'global',
  target: 'all',
  audience: 'all',
  pragma: 'no-cache',
  cacheControl: 'no-cache',
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
    "telephone": "+880-1234567890",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mirpur, Dhaka",
      "addressRegion": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Daffodil International University",
      "url": "https://daffodilvarsity.edu.bd/"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance Developer"
    },
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Full Stack Developer",
      "occupationalCategory": "Software Engineering",
      "skills": [
        "React.js",
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
      ]
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
      "Software Engineering",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST API",
      "GraphQL",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Docker",
      "Git",
      "GitHub"
    ],
    "sameAs": [
      "https://github.com/rianhasansiam",
      "https://www.linkedin.com/in/rian-hasan-siam/",
      "https://www.facebook.com/rianhasan1971",
      "https://www.instagram.com/rian_hasan_siam/",
      "https://t.me/rianhasansiam"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://rianhasansiam.me"
    },
    "birthPlace": {
      "@type": "Place",
      "name": "Bangladesh"
    },
    "nationality": "Bangladeshi",
    "gender": "Male",
    "award": [
      "2+ Years Experience in Full Stack Development",
      "50+ Completed Projects"
    ],
    "seeks": {
      "@type": "Demand",
      "name": "Full Stack Development Projects"
    },
    "makesOffer": {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Full Stack Web Development",
        "description": "Professional web development services using modern technologies"
      }
    }
  }

  // Additional structured data for organization
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Rian Hasan Siam Portfolio",
    "url": "https://rianhasansiam.me",
    "logo": "https://rianhasansiam.me/rianface.jpg",
    "description": "Professional portfolio of Rian Hasan Siam, Full Stack Developer",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1234567890",
      "contactType": "customer service",
      "email": "rianhasan1971@gmail.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "Bangladesh"
    },
    "sameAs": [
      "https://github.com/rianhasansiam",
      "https://www.linkedin.com/in/rian-hasan-siam/"
    ]
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rian Hasan Siam Portfolio",
    "alternateName": "Rian Portfolio",
    "url": "https://rianhasansiam.me",
    "description": "Professional portfolio website of Rian Hasan Siam, Full Stack Developer",
    "author": {
      "@type": "Person",
      "name": "Rian Hasan Siam"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://rianhasansiam.me/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Person",
      "name": "Rian Hasan Siam"
    }
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Rian Hasan Siam Portfolio" />
        <meta name="application-name" content="Rian Hasan Siam Portfolio" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
        <meta name="format-detection" content="email=no" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="320" />
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/rianface.jpg" as="image" />
        <link rel="alternate" type="application/rss+xml" title="Rian Hasan Siam RSS Feed" href="/rss.xml" />
        <link rel="author" href="/humans.txt" />
        <link rel="help" href="/#contact" />
        <link rel="bookmark" href="/" />
        <meta name="geo.region" content="BD-13" />
        <meta name="geo.placename" content="Dhaka" />
        <meta name="geo.position" content="23.8103;90.4125" />
        <meta name="ICBM" content="23.8103, 90.4125" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="slurp" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="duckduckbot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="facebookexternalhit" content="index, follow" />
        <meta name="twitterbot" content="index, follow" />
        <meta name="linkedinbot" content="index, follow" />
        <meta name="whatsapp" content="index, follow" />
        <meta name="telegrambot" content="index, follow" />
        <meta name="skype_toolbar" content="skype_toolbar_parser_compatible" />
        <meta name="apple-mobile-web-app-orientations" content="portrait" />
        <meta name="apple-touch-fullscreen" content="yes" />
        <meta name="full-screen" content="yes" />
        <meta name="browsermode" content="application" />
        <meta name="nightmode" content="enable" />
        <meta name="layoutmode" content="fitscreen" />
        <meta name="imagemode" content="force" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="x5-page-mode" content="app" />
        <meta name="360-fullscreen" content="true" />
        <meta name="wap-font-scale" content="no" />
        <meta name="uc-fitscreen" content="yes" />
        <meta name="QQ-fullscreen" content="true" />
        <meta name="applicable-device" content="pc,mobile" />
        <meta name="MobileOptimized" content="width" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no,email=no,address=no" />
        <meta name="wap-font-scale" content="no" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5,user-scalable=yes" />
        <meta name="screen-orientation" content="portrait" />
        <meta name="x5-orientation" content="portrait" />
        <meta name="full-screen" content="yes" />
        <meta name="x5-fullscreen" content="true" />
        <meta name="x5-page-mode" content="app" />
        <meta name="360-fullscreen" content="true" />
        <meta name="wap-font-scale" content="no" />
        <meta name="uc-fitscreen" content="yes" />
        <meta name="QQ-fullscreen" content="true" />
        <meta name="browsermode" content="application" />
        <meta name="x5-page-mode" content="app" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="apple-mobile-web-app-title" content="Rian Hasan Siam Portfolio" />
        <meta name="application-name" content="Rian Hasan Siam Portfolio" />
        <meta name="msapplication-tooltip" content="Rian Hasan Siam - Full Stack Developer Portfolio" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="msapplication-window" content="width=1024;height=768" />
        <meta name="msapplication-task" content="name=Home;action-uri=/;icon-uri=/favicon.ico" />
        <meta name="msapplication-task" content="name=About;action-uri=/#about;icon-uri=/favicon.ico" />
        <meta name="msapplication-task" content="name=Projects;action-uri=/#projects;icon-uri=/favicon.ico" />
        <meta name="msapplication-task" content="name=Contact;action-uri=/#contact;icon-uri=/favicon.ico" />
        <meta name="msapplication-TileImage" content="/mstile-150x150.png" />
        <meta name="msapplication-square70x70logo" content="/mstile-70x70.png" />
        <meta name="msapplication-square150x150logo" content="/mstile-150x150.png" />
        <meta name="msapplication-wide310x150logo" content="/mstile-310x150.png" />
        <meta name="msapplication-square310x310logo" content="/mstile-310x310.png" />
        <meta name="msapplication-notification" content="frequency=30;polling-uri=https://rianhasansiam.me/api/notifications" />
        <meta name="twitter:app:name:iphone" content="Rian Hasan Siam Portfolio" />
        <meta name="twitter:app:id:iphone" content="com.rianhasansiam.portfolio" />
        <meta name="twitter:app:name:ipad" content="Rian Hasan Siam Portfolio" />
        <meta name="twitter:app:id:ipad" content="com.rianhasansiam.portfolio" />
        <meta name="twitter:app:name:googleplay" content="Rian Hasan Siam Portfolio" />
        <meta name="twitter:app:id:googleplay" content="com.rianhasansiam.portfolio" />
        <meta name="al:ios:app_name" content="Rian Hasan Siam Portfolio" />
        <meta name="al:ios:app_store_id" content="com.rianhasansiam.portfolio" />
        <meta name="al:android:app_name" content="Rian Hasan Siam Portfolio" />
        <meta name="al:android:package" content="com.rianhasansiam.portfolio" />
        <meta name="al:web:url" content="https://rianhasansiam.me" />
        <meta name="fb:app_id" content="your-facebook-app-id" />
        <meta name="fb:admins" content="rianhasan1971" />
        <meta name="og:see_also" content="https://github.com/rianhasansiam" />
        <meta name="og:see_also" content="https://www.linkedin.com/in/rian-hasan-siam/" />
        <meta name="pinterest" content="nopin" />
        <meta name="pinterest-rich-pin" content="true" />
        <meta name="article:author" content="Rian Hasan Siam" />
        <meta name="article:publisher" content="https://rianhasansiam.me" />
        <meta name="news_keywords" content="Full Stack Developer, React, Next.js, JavaScript, TypeScript, Node.js, Web Development, Bangladesh" />
        <meta name="standout" content="https://rianhasansiam.me" />
        <meta name="syndication-source" content="https://rianhasansiam.me" />
        <meta name="original-source" content="https://rianhasansiam.me" />
        <meta name="first-published-at" content="2023-01-01T00:00:00Z" />
        <meta name="last-modified" content="${new Date().toISOString()}" />
        <meta name="content-language" content="en" />
        <meta name="content-type" content="text/html; charset=utf-8" />
        <meta name="expires" content="never" />
        <meta name="cache-control" content="public, max-age=31536000" />
        <meta name="pragma" content="public" />
        <meta name="web_author" content="Rian Hasan Siam" />
        <meta name="web_type" content="Portfolio" />
        <meta name="web_category" content="Technology" />
        <meta name="web_tag" content="Full Stack Developer" />
        <meta name="web_tag" content="React Developer" />
        <meta name="web_tag" content="Next.js Developer" />
        <meta name="web_tag" content="JavaScript Developer" />
        <meta name="web_tag" content="TypeScript Developer" />
        <meta name="web_tag" content="Node.js Developer" />
        <meta name="web_tag" content="MongoDB Developer" />
        <meta name="web_tag" content="Portfolio" />
        <meta name="web_tag" content="Bangladesh" />
        <meta name="web_tag" content="Dhaka" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="p:domain_verify" content="your-pinterest-verification-code" />
        <meta name="alexaVerifyID" content="your-alexa-verification-code" />
        <meta name="norton-safeweb-site-verification" content="your-norton-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        <meta name="facebook-domain-verification" content="your-facebook-domain-verification-code" />
        <meta name="verify-v1" content="your-google-verification-code" />
        <meta name="wot-verification" content="your-wot-verification-code" />
        <meta name="google-translate-customization" content="your-google-translate-customization-code" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          {children}
        </div>
      </body>
    </html>
  )
}
