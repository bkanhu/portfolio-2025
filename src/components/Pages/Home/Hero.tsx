import FadeUp from "@/components/animations/fade-up";
import Section from "@/components/GlobalLayout/Section";
import Image from "next/image";

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
              className="mb-8 h-16 w-16 rounded-2xl object-cover"
            />
          </FadeUp>
          <FadeUp delay={0.3}>
            <h1 className="w-auto text-5xl font-semibold leading-normal text-woodsmoke-50">
              Hello! I&apos;m B Kanhu Charan
            </h1>
          </FadeUp>
        </div>
        <div className="w-full md:w-1/2">
          <FadeUp delay={0.5}>
            <h2 className="text-xl font-medium text-woodsmoke-100">
              A Front-end Developer based in Bhubaneswar, India.
            </h2>
          </FadeUp>
          <FadeUp delay={0.7}>
            <p className="my-6 text-lg font-normal text-woodsmoke-300">
              I craft joyful digital experiences. Currently working at
              SkentinoTech.
            </p>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
