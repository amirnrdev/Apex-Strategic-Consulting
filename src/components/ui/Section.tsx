import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
  background?: "white" | "gray" | "dark";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, children, container = true, background = "white", ...props }, ref) => {
    const backgrounds = {
      white: "bg-white",
      gray: "bg-slate-50",
      dark: "bg-slate-900 text-white",
    };

    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", backgrounds[background], className)}
        {...props}
      >
        {container ? (
          <div className="container mx-auto px-4 md:px-6 max-w-7xl">{children}</div>
        ) : (
          children
        )}
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };
