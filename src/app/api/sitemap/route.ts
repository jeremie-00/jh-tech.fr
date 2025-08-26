export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://jh-tech.fr";

  const urls = [`${baseUrl}/`, `${baseUrl}/mentions-legales`];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      (url) => `
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml", // très important
    },
  });
}
