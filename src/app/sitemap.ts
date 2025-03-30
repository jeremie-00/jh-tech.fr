import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date().toISOString(),
    },
  ];
}
