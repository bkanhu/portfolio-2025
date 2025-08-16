import About from "@/components/Pages/Home/About";
import ExpAndEdu from "@/components/Pages/Home/ExpAndEdu";
import Hero from "@/components/Pages/Home/Hero";
import Works from "@/components/Pages/Home/Works";

export const metadata = {
  title: "Home - B Kanhu Charan",
  description:
    "B Kanhu Charan, a skilled Front-end Web Developer based in India. With a passion for crafting immersive digital experiences.",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <ExpAndEdu />
      <Works />
    </>
  );
};

export default HomePage;
