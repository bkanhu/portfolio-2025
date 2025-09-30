import { formatDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <>
      {allBlogs
        .toSorted((a, b) => {
          return (
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
          );
        })
        .map((post) => (
          <article key={post?.slug} className="mb-6">
            <div className="flex w-full flex-col space-x-0 md:flex-row md:space-x-2">
              <time
                dateTime={post?.metadata.publishedAt}
                className="w-[150px] tabular-nums text-woodsmoke-200"
              >
                {formatDate(post?.metadata.publishedAt, false)}
              </time>
              <h3 className="w-full tracking-tight text-woodsmoke-100">
                <Link
                  href={`/blog/${post?.slug}`}
                  className="w-full py-4 hover:underline"
                >
                  {post?.metadata?.title}
                </Link>
              </h3>
            </div>
          </article>
        ))}
    </>
  );
}
