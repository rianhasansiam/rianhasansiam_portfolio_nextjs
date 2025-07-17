import Head from 'next/head'

const SEOHead = ({
  title = "Rian Hasan Siam - Full Stack Developer | React & Next.js Expert",
  description = "Experienced Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Based in Dhaka, Bangladesh. View my portfolio showcasing 50+ projects and 2+ years of experience.",
  keywords = "Rian Hasan Siam, Full Stack Developer, React, Next.js, JavaScript, Web Development, Portfolio",
  image = "/og-image.jpg",
  url = "https://rianhasansiam.me",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": type === "article" ? "Article" : "WebPage",
    "headline": title,
    "description": description,
    "image": image,
    "url": url,
    "author": {
      "@type": "Person",
      "name": "Rian Hasan Siam",
      "url": "https://rianhasansiam.me"
    },
    "publisher": {
      "@type": "Person",
      "name": "Rian Hasan Siam",
      "url": "https://rianhasansiam.me"
    },
    "dateModified": new Date().toISOString(),
    "datePublished": new Date().toISOString()
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Rian Hasan Siam Portfolio" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@rianhasansiam" />
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  )
}

export default SEOHead
