import type { MetadataRoute } from "next";
import { seo } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: seo.url, lastModified: new Date(), priority: 1 }];
}
