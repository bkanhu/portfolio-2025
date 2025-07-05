import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type WordCard = {
  imageUrl: string;
  imageName: string;
  title: string;
  role: string;
  link: string;
};

const WorkCard = ({ imageUrl, imageName, title, role, link }: WordCard) => {
  return (
    <Link href={link} aria-label={`Link to ${title}`} className="group block">
      <div className="relative z-10">
        <div className="absolute left-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-woodsmoke-50 opacity-0 transition-all duration-300 group-hover:-rotate-45 group-hover:opacity-100">
          <MoveRight className="group-hover:" />
        </div>
        <Image
          src={`${imageUrl}`}
          alt={`${imageName}`}
          height={750}
          width={750}
          className="h-96 w-auto cursor-pointer object-contain transition-all duration-300 group-hover:scale-95"
        />
      </div>
      <div className="transition-all duration-300 group-hover:px-2 md:mt-4">
        <h3 className="mb-2 text-lg text-woodsmoke-100">{title}</h3>
        <p className="text-sm uppercase text-woodsmoke-300">{role}</p>
      </div>
    </Link>
  );
};

export default WorkCard;
