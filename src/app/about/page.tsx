import ExpAndEdu from "@/components/Pages/About/ExpAndEdu";
import Hero from "@/components/Pages/About/Hero";

export const metadata = {
  title: "About - B Kanhu Charan",
  description:
    "B Kanhu Charan, a skilled Front-end Web Developer based in India. With a passion for crafting immersive digital experiences.",
};

const About = () => {
  return (
    <>
      <Hero />
      <ExpAndEdu />
    </>
  );
};

export default About;
