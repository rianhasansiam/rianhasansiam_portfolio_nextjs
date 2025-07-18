export async function GET() {
  const searchData = {
    "@context": "https://schema.org",
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://rianhasansiam.me/?q={search_term_string}",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "query-input": "required name=search_term_string"
  }

  return new Response(JSON.stringify(searchData), {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
