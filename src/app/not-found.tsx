import Section from "@/components/GlobalLayout/Section";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <Section className="mx-auto mb-48 mt-32 flex flex-col items-center justify-center">
      <Image
        src="/images/page-not-found.svg"
        alt="Image of a text 404 number written infront of a sketch hill."
        height={400}
        width={600}
        className="aspect-auto h-72 w-72"
      />
      <div className="mb-8 space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tighter text-woodsmoke-50">
          404 - Page Not Found
        </h1>
        <p className="mb-4 text-woodsmoke-100">
          The page you are looking for does not exist.
        </p>
      </div>
      <Button variant="secondary" asChild>
        <Link href="/">
          <ArrowLeft /> Go back home
        </Link>
      </Button>
    </Section>
  );
}
