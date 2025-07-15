import Section from "@/components/GlobalLayout/Section";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Section className="py-40 font-vietnam lg:py-40">
      <div className="flex flex-col gap-10 md:flex-row md:gap-36">
        <div className="w-full md:w-1/2">
          <Image
            src="/profile-pic.png"
            alt="Image of B Kanhu Charan"
            height={100}
            width={100}
            priority={true}
            className="mb-8 h-16 w-16 rounded-2xl object-cover"
          />
          <h1 className="w-auto text-5xl font-semibold leading-normal text-woodsmoke-50">
            Hello! I&apos;m B Kanhu Charan
          </h1>
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-xl font-medium text-woodsmoke-100">
            A Front-end Developer based in Bhubaneswar, India.
          </h2>
          <p className="my-6 text-lg font-normal text-woodsmoke-300">
            I craft joyful digital experiences. Currently working at
            SkentinoTech.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
