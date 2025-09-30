import Section from "@/components/GlobalLayout/Section";
import { BlogPosts } from "@/components/Pages/Blogs/posts";

export const metadata = {
  title: "Blog",
  description: "Read my blog.",
};

export default function Page() {
  return (
    <Section className="py-24 font-vietnam">
      <h1 className="mb-8 font-vietnam text-2xl font-semibold tracking-tighter text-woodsmoke-50">
        My Blog
      </h1>
      <BlogPosts />
    </Section>
  );
}
