import Link from "next/link";
type ProjectCardProps = {
  ProjectName: string;
  WorkDesc: string;
  ShortDesc: string;
  LiveProject: string;
  RepoProject: string;
};

const ProjectCard = ({
  ProjectName,
  WorkDesc,
  ShortDesc,
  LiveProject,
  RepoProject,
}: ProjectCardProps) => {
  return (
    <div className="relative">
      <div className="m-4 font-medium md:m-8">
        <p className="mb-3 text-xs uppercase text-gray-500">{WorkDesc}</p>
        <h3 className="text-xl text-gray-200 md:text-3xl">{ProjectName}</h3>
        <p className="my-3 h-10 text-sm leading-5 text-gray-500">{ShortDesc}</p>
        <div className="flex gap-4">
          {LiveProject !== "" && (
            <Link
              href={LiveProject}
              className="text-blue-500 transition duration-300 hover:text-blue-600"
              target="_blank"
              // htmlRef="bkanhu"
            >
              Live Link{" "}
            </Link>
          )}
          {RepoProject !== "" && (
            <Link
              href={RepoProject}
              className="text-blue-500 transition duration-300 hover:text-blue-600"
            >
              Repo Link{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
