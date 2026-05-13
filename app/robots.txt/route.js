export async function GET() {
  const robots = `User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/
Disallow: /private/

Sitemap: https://rianhasansiam.me/sitemap.xml
Host: rianhasansiam.me`

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  })
}
