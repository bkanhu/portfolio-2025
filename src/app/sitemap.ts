import { getBlogPosts } from "@/app/blog/utils";

export const baseUrl = "https://bkanhu.netlify.app";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const routes = [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/works`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/works/dishes-to-taste`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/works/sticky-hue`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [...routes, ...blogs];
}
