export async function GET() {
  const humans = `/* TEAM */
Developer: Rian Hasan Siam
Contact: rianhasan1971@gmail.com
Location: Dhaka, Bangladesh
GitHub: https://github.com/rianhasansiam
LinkedIn: https://www.linkedin.com/in/rian-hasan-siam/

/* SITE */
Last update: ${new Date().toISOString()}
Language: English
Doctype: HTML5
IDE: Visual Studio Code
Technologies: React, Next.js, Node.js, MongoDB, Express.js, Tailwind CSS

/* THANKS */
Special thanks to the open-source community for their amazing contributions.
Next.js team for creating an incredible framework.
Vercel for excellent hosting and deployment services.
All the developers who inspire and share their knowledge.`

  return new Response(humans, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
