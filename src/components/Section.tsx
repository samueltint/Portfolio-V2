import { cn } from "@/lib/utils";
import type { JSX } from "react";

function Section({
  id,
  ariaLabel,
  className,
  children,
}: {
  id: string;
  ariaLabel: string;
  className?: string;
  children: React.ReactNode;
}): JSX.Element {
  return (
    <section id={id} aria-label={ariaLabel} className="p-10 md:p-24 pb-0">
      <div
        className={cn(
          "flex flex-col items-start justify-center px-4 border-l-4 border-muted-foreground gap-4",
          className
        )}
      >
        {children}
      </div>
    </section>
  );
}

export default Section;
