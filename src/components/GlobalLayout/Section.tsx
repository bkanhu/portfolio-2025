import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type SectionProps = {
  className?: string;
  children: ReactNode;
};

const Section = ({ className, children }: SectionProps) => {
  return (
    <section className={cn("mx-auto px-4 md:px-20 lg:px-40", className)}>
      {children}
    </section>
  );
};

export default Section;
