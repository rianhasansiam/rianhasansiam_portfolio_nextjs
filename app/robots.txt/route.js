export async function GET() {
  const robots = `User-agent: *
Allow: /

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

Sitemap: https://rianhasansiam.me/sitemap.xml

# Block access to private files
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow all other content
Allow: /`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
