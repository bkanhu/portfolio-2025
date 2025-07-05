import Hero from "@/components/Pages/Home/Hero";
import Philosophy from "@/components/Pages/Home/Philosophy";
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
      <Philosophy />
      <Works />
    </>
  );
};

export default HomePage;
