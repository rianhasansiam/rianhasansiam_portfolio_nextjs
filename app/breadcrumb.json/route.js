export async function GET() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://rianhasansiam.me"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://rianhasansiam.me/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Skills",
        "item": "https://rianhasansiam.me/#skills"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://rianhasansiam.me/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Education",
        "item": "https://rianhasansiam.me/#education"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://rianhasansiam.me/#contact"
      }
    ]
  }

  return new Response(JSON.stringify(breadcrumbData), {
    headers: {
      'Content-Type': 'application/ld+json',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
