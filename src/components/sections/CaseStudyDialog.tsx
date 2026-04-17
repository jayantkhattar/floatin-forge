import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  type ClientCase,
  industryLabels,
  serviceLabels,
} from "@/data/caseStudies";
import { CheckCircle2 } from "lucide-react";

interface CaseStudyDialogProps {
  client: ClientCase | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/**
 * Detailed case study modal — opened from CaseStudyCard.
 * Shows challenge, strategy, results bullets, platforms, services chips.
 */
export const CaseStudyDialog = ({
  client,
  open,
  onOpenChange,
}: CaseStudyDialogProps) => {
  if (!client) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-3">
          <div className="flex items-start gap-4">
            {client.logo && (
              <div className="flex h-14 w-auto min-w-[56px] max-w-[160px] items-center justify-center rounded-xl bg-muted/50 border border-border/50 px-3 py-2 shrink-0">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-9 w-auto max-w-[140px] object-contain"
                />
              </div>
            )}
            <div className="space-y-1.5 flex-1 text-left">
              <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                {industryLabels[client.industry] ?? client.industry}
              </span>
              <DialogTitle className="font-heading text-2xl md:text-3xl">
                {client.name}
              </DialogTitle>
              <DialogDescription className="text-base">
                {client.desc}
              </DialogDescription>
            </div>
          </div>

          {!client.comingSoon && client.metric && (
            <div className="flex items-baseline gap-3 rounded-xl bg-primary/5 border border-primary/10 px-4 py-3">
              <span className="font-heading text-3xl md:text-4xl font-bold text-primary">
                {client.metric}
              </span>
              <span className="text-sm font-medium text-muted-foreground">
                {client.result}
              </span>
            </div>
          )}
        </DialogHeader>

        {client.comingSoon ? (
          <div className="py-8 text-center text-muted-foreground">
            <p className="font-heading text-lg font-semibold">
              Full case study coming soon
            </p>
            <p className="text-sm mt-2">Check back shortly for the deep dive.</p>
          </div>
        ) : (
          <div className="space-y-6 pt-2">
            <section>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                The Challenge
              </h4>
              <p className="text-sm leading-relaxed">{client.challenge}</p>
            </section>

            <section>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                Our Strategy
              </h4>
              <p className="text-sm leading-relaxed">{client.strategy}</p>
            </section>

            <section>
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                Results
              </h4>
              <ul className="space-y-2">
                {client.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            <div className="flex flex-wrap gap-4 pt-2 border-t border-border/50">
              <div className="space-y-1.5">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Services
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {client.services.map((s) => (
                    <span
                      key={s}
                      className="rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-semibold text-foreground"
                    >
                      {serviceLabels[s]}
                    </span>
                  ))}
                </div>
              </div>
              {client.platforms && client.platforms.length > 0 && (
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Platforms
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {client.platforms.map((p) => (
                      <span
                        key={p}
                        className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] font-medium"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
