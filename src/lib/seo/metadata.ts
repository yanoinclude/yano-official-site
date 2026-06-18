import { defaultSeo } from "@/content/pages/seo";
import { siteConfig } from "@/content/pages/site";

export type PageMetadata = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
};

export function resolveMetadata(metadata: PageMetadata = {}) {
  const title = metadata.title
    ? `${metadata.title} | ${siteConfig.name}`
    : defaultSeo.title;
  const description = metadata.description ?? defaultSeo.description;
  const canonical = new URL(
    metadata.canonical ?? "/",
    siteConfig.url,
  ).toString();
  const ogImage = new URL(
    metadata.ogImage ?? defaultSeo.ogImage,
    siteConfig.url,
  ).toString();

  return {
    title,
    description,
    canonical,
    ogImage,
    twitterCard: defaultSeo.twitterCard,
  };
}
