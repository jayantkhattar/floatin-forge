import { useState } from "react";
import { ChevronDown, Check, ArrowRight, Sparkles } from "lucide-react";
import type { SystemDef } from "@/data/systemsData";

interface SystemDetailProps {
  system: SystemDef;
}

/**
 * Reusable system detail panel — used on the right side of the split-view.
 * Mirrors the look of the original LeadGenSystem card but is system-agnostic
 * and accepts colour accent via the data definition.
 */
export default function SystemDetail({ system }: SystemDetailProps) {
  const [openIndex, setOpenIndex] = useState(0);
  const Icon = system.icon;

  return (
    <div className="bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden">
      <div className="p-6 md:p-8 lg:p-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div
            className={`h-14 w-14 rounded-xl ${system.accent.bg} flex items-center justify-center flex-shrink-0`}
          >
            <Icon className={`h-7 w-7 ${system.accent.text}`} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-heading font-bold">
              {system.name}
            </h2>
            <p className="text-muted-foreground mt-1 font-body">
              {system.tagline}
            </p>
          </div>
        </div>

        {/* Flow diagram — compact horizontal step strip */}
        <div className="mb-6 -mx-1 overflow-x-auto pb-2">
          <div className="flex items-center gap-2 px-1 min-w-max">
            {system.stages.map((s, i) => {
              const active = i === openIndex;
              return (
                <div key={i} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(i)}
                    className={`shrink-0 px-3 py-2 rounded-lg text-xs font-semibold transition-colors font-heading whitespace-nowrap ${
                      active
                        ? system.accent.chip
                        : "bg-muted text-muted-foreground hover:bg-muted/70"
                    }`}
                  >
                    {i + 1}. {s.title.split(" ").slice(0, 3).join(" ")}
                    {s.title.split(" ").length > 3 ? "…" : ""}
                  </button>
                  {i < system.stages.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/50 shrink-0" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Accordion stages */}
        <div className="space-y-0">
          {system.stages.map((stage, i) => (
            <div key={i}>
              <StageCard
                stage={stage}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                accent={system.accent}
              />
              {i < system.stages.length - 1 && (
                <div className="flex justify-center py-1.5">
                  <div className={`w-0.5 h-5 ${system.accent.bg} rounded-full`} />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final output banner */}
        <div className={`mt-4 rounded-xl px-6 py-5 flex items-center gap-4 ${system.accent.chip}`}>
          <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold font-heading">
              {system.finalOutput.title}
            </p>
            <p className="text-xs opacity-80 mt-0.5 font-body">
              {system.finalOutput.sub}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function StageCard({
  stage,
  isOpen,
  onToggle,
  accent,
}: {
  stage: SystemDef["stages"][number];
  isOpen: boolean;
  onToggle: () => void;
  accent: SystemDef["accent"];
}) {
  return (
    <div
      className={`rounded-xl border transition-all duration-300 overflow-hidden bg-card ${
        isOpen
          ? `${accent.ring} shadow-elevated`
          : "border-border/50 hover:border-border"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-3 px-5 py-4 text-left transition-colors hover:bg-muted/30"
      >
        <span
          className={`text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap font-body ${accent.bg} ${accent.text} border border-current/20`}
        >
          {stage.step}
        </span>
        <span className="flex-1 text-sm font-semibold text-foreground font-heading">
          {stage.title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 border-t border-border/50">
            {/* Tool pills */}
            <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
              {stage.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-xs px-3 py-1 rounded-full border border-border bg-muted/50 text-muted-foreground font-body"
                >
                  {pill}
                </span>
              ))}
            </div>

            {/* Checklist */}
            <ul className="space-y-0">
              {stage.checks.map((item, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-2.5 py-2 text-sm text-foreground/85 font-body ${
                    i < stage.checks.length - 1 ? "border-b border-border/30" : ""
                  }`}
                >
                  <div
                    className={`h-5 w-5 rounded-full ${accent.bg} flex items-center justify-center flex-shrink-0 mt-0.5`}
                  >
                    <Check className={`h-3 w-3 ${accent.text}`} strokeWidth={2.5} />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Output row */}
            <div
              className={`flex items-center gap-2.5 mt-4 px-4 py-3 ${accent.bg} border border-current/10 rounded-lg ${accent.text}`}
            >
              <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
              <span className="text-xs font-semibold font-heading">Output:</span>
              <span className="text-xs text-foreground/80 font-body">
                {stage.output}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
