import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import type { ClientCase } from "@/data/caseStudies";

const maskStyle = {
  WebkitMaskImage:
    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
  maskImage:
    "linear-gradient(to right, transparent, black 5%, black 95%, transparent)",
};

const Row = ({
  cases,
  duration,
  reverse = false,
  onSelect,
}: {
  cases: ClientCase[];
  duration: number;
  reverse?: boolean;
  onSelect?: (c: ClientCase) => void;
}) => {
  const doubled = [...cases, ...cases];
  return (
    <div className="overflow-hidden" style={maskStyle}>
      <div
        className="flex w-max gap-5 py-2 will-change-transform animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {doubled.map((c, i) => (
          <div key={`${c.slug}-${i}`} className="w-[260px] md:w-[300px] flex-shrink-0">
            <CaseStudyCard client={c} onSelect={onSelect} />
          </div>
        ))}
      </div>
    </div>
  );
};

interface CaseStudyMarqueeProps {
  cases: ClientCase[];
  onSelect?: (c: ClientCase) => void;
}

/** Two-row scrolling case study showcase, opposite directions. */
export const CaseStudyMarquee = ({ cases, onSelect }: CaseStudyMarqueeProps) => {
  const half = Math.ceil(cases.length / 2);
  const row1 = cases.slice(0, half);
  const row2 = cases.slice(half);

  return (
    <div className="space-y-5">
      <Row cases={row1} duration={70} onSelect={onSelect} />
      {row2.length > 0 && <Row cases={row2} duration={80} reverse onSelect={onSelect} />}
    </div>
  );
};
