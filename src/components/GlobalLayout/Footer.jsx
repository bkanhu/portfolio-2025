"use client";
import { Dribbble, Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
const SocialMedia = [
  {
    link: "https://github.com/bkanhu",
    name: "Github",
    icon: <Github />,
  },
  {
    link: "https://dribbble.com/bkanhu",
    name: "Dribbble",
    icon: <Dribbble />,
  },
  {
    link: "https://twitter.com/bkanhu7",
    name: "Twitter",
    icon: <Twitter />,
  },
  {
    link: "https://instagram.com/bkanhu7",
    name: "Instagram",
    icon: <Instagram />,
  },
];

const Footer = () => {
  const getYear = () => new Date().getFullYear();

  return (
    <>
      <Section
        className="flex w-full flex-col flex-wrap gap-4 space-y-6 py-8 font-vietnam md:flex-row md:flex-nowrap md:items-start md:justify-between md:space-y-0"
        id="contact"
      >
        <div className="basis-6/12 space-y-6">
          <h2 className="mb-6 text-4xl font-semibold text-woodsmoke-50">
            Get in touch
          </h2>
          <p className="w-full text-woodsmoke-300 md:w-9/12">
            Do you have an Exciting project for me?{" "}
            <Link
              href="#contact"
              aria-label="Link to Contact Section"
              className="text-woodsmoke-50 underline underline-offset-4"
            >
              Send an E-mail
            </Link>
            . Or want to have a general conversation? Feel Free to send a
            message on{" "}
            <Link
              href="https://x.com/bkanhu7"
              aria-label="Link to Twitter Page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-woodsmoke-50 underline underline-offset-4"
            >
              Twitter
            </Link>
            .
          </p>
        </div>
        <div className="basis-6/12 space-y-6 py-8">
          <p className="text-woodsmoke-300">Drop an e-mail</p>
          <a
            href="mailto:iamkanhuc@gmail.com"
            alt="link to email"
            className="group relative inline-block text-3xl font-bold text-woodsmoke-100 hover:text-brand-500 md:text-5xl"
          >
            iamkanhuc@gmail.com
            <span className="absolute -bottom-6 left-0 block h-1 w-0 bg-brand-500 transition-all duration-200 group-hover:w-full"></span>
          </a>
          <p className="capitalize text-woodsmoke-300">Find me on</p>
          <ul className="flex gap-4">
            {SocialMedia.map((social, index) => (
              <li key={index}>
                <a
                  href={social.link}
                  alt={`Link to ${social.name} Profile`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full p-2 text-lg text-woodsmoke-50 transition duration-300 hover:bg-brand-500 hover:text-brand-100 dark:text-brand-50 md:h-auto md:w-auto"
                >
                  <span className="sr-only">Link to {social.name} Profile</span>
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
      <footer className="mx-auto max-w-7xl px-4 py-8 font-vietnam text-base text-woodsmoke-300 md:px-20 md:text-sm lg:px-40">
        <div className="flex flex-col items-start justify-between gap-y-12 border-b border-woodsmoke-900 pb-8 md:flex-row md:gap-y-0">
          <div>
            <Link
              href="/"
              alt="Link to Home page"
              className="flex items-center gap-4"
            >
              <Image src="/profile-pic.png" alt="Logo" width={30} height={30} />
              <span className="">B Kanhu</span>
            </Link>
            <p className="pt-4">&copy; {getYear()} - B Kanhu</p>
          </div>
          <div>
            <ul className="flex flex-row gap-x-4">
              <li>
                <Link href="/" alt="Home" className="hover:text-brand-500">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href=".#about"
                  alt="About"
                  className="hover:text-brand-500"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/works"
                  alt="Works"
                  className="hover:text-brand-500"
                >
                  Works
                </Link>
              </li>
              <li>
                <Link href="/more" alt="More" className="hover:text-brand-500">
                  More
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="pt-8 text-left text-sm md:text-center md:text-xs">
          Made while drinking black coffee during a panic attack at the Mahanadi
          Shore, Sonepur
        </p>
      </footer>
    </>
  );
};

export default Footer;
