import WorkCard from "@/components/Pages/Works/WorkCard";
import Section from "@/components/GlobalLayout/Section";

const Works = () => {
  return (
    <Section className="font-vietnam py-10 lg:py-10">
      <h2 className="mb-6 text-4xl font-semibold text-woodsmoke-50">
        Selected Works
      </h2>
      <div className="grid grid-cols-1 gap-20 text-woodsmoke-300 md:grid-cols-2">
        <WorkCard
          imageUrl="/images/works/skentino-tech/thumbnail.png"
          imageName="Skentino Tech Image"
          title="My Works at SkentinoTech"
          role="UI Designer + Frontend"
          link="/works/skentino-tech"
        />
        <WorkCard
          imageUrl="/images/works/dishes-to-taste/thumbnail.png"
          imageName="Dishes To Taste Image"
          title="Dishes To Taste"
          role="Frontend"
          link="/works/dishes-to-taste"
        />
        <WorkCard
          imageUrl="/images/works/stickyhue/thumbnail.png"
          imageName="StickyHue Image"
          title="StickyHue - A Vibrant Notes App"
          role="Frontend"
          link="/works/stickyhue"
        />
      </div>
    </Section>
  );
};

export default Works;
