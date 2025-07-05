import Section from "@/components/GlobalLayout/Section";
import OrganisationCard from "@/components/Pages/About/OrganisationCard";

const toolsNSkills = {
  programming: [
    "React JS",
    "Next JS",
    "Tailwind CSS",
    "SCSS",
    "HTML5 & CSS3",
    "Javascript",
    "Bootstrap",
  ],
  toolsAndSoftware: ["Figma", "VS Code", "Git", "Github", "Netlify"],
  softSkills: ["Problem Solving", "Attention to detail"],
};
const ExpAndEdu = () => {
  return (
    <>
      <Section className="font-vietnam md:px-[50px] lg:px-[258px]">
        <div className="flex w-full flex-col flex-wrap space-y-6 md:flex-row md:flex-nowrap md:space-y-0">
          <div className="basis-4/12">
            <h2 className="text-2xl text-woodsmoke-50">Experience</h2>
          </div>
          <div className="basis-8/12">
            <OrganisationCard
              OrganisationName="SkentinoTech"
              RoleInOrganisation="Front-end Developer"
              EmploymentType="Full Time "
              OrganisationAddress="Bhubaneswar, Odisha"
              YearInOrganisation="Aug 2023 - Present"
            ></OrganisationCard>
            <OrganisationCard
              OrganisationName="Freelance"
              RoleInOrganisation="Frontend Developer"
              EmploymentType="Self-employed"
              OrganisationAddress="Sonepur, Odisha"
              YearInOrganisation="Sept 2021 - March 2022"
            ></OrganisationCard>
            <OrganisationCard
              OrganisationName="TechMinions.in"
              RoleInOrganisation="Tech Content Writter"
              EmploymentType="Self-employed"
              OrganisationAddress="Sonepur, Odisha"
              YearInOrganisation="April 2017 - March 2019"
            ></OrganisationCard>
          </div>
        </div>
      </Section>
      <Section className="my-8 md:px-[50px] lg:px-[258px]">
        <div className="flex w-full flex-col flex-wrap space-y-6 md:flex-row md:flex-nowrap md:space-y-0">
          <div className="basis-4/12">
            <h2 className="text-2xl text-woodsmoke-50">Academics</h2>
          </div>
          <div className="basis-8/12">
            <OrganisationCard
              OrganisationName="Sonepur College"
              ShortDesc="Bachelors in Computer Science"
              OrganisationAddress="Sonepur, Odisha"
              YearInOrganisation="2017 - 2020"
            ></OrganisationCard>
            <OrganisationCard
              OrganisationName="Yuvodaya Jr. College"
              ShortDesc="+2 with Phy, Chem, Math, &amp; Info. Tech."
              OrganisationAddress="Bolangir, Odisha"
              YearInOrganisation="2015 - 2017"
            ></OrganisationCard>
          </div>
        </div>
      </Section>
      <Section className="my-8 md:px-[50px] lg:px-[258px]">
        <div className="flex w-full flex-col flex-wrap space-y-6 md:flex-row md:flex-nowrap md:space-y-0">
          <div className="basis-4/12">
            <h2 className="text-2xl text-woodsmoke-50">Tools &amp; Skills</h2>
          </div>
          <div className="basis-8/12">
            <h4 className="mb-3 text-xl font-medium text-woodsmoke-100">
              Language and Frameworks
            </h4>

            {toolsNSkills.programming.map((data, index) => (
              <span
                className="mb-2 mr-2 inline-block rounded-full border border-woodsmoke-300 px-3 py-1 text-woodsmoke-100"
                key={index}
              >
                {data}
              </span>
            ))}
            <h4 className="mb-3 mt-4 text-xl font-medium text-woodsmoke-100">
              Tools
            </h4>

            {toolsNSkills.toolsAndSoftware.map((data, index) => (
              <span
                className="mb-2 mr-2 inline-block rounded-full border border-woodsmoke-300 px-3 py-1 text-woodsmoke-100"
                key={index}
              >
                {data}
              </span>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default ExpAndEdu;
