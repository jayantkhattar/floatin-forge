import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SectionCtaAction {
  label: string;
  href: string;
  variant?: "hero" | "hero-outline" | "accent" | "outline";
  icon?: ReactNode;
  className?: string;
}

interface SectionCtaProps {
  title: string;
  description?: string;
  actions: SectionCtaAction[];
  className?: string;
  contentClassName?: string;
  descriptionClassName?: string;
  actionsClassName?: string;
  titleClassName?: string;
  maxWidthClassName?: string;
  align?: "center" | "left";
  leading?: ReactNode;
}

export const SectionCta = ({
  title,
  description,
  actions,
  className,
  contentClassName,
  descriptionClassName,
  actionsClassName,
  titleClassName,
  maxWidthClassName = "max-w-2xl",
  align = "center",
  leading,
}: SectionCtaProps) => {
  const isCentered = align === "center";

  return (
    <div
      className={cn(
        "container-tight flex flex-col gap-7 md:gap-8",
        isCentered && "items-center text-center",
        className,
      )}
    >
      {leading}
      <div className={cn("flex flex-col gap-4", maxWidthClassName, contentClassName)}>
        <h2 className={cn("text-3xl md:text-4xl font-heading font-bold", titleClassName)}>{title}</h2>
        {description ? (
          <p className={cn("text-muted-foreground", isCentered && "mx-auto", descriptionClassName)}>{description}</p>
        ) : null}
      </div>

      <div className={cn("flex flex-col sm:flex-row justify-center gap-3", !isCentered && "justify-start", actionsClassName)}>
        {actions.map((action) => (
          <Link key={`${action.href}-${action.label}`} to={action.href} className="inline-flex">
            <Button variant={action.variant ?? "hero"} size="xl" className={action.className}>
              {action.label}
              {action.icon ?? <ArrowRight className="ml-1 h-4 w-4" />}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};