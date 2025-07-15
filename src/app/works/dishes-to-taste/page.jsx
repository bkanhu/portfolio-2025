import IndividualWorkPageHeader from "@/components/Pages/Works/IndividualWorkPageHeader";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <>
      <IndividualWorkPageHeader
        name="Dishes To Taste"
        live={{
          name: "Dishes To Taste",
          link: "https://dishestotaste.com/",
        }}
      />
      <section className="mx-auto w-10/12 max-w-[1400px]">
        <Image
          src="/images/projects/dishes-to-taste.png"
          height={650}
          width={1200}
          alt="Dishes To Taste project screenshoot"
          className=""
        />
      </section>
    </>
  );
};

export default ProjectPage;
