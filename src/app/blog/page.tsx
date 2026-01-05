import Section from "@/components/GlobalLayout/Section";
import { BlogList } from "@/components/Pages/Blogs/blog-list";
import { getBlogPosts } from "./utils";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  const posts = getBlogPosts();

  return (
    <Section className="py-24 font-vietnam">
      <h1 className="mb-8 font-vietnam text-2xl font-semibold tracking-tighter text-woodsmoke-50">
        My Blog
      </h1>
      
      <BlogList posts={posts} />
    </Section>
  );
}
