import { siteConfig } from "./site";

export const defaultSeo = {
  title: siteConfig.title,
  description: siteConfig.description,
  ogImage: "/og-image.jpg",
  twitterCard: "summary_large_image",
} as const;
