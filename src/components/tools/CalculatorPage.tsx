import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock, Mail } from "lucide-react";
import { Link } from "react-router-dom";

interface CalculatorPageProps {
  title: string;
  description: string;
  inputs: { label: string; placeholder: string; key: string; prefix?: string; suffix?: string }[];
  calculate: (values: Record<string, number>) => { label: string; value: string; highlight?: boolean }[];
}

export const CalculatorPage = ({ title, description, inputs, calculate }: CalculatorPageProps) => {
  const [values, setValues] = useState<Record<string, string>>({});
  const [email, setEmail] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const numericValues: Record<string, number> = {};
  inputs.forEach((inp) => {
    numericValues[inp.key] = parseFloat(values[inp.key] || "0") || 0;
  });

  const results = calculate(numericValues);
  const hasInput = Object.values(values).some((v) => parseFloat(v) > 0);

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding">
        <div className="container-tight">
          <div className="mb-8 space-y-2">
            <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              ← Back to Tools
            </Link>
            <h1 className="text-3xl md:text-4xl font-heading font-bold">{title}</h1>
            <p className="text-muted-foreground max-w-2xl">{description}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Inputs */}
            <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 space-y-5">
              <h3 className="font-heading font-semibold text-lg">Your Numbers</h3>
              {inputs.map((inp) => (
                <div key={inp.key}>
                  <label className="block text-sm font-medium mb-1.5">{inp.label}</label>
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
                  </div>
                ) : (
                  <div className="text-center py-8 text-muted-foreground text-sm">
                    Enter your numbers to see results
                  </div>
                )}
              </div>

              {/* Gated section */}
              {hasInput && !unlocked && (
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

              {hasInput && unlocked && (
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
                        Get Free Growth Audit <ArrowRight className="ml-1" />
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
