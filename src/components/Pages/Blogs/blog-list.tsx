import { formatDate } from "@/app/blog/utils";
import { cn } from "@/lib/utils";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BlogList({ posts }: { posts: any }) {
  // const allBlogs = getBlogPosts();

  return (
    <>
      {posts
        .toSorted((a, b) => {
          return (
            new Date(b.metadata.publishedAt).getTime() -
            new Date(a.metadata.publishedAt).getTime()
          );
        })
        .map((post) => (
          <article key={post?.slug} className="mb-8">
            <div className="flex w-full flex-col space-x-0 md:flex-row md:items-start md:justify-start md:space-x-2">
              <time
                dateTime={post?.metadata.publishedAt}
                className="w-[200px] text-sm tabular-nums text-woodsmoke-300"
              >
                {formatDate(post?.metadata.publishedAt, false)}
              </time>
              <Link
                href={`/blog/${post?.slug}`}
                className="flex w-full flex-col hover:underline"
              >
                <h3
                  className={cn(
                    "w-full text-lg tracking-tight text-woodsmoke-50"
                  )}
                >
                  {post?.metadata?.title}
                </h3>
                <p className={cn("text-woodsmoke-300")}>
                  {post?.metadata?.summary}
                </p>
              </Link>
            </div>
          </article>
        ))}
    </>
  );
}
