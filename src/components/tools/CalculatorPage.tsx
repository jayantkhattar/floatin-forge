import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Mail, Info, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

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
  // Initialise with any defaults provided
  const initial: Record<string, string> = {};
  inputs.forEach((inp) => {
    if (inp.defaultValue !== undefined) initial[inp.key] = inp.defaultValue;
  });

  const [values, setValues] = useState<Record<string, string>>(initial);
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const numericValues: Record<string, number> = {};
  inputs.forEach((inp) => {
    numericValues[inp.key] = parseFloat(values[inp.key] || "0") || 0;
  });

  const results = calculate(numericValues, values);
  // "Has input" = any numeric > 0 OR any select chosen
  const hasInput = inputs.some((inp) => {
    const v = values[inp.key];
    if (inp.type === "select") return !!v;
    return parseFloat(v || "0") > 0;
  });

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
          <span className="opacity-90">No sign-up to see results</span>
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

            {/* Results */}
            <div className="space-y-5">
              <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-4">
                <h3 className="font-heading font-semibold text-lg">Results</h3>
                {hasInput ? (
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
                ) : (
                  <div className="text-center py-8 text-muted-foreground text-sm">
                    Enter your numbers to see results
                  </div>
                )}
              </div>

              {/* Gated section */}
              {hasInput && !unlocked && results.length > 3 && (
                <div className="bg-card rounded-xl p-6 shadow-card border border-primary/20 space-y-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-card/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 z-10">
                    <Lock className="h-6 w-6 text-primary" />
                    <p className="text-sm font-medium text-center px-4">Enter your email to unlock the full report</p>
                    <div className="flex gap-2 w-full max-w-xs">
                      <div className="relative flex-1">
                        <Mail className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                          type="email"
                          placeholder="you@company.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full h-10 rounded-lg border border-input bg-background pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        />
                      </div>
                      <Button size="sm" onClick={() => email && setUnlocked(true)}>
                        Unlock
                      </Button>
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-lg">Detailed Breakdown</h3>
                  <div className="space-y-2 opacity-30">
                    {results.slice(3).map((r) => (
                      <div key={r.label} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <span className="text-sm">{r.label}</span>
                        <span className="font-bold">{r.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {hasInput && unlocked && results.length > 3 && (
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
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
