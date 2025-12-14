import {
  Figma,
  FileTypeReactjs,
  FileTypeScss2,
  Git,
  GithubAction,
  GithubSolid,
  Mongodb,
  Nextjs,
  Tailwindcss,
  Typescript,
} from "@/components/GlobalLayout/Icons";
import Section from "@/components/GlobalLayout/Section";
import OrganisationCard from "@/components/Pages/Home/OrganisationCard";

const toolsNSkills = {
  programming: [
    { label: "React JS", icon: <FileTypeReactjs /> },
    { label: "Next JS", icon: <Nextjs /> },
    { label: "Typescript", icon: <Typescript /> },
    { label: "Tailwind CSS", icon: <Tailwindcss /> },
    { label: "SCSS", icon: <FileTypeScss2 /> },
    { label: "HTML5 & CSS3", icon: null },
    // { label: "Javascript", icon: <Javascript /> },
    { label: "Bootstrap", icon: null },
  ],
  toolsAndSoftware: [
    { label: "MongoDB", icon: <Mongodb /> },
    { label: "Git", icon: <Git /> },
    { label: "Github", icon: <GithubSolid /> },
    { label: "Github Action", icon: <GithubAction /> },
    { label: "Figma", icon: <Figma /> },
    { label: "Digital Ocean", icon: null },
    { label: "VS Code", icon: null },
  ],
  softSkills: [
    { label: "Problem Solving", icon: null },
    { label: "Attention to detail", icon: null },
  ],
};

const ExpAndEdu = () => {
  return (
    <>
      <Section className="font-vietnam">
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
              YearInOrganisation="Aug 2023 - Oct 2025"
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
      <Section className="my-8">
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
      <Section className="my-8">
        <div className="flex w-full flex-col flex-wrap space-y-6 md:flex-row md:flex-nowrap md:space-y-0">
          <div className="basis-4/12">
            <h2 className="text-2xl text-woodsmoke-50">Tools &amp; Skills</h2>
          </div>
          <div className="basis-8/12">
            <h4 className="mb-3 text-xl font-medium text-woodsmoke-100">
              Language and Frameworks
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-4">
              {toolsNSkills.programming.map((data, index) => (
                <span
                  className="mb-2 mr-2 flex items-center justify-center gap-2 rounded-full border border-woodsmoke-300 px-3 py-1 text-woodsmoke-100"
                  key={data?.label + index}
                >
                  {data?.icon}
                  {data?.label}
                </span>
              ))}
            </div>
            <h4 className="mb-3 mt-4 text-xl font-medium text-woodsmoke-100">
              Tools
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-4">
              {toolsNSkills.toolsAndSoftware.map((data, index) => (
                <span
                  className="mb-2 mr-2 flex items-center justify-center gap-2 rounded-full border border-woodsmoke-300 px-3 py-1 text-woodsmoke-100"
                  key={data?.label + index}
                >
                  {data?.icon}
                  {data?.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default ExpAndEdu;
