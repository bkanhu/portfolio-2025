import Section from "@/components/GlobalLayout/Section";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const About = () => {
  return (
    <Section
      className="my-20 mb-28 flex w-full flex-col flex-wrap space-y-6 font-vietnam md:flex-row md:flex-nowrap md:items-start md:justify-between md:space-y-0"
      id="about"
    >
      <div className="basis-4/12">
        <h1 className="mb-2 text-3xl text-woodsmoke-50">About 🧔🏽</h1>
        <p className="text-woodsmoke-100">A little bit about me</p>
      </div>

      <div className="basis-8/12 space-y-5 font-normal text-woodsmoke-300">
        <h4 className="font-medium">Hey again 👋</h4>
        <p>
          I&#39;m <span className="font-medium">B Kanhu Charan</span>, a
          Frontend Developer by profession.
        </p>

        <p className="mb-6 font-normal">
          I believe,{" "}
          <span className="font-medium text-woodsmoke-100">
            a product should effectively, efficiently, and beautifully solve the
            problem it promises to address.
          </span>
          That&apos;s why I enjoy working on both the design and development
          aspects of the product development lifecycle.
        </p>
        <p>
          On the professional front, I have worked with various small-scale
          businesses to help them grow with the help of technology. And now
          I&apos;m working at SkentinoTech to take that one step further.
        </p>
        <p>
          Outside of work, I enjoy designing and fine-tuning computer setups.
          When I&apos;m not doing that, I&apos;m usually aimlessly browsing
          Google Maps or brewing a cup of coffee.
        </p>

        <p>
          Do you have an Exciting project for me?{" "}
          <Link
            href="#contact"
            aria-label="Link to Contact Section"
            className="text-woodsmoke-50 underline underline-offset-4"
          >
            Send an E-mail
          </Link>
          . Or want to have a general conversation? Feel Free to send a message
          on{" "}
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
        <Button variant="secondary" asChild>
          <Link
            href="https://drive.google.com/file/d/1Ox1lquPWVkcDI6cLv2i029BZ9JnBRJOS/view?usp=drivesdk"
            target="blank"
          >
            Resume
            <Download />
          </Link>
        </Button>
      </div>
    </Section>
  );
};

export default About;
