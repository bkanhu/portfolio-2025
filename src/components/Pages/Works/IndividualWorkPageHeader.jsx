import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const IndividualWorkPageHeader = ({ name, live, code }) => {
  return (
    <header className="px-4 pb-10 pt-40 font-vietnam md:px-20 lg:px-60">
      <h1 className="w-auto text-5xl font-semibold leading-normal text-woodsmoke-50">
        {name}
      </h1>
      <Breadcrumb className="text-woodsmoke-200">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="text-woodsmoke-200 hover:text-woodsmoke-50"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/works"
              className="text-woodsmoke-200 hover:text-woodsmoke-50"
            >
              Works
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-woodsmoke-200">
              {name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-6 flex gap-2 md:items-end md:justify-end">
        {live ? (
          <div className="rounded-lg border border-woodsmoke-800 p-2">
            <p className="text-woodsmoke-300">View:</p>
            <Link
              href={live?.link}
              alt="link to project live page"
              className="flex items-center gap-1 text-woodsmoke-50 hover:text-brand-400"
            >
              {live?.name} <ArrowRight size={20} />
            </Link>
          </div>
        ) : null}
        {code ? (
          <div className="rounded-lg border border-woodsmoke-800 p-2">
            <p className="text-woodsmoke-300">Code:</p>
            <Link
              href={code?.link}
              alt="link to sticky hue github page"
              className="flex items-center gap-1 text-woodsmoke-50 hover:text-brand-400"
            >
              {code?.name} <ArrowRight size={20} />
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
};

export default IndividualWorkPageHeader;
