import IndividualWorkPageHeader from "@/components/Pages/Works/IndividualWorkPageHeader";
import Image from "next/image";

const ProjectPage = () => {
  return (
    <>
      <IndividualWorkPageHeader
        name="Sticky Hue"
        live={{
          name: "Sticky Hue",
          link: "https://stickyhue.netlify.app/",
        }}
        code={{
          name: "Github",
          link: "https://github.com/bkanhu/StickyHue",
        }}
      />
      <section className="mx-auto w-10/12 max-w-[1400px]">
        <Image
          src="/images/projects/stickyhue.png"
          height={650}
          width={1200}
          alt="Sticky hue project screenshoot"
          className=""
        />
      </section>
    </>
  );
};

export default ProjectPage;
