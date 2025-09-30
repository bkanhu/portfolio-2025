import { formatDate, getBlogPosts } from "@/app/blog/utils";
import { baseUrl } from "@/app/sitemap";
import BackButton from "@/components/Pages/Blogs/BackButton";
import { CustomMDX } from "@/components/Pages/Blogs/mdx";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const slug = params.slug;
  const post = getBlogPosts().find((post) => post.slug === slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image || `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title: `${title} | B Kanhu`,
    description,
    openGraph: {
      title: `${title} | B Kanhu`,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | B Kanhu`,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }) {
  const slug = await params?.slug;
  const post = getBlogPosts().find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <header className="mt-24 px-4 md:px-20 lg:px-56">
        <BackButton
          className={cn(
            "font-vietnam, flex items-center justify-center gap-2 text-woodsmoke-50"
          )}
        >
          <ChevronLeft /> Back
        </BackButton>
      </header>
      <section className="px-4 font-vietnam md:px-20 lg:px-56">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.slug}`,
              author: {
                "@type": "Person",
                name: "B Kanhu Charan",
              },
            }),
          }}
        />
        <div className="mb-8 mt-2 flex flex-col items-center justify-center gap-y-4 rounded-md bg-gradient-to-tr from-[#f1f4f9] to-[#c7d1e3] p-12 text-sm dark:from-[#91b0af] dark:to-[#b391a2]">
          <h1 className="title text-2xl font-semibold">
            {post.metadata.title}
          </h1>
          <p className="text-sm text-neutral-600 dark:text-neutral-800">
            {formatDate(post.metadata.publishedAt)}
          </p>
          <div className="flex flex-row items-center justify-center gap-2">
            <Link href="/" className="font-medium text-gray-600">
              Home
            </Link>
            <ChevronRight className="text-gray-600" size={14} />
            <Link href="/blog" className="font-medium text-gray-600">
              Blog
            </Link>
            <ChevronRight className="text-gray-600" size={14} />
            <Link
              href="#"
              className="line-clamp-1 break-words font-normal text-gray-500"
            >
              {post?.metadata?.title}
            </Link>
          </div>
        </div>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </section>
    </>
  );
}
