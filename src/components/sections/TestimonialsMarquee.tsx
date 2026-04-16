import { Star } from "lucide-react";

import { clientTestimonials, type ClientTestimonial } from "@/data/clientShowcase";

interface TestimonialsMarqueeProps {
  testimonials?: ClientTestimonial[];
}

const maskStyle = {
  WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
  maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
};

const TestimonialCard = ({ testimonial }: { testimonial: ClientTestimonial }) => {
  return (
    <article className="flex h-full w-[280px] flex-shrink-0 flex-col justify-between rounded-[1.75rem] border border-border/50 bg-card/95 p-5 shadow-card md:w-[340px]">
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/50 bg-muted/40 p-2">
            <img
              src={testimonial.logo}
              alt={`${testimonial.company} logo`}
              className="max-h-8 max-w-8 object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="min-w-0">
            <p className="font-heading text-base font-semibold leading-tight md:text-lg">{testimonial.name}</p>
            <p className="truncate text-sm text-muted-foreground">{testimonial.company}</p>
          </div>
        </div>

        <div className="flex gap-1 text-accent">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
        </div>

        <p className="text-sm leading-6 text-foreground/90">“{testimonial.text}”</p>
      </div>

      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground">
        {testimonial.role}
      </p>
    </article>
  );
};

const MarqueeRow = ({ testimonials, reverse = false }: { testimonials: ClientTestimonial[]; reverse?: boolean }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <div className="overflow-hidden" style={maskStyle}>
      <div
        className={`flex w-max gap-5 py-2 will-change-transform motion-reduce:animate-none hover:[animation-play-state:paused] animate-marquee ${reverse ? "[animation-direction:reverse] [animation-duration:34s]" : "[animation-duration:30s]"}`}
      >
        {duplicatedTestimonials.map((testimonial, index) => (
          <TestimonialCard key={`${testimonial.name}-${testimonial.company}-${index}`} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export const TestimonialsMarquee = ({ testimonials = clientTestimonials }: TestimonialsMarqueeProps) => {
  const splitIndex = Math.ceil(testimonials.length / 2);
  const firstRow = testimonials.slice(0, splitIndex);
  const secondRow = testimonials.slice(splitIndex);

  return (
    <div className="space-y-5">
      <MarqueeRow testimonials={firstRow} />
      {secondRow.length > 0 && <MarqueeRow testimonials={secondRow} reverse />}
    </div>
  );
};