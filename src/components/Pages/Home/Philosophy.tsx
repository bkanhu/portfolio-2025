import Section from "@/components/GlobalLayout/Section";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const Philosophy = () => {
  return (
    <Section className="py-10 font-vietnam lg:py-10">
      <p className="mb-6 text-3xl font-normal text-woodsmoke-300">
        I believe,{" "}
        <span className="font-medium text-woodsmoke-100">
          a product should effectively, efficiently, and beautifully solve the
          problem it promises to address.
        </span>
      </p>
      <p className="text-3xl font-normal text-woodsmoke-300">
        That&apos;s why I enjoy working on both the design and development
        aspects of the product development lifecycle.
      </p>
      <div className="group mt-10 inline-flex items-center gap-4">
        <Link
          href="/about"
          aria-label="Link to About Page"
          className="flex gap-4 text-2xl text-woodsmoke-100 underline underline-offset-8 transition duration-300 hover:text-brand-500 dark:text-woodsmoke-50"
        >
          Read About
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-950 text-woodsmoke-50 group-hover:bg-brand-500">
            <ArrowRight className="transition duration-300 group-hover:-rotate-45" />
          </span>
        </Link>
      </div>
    </Section>
  );
};

export default Philosophy;
