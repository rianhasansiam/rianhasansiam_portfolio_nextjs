export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Rian Hasan Siam - Full Stack Developer</title>
    <description>Portfolio and professional updates from Rian Hasan Siam, Full Stack Developer specializing in React, Next.js, and modern web technologies.</description>
    <link>https://rianhasansiam.me</link>
    <atom:link href="https://rianhasansiam.me/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <generator>Next.js</generator>
    <webMaster>rianhasan1971@gmail.com (Rian Hasan Siam)</webMaster>
    <managingEditor>rianhasan1971@gmail.com (Rian Hasan Siam)</managingEditor>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Programming</category>
    <ttl>1440</ttl>
    <image>
      <url>https://rianhasansiam.me/rianface.jpg</url>
      <title>Rian Hasan Siam</title>
      <link>https://rianhasansiam.me</link>
      <width>144</width>
      <height>144</height>
    </image>
    <item>
      <title>Full Stack Developer Portfolio - Rian Hasan Siam</title>
      <description>Professional portfolio showcasing 50+ projects and 2+ years of experience in React, Next.js, Node.js, and modern web technologies.</description>
      <link>https://rianhasansiam.me</link>
      <guid isPermaLink="true">https://rianhasansiam.me</guid>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <category>Portfolio</category>
      <category>Full Stack Development</category>
    </item>
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
