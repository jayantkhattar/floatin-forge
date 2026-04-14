import { Reveal } from "@/components/ui/reveal";

interface DarkHeroProps {
  children: React.ReactNode;
  className?: string;
}

export const DarkHero = ({ children, className = "" }: DarkHeroProps) => {
  return (
    <section className={`relative overflow-hidden bg-foreground text-background section-padding ${className}`}>
      {/* Animated accent shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/5 blur-2xl" />
      </div>
      <div className="container-tight relative z-10">
        <Reveal>
          {children}
        </Reveal>
      </div>
    </section>
  );
};
