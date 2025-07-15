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
      <Section className="py-8 font-vietnam" id="contact">
        <div className="space-y-6">
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
        <div className="space-y-6 py-8">
          <p className="text-woodsmoke-300">Or Else, say hi.</p>
          <a
            href="mailto:iamkanhuc@gmail.com"
            alt="link to email"
            className="group relative inline-block text-3xl font-bold text-woodsmoke-100 hover:text-brand-500 md:text-5xl"
          >
            iamkanhuc@gmail.com
            <span className="absolute -bottom-6 left-0 block h-1 w-0 bg-brand-500 transition-all duration-200 group-hover:w-full"></span>
          </a>
        </div>
      </Section>
      <footer className="px-4 py-8 font-apfelGrotezk text-base text-woodsmoke-300 md:px-20 md:text-sm lg:px-40">
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
                  href="/about"
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
