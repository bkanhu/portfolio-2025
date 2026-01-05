import FadeUp from "@/components/animations/fade-up";
import Section from "@/components/GlobalLayout/Section";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <Section className="py-40 font-vietnam lg:py-40">
      <div className="flex flex-col gap-10 md:flex-row md:gap-36">
        <div className="w-full md:w-1/2">
          <FadeUp delay={0.1}>
            <Image
              src="/profile-pic.png"
              alt="Image of B Kanhu Charan"
              height={100}
              width={100}
              priority={true}
              className="mb-8 h-16 w-16 rounded-full border-2 border-brand-500 object-cover"
            />
          </FadeUp>
          <FadeUp delay={0.3}>
            <h1 className="w-auto text-5xl font-semibold leading-normal text-woodsmoke-50">
              Hello! I&apos;m{" "}
              <span className="inline-block font-medium">B Kanhu Charan</span>
            </h1>
          </FadeUp>
        </div>
        <div className="w-full md:w-1/2">
          <FadeUp delay={0.5}>
            <h2 className="text-xl font-medium text-woodsmoke-100">
              Frontend-focused MERN Stack Developer based in Bhubaneswar, India.
            </h2>
          </FadeUp>
          <FadeUp delay={0.7}>
            <p className="my-6 text-lg font-normal text-woodsmoke-300">
              I craft joyful digital experiences. Previously at SkentinoTech.
            </p>
          </FadeUp>
          <FadeUp delay={0.9}>
            <Link
              href="https://drive.google.com/file/d/1YNMBeYJtA1E4FiYWmbK-TpgucCRshQOv/view?usp=sharing"
              aria-label="Link to Resume link"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <span className="duration-900 h-2 w-2 animate-pulse rounded-full bg-brand-500 p-2 ease-in-out"></span>
              <p className="text-woodsmoke-100">Open to new opportunities</p>
            </Link>
          </FadeUp>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <p className="flex animate-bounce items-center gap-2 text-sm text-woodsmoke-100 duration-1000 ease-in-out">
          {" "}
          <ArrowDown size={16} />
          Scroll
        </p>
      </div>
    </Section>
  );
};

export default Hero;
