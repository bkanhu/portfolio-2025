import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

const Section = ({ className, children, ...props }: SectionProps) => {
  return (
    <section
      className={cn(
        "scroll-mt-20",
        "mx-auto max-w-7xl px-4 md:px-20 lg:px-40",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
