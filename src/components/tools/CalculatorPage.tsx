import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Info, Lightbulb, User, Mail, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { sendLead } from "@/lib/leadCapture";

export interface CalculatorInput {
  label: string;
  placeholder?: string;
  key: string;
  prefix?: string;
  suffix?: string;
  /** Short helper text shown under the label to explain what to enter. */
  hint?: string;
  /** Optional select input. When provided, renders a dropdown instead of a number field. */
  type?: "number" | "select";
  options?: { label: string; value: string }[];
  /** Default value (string). Useful for selects. */
  defaultValue?: string;
}

interface CalculatorPageProps {
  title: string;
  description: string;
  inputs: CalculatorInput[];
  calculate: (values: Record<string, number>, raw: Record<string, string>) =>
    | { label: string; value: string; highlight?: boolean }[]
    | { label: string; value: string; highlight?: boolean; hint?: string }[];
  /** Step-by-step "how to use this tool" guidance shown above inputs. */
  howToUse?: string[];
  /** A short paragraph that explains what the results mean. */
  resultsNote?: string;
  /** Optional intro/lead-in shown under the title. Use for "what you're missing" framing. */
  leadIn?: string;
}

export const CalculatorPage = ({
  title,
  description,
  inputs,
  calculate,
  howToUse,
  resultsNote,
  leadIn,
}: CalculatorPageProps) => {
  const location = useLocation();
  const toolSlug = location.pathname.split("/").filter(Boolean).pop() || "tool";

  // Initialise with any defaults provided
  const initial: Record<string, string> = {};
  inputs.forEach((inp) => {
    if (inp.defaultValue !== undefined) initial[inp.key] = inp.defaultValue;
  });

  const [values, setValues] = useState<Record<string, string>>(initial);
  const [contact, setContact] = useState({ name: "", email: "", phone: "" });
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const numericValues: Record<string, number> = {};
  inputs.forEach((inp) => {
    numericValues[inp.key] = parseFloat(values[inp.key] || "0") || 0;
  });

  const results = calculate(numericValues, values);

  const hasInput = inputs.some((inp) => {
    const v = values[inp.key];
    if (inp.type === "select") return !!v;
    return parseFloat(v || "0") > 0;
  });

  const contactValid =
    contact.name.trim().length > 1 &&
    /\S+@\S+\.\S+/.test(contact.email) &&
    contact.phone.trim().length >= 7;

  const handleUnlock = async () => {
    if (!contactValid || !hasInput) return;
    setSubmitting(true);
    await sendLead({
      source: `tool:${toolSlug}`,
      name: contact.name.trim(),
      email: contact.email.trim(),
      phone: contact.phone.trim(),
      data: {
        toolTitle: title,
        inputs: values,
        results: results.map((r) => ({ label: r.label, value: r.value })),
      },
    });
    setSubmitting(false);
    setUnlocked(true);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Free tool banner */}
      <div className="bg-gradient-to-r from-primary via-primary to-accent text-primary-foreground">
        <div className="container-tight py-2.5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs md:text-sm font-medium text-center">
          <span className="inline-flex items-center gap-1.5">
            <Lightbulb className="h-3.5 w-3.5" /> Free Floatin Growth Tool
          </span>
          <span className="opacity-70 hidden md:inline">•</span>
          <span className="opacity-90">Quick contact then instant results</span>
          <span className="opacity-70 hidden md:inline">•</span>
          <Link to="/audit" className="underline underline-offset-2 hover:opacity-80">
            Want a custom audit? →
          </Link>
        </div>
      </div>

      <section className="section-padding">
        <div className="container-tight">
          <div className="mb-8 space-y-2">
            <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Tools
            </Link>
            <h1 className="text-3xl md:text-4xl font-heading font-bold">{title}</h1>
            <p className="text-muted-foreground max-w-2xl">{description}</p>
            {leadIn && (
              <p className="text-sm text-foreground/80 max-w-2xl pt-1 italic">{leadIn}</p>
            )}
          </div>

          {/* How to use */}
          {howToUse && howToUse.length > 0 && (
            <div className="mb-6 rounded-xl border border-primary/15 bg-primary/5 p-5">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="h-4 w-4 text-primary" />
                <h2 className="font-heading font-semibold text-sm uppercase tracking-wider text-primary">
                  How to use this tool
                </h2>
              </div>
              <ol className="space-y-1.5 text-sm text-foreground/80">
                {howToUse.map((step, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="font-heading font-bold text-primary shrink-0">{i + 1}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-5">
              <h3 className="font-heading font-semibold text-lg">Your Numbers</h3>
              {inputs.map((inp) => (
                <div key={inp.key}>
                  <label className="block text-sm font-medium mb-1.5">{inp.label}</label>
                  {inp.type === "select" && inp.options ? (
                    <select
                      value={values[inp.key] || ""}
                      onChange={(e) => setValues({ ...values, [inp.key]: e.target.value })}
                      className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select…</option>
                      {inp.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="relative">
                      {inp.prefix && (
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{inp.prefix}</span>
                      )}
                      <input
                        type="number"
                        placeholder={inp.placeholder}
                        value={values[inp.key] || ""}
                        onChange={(e) => setValues({ ...values, [inp.key]: e.target.value })}
                        className={`w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring ${inp.prefix ? "pl-8" : ""} ${inp.suffix ? "pr-10" : ""}`}
                      />
                      {inp.suffix && (
                        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">{inp.suffix}</span>
                      )}
                    </div>
                  )}
                  {inp.hint && (
                    <p className="mt-1.5 text-xs text-muted-foreground flex gap-1.5 items-start">
                      <Info className="h-3 w-3 mt-0.5 shrink-0 text-primary/60" />
                      <span>{inp.hint}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Results — fully gated until contact submitted */}
            <div className="space-y-5">
              {!unlocked ? (
                <div className="bg-card rounded-xl p-6 shadow-card border border-primary/20 space-y-5">
                  <div className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-primary" />
                    <h3 className="font-heading font-semibold text-lg">Unlock your results</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Enter your details and we'll instantly show your full report. We'll also send a copy + a custom recommendation from our team.
                  </p>

                  <div className="space-y-3">
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder="Full name *"
                        value={contact.name}
                        onChange={(e) => setContact({ ...contact, name: e.target.value })}
                        className="w-full h-11 rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="email"
                        placeholder="Work email *"
                        value={contact.email}
                        onChange={(e) => setContact({ ...contact, email: e.target.value })}
                        className="w-full h-11 rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <input
                        type="tel"
                        placeholder="Phone (with country code) *"
                        value={contact.phone}
                        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                        className="w-full h-11 rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  </div>

                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={!contactValid || !hasInput || submitting}
                    onClick={handleUnlock}
                  >
                    {submitting ? "Unlocking…" : "Show my results"} <ArrowRight className="ml-1" />
                  </Button>

                  {!hasInput && (
                    <p className="text-xs text-muted-foreground text-center">
                      Fill in your numbers on the left first.
                    </p>
                  )}
                  <p className="text-[11px] text-muted-foreground text-center">
                    By submitting you agree to receive your report and occasional growth tips. No spam.
                  </p>
                </div>
              ) : (
                <>
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-4">
                    <h3 className="font-heading font-semibold text-lg">Results</h3>
                    <div className="space-y-3">
                      {results.slice(0, 3).map((r) => (
                        <div key={r.label} className={`flex justify-between items-center p-3 rounded-lg ${r.highlight ? "bg-primary/5 border border-primary/10" : "bg-muted/50"}`}>
                          <span className="text-sm text-muted-foreground">{r.label}</span>
                          <span className={`font-heading font-bold text-lg ${r.highlight ? "text-primary" : ""}`}>{r.value}</span>
                        </div>
                      ))}
                      {resultsNote && (
                        <p className="text-xs text-muted-foreground pt-1 border-t border-border/40 leading-relaxed">
                          {resultsNote}
                        </p>
                      )}
                    </div>
                  </div>

                  {results.length > 3 && (
                    <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-4">
                      <h3 className="font-heading font-semibold text-lg">Detailed Breakdown</h3>
                      <div className="space-y-2">
                        {results.slice(3).map((r) => (
                          <div key={r.label} className={`flex justify-between items-center p-3 rounded-lg ${r.highlight ? "bg-primary/5 border border-primary/10" : "bg-muted/50"}`}>
                            <span className="text-sm text-muted-foreground">{r.label}</span>
                            <span className={`font-heading font-bold ${r.highlight ? "text-primary" : ""}`}>{r.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="pt-3 border-t border-border/50">
                        <Link to="/audit">
                          <Button variant="hero" className="w-full">
                            Get Growth Audit <ArrowRight className="ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
