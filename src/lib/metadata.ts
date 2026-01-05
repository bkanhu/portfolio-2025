import type { Metadata } from "next";

export const baseUrl = "https://bkanhu.netlify.app";

interface GenerateMetadataProps {
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  tags?: string[];
}

export function generateMetadata({
  title,
  description,
  image = "/og-image.jpg",
  type = "website",
  publishedTime,
  tags,
}: GenerateMetadataProps): Metadata {
  const metadataTitle = title.includes("B Kanhu") ? title : `${title} | B Kanhu`;

  return {
    title: metadataTitle,
    description,
    keywords: tags?.join(", "),
    openGraph: {
      title: metadataTitle,
      description,
      url: baseUrl,
      siteName: "B Kanhu | Portfolio",
      images: [
        {
          url: `${baseUrl}${image}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && {
        publishedTime,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: metadataTitle,
      description,
      images: [`${baseUrl}${image}`],
    },
  };
}

interface GenerateBlogMetadataProps {
  title: string;
  description: string;
  publishedAt: string;
  tags?: string[];
  image?: string;
}

export function generateBlogMetadata({
  title,
  description,
  publishedAt,
  tags,
  image = "/og-image.jpg",
}: GenerateBlogMetadataProps): Metadata {
  return generateMetadata({
    title,
    description,
    image,
    type: "article",
    publishedTime: publishedAt,
    tags,
  });
}
