import { useState, useEffect } from "react";

import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { DarkHero } from "@/components/layout/DarkHero";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { Reveal } from "@/components/ui/reveal";
import { ArrowRight, ArrowLeft, CheckCircle2, Building2, ShoppingBag, FileText, Calendar } from "lucide-react";
import { sendLead } from "@/lib/leadCapture";

const Audit = () => {
  const [step, setStep] = useState(0);
  const [showCalDialog, setShowCalDialog] = useState(false);
  const [data, setData] = useState({
    businessType: "",
    name: "",
    email: "",
    phone: "",
    website: "",
    monthlySpend: "",
    currentChannels: [] as string[],
    biggestChallenge: "",
    monthlyRevenue: "",
  });

  const updateField = (key: string, value: string) => setData({ ...data, [key]: value });
  const toggleChannel = (ch: string) => {
    const current = data.currentChannels;
    setData({
      ...data,
      currentChannels: current.includes(ch) ? current.filter((c) => c !== ch) : [...current, ch],
    });
  };

  const canProceed = () => {
    if (step === 0) return data.businessType !== "";
    if (step === 1) return data.name && data.email && data.phone;
    if (step === 2) return data.monthlySpend !== "";
    if (step === 3) return data.biggestChallenge !== "";
    return true;
  };

  // Load Cal.com popup script once
  useEffect(() => {
    if ((window as any).Cal && (window as any).Cal.ns?.["audit-handoff"]) return;
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://cal.floatin.in/embed/embed.js", "init");
    const Cal = (window as any).Cal;
    Cal("init", "audit-handoff", { origin: "https://cal.floatin.in" });
  }, []);

  useEffect(() => {
    if (!showCalDialog) return;
    const t = setTimeout(() => {
      const Cal = (window as any).Cal;
      if (!Cal?.ns?.["audit-handoff"]) return;
      try {
        Cal.ns["audit-handoff"]("inline", {
          elementOrSelector: "#audit-cal-inline",
          config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
          calLink: "jayantkhattar/consultation",
        });
        Cal.ns["audit-handoff"]("ui", { hideEventTypeDetails: false, layout: "month_view" });
      } catch {}
    }, 100);
    return () => clearTimeout(t);
  }, [showCalDialog]);

  const handleSubmit = () => {
    sendLead({
      source: "audit",
      name: data.name,
      email: data.email,
      phone: data.phone,
      data: {
        businessType: data.businessType,
        website: data.website,
        monthlySpend: data.monthlySpend,
        currentChannels: data.currentChannels,
        biggestChallenge: data.biggestChallenge,
        monthlyRevenue: data.monthlyRevenue,
      },
    });
    setShowCalDialog(true);
  };

  const totalSteps = 5;

  return (
    <div className="min-h-screen">
      <SEO
        title="Free Growth Audit — Get Yours in 24 Hours | Floatin"
        description="Get a free, personalised growth audit from Floatin. We'll review your ads, funnel, and CRM — and identify the top 3 levers for growth."
        path="/audit"
        keywords={["free marketing audit", "growth audit", "performance marketing audit", "ad account audit"]}
      />
      <Navbar />

      <DarkHero>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Get Your <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">Growth Audit</span>
            </h1>
            <p className="text-background/70">
              Answer a few questions and we'll deliver a custom growth analysis within 24 hours — including actionable recommendations to improve your marketing ROI.
            </p>
            <div className="flex items-center gap-4 text-sm text-background/50">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free report</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> No commitment</span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="bg-background/10 backdrop-blur-sm rounded-xl border border-background/10 p-8 text-center space-y-4">
              <FileText className="h-16 w-16 text-background/30 mx-auto" />
              <div>
                <p className="font-heading font-semibold text-lg">Your Custom Audit Report</p>
                <p className="text-sm text-background/50 mt-1">Delivered within 24 hours</p>
              </div>
              <div className="space-y-2 text-left text-sm text-background/60">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> Channel performance analysis</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> Funnel leak identification</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0" /> Growth recommendations</div>
              </div>
            </div>
          </div>
        </div>
      </DarkHero>

      <section className="section-padding">
        <div className="container-tight max-w-2xl mx-auto">

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-xs text-muted-foreground mb-2">
              <span>Step {step + 1} of {totalSteps}</span>
              <span>{Math.round(((step + 1) / totalSteps) * 100)}% complete</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          <div className="bg-card rounded-2xl shadow-card border border-border/50 p-8">
            {step === 0 && (
              <div className="space-y-6">
                <h2 className="text-xl font-heading font-bold">What type of business are you?</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "leadgen", label: "Lead Generation", desc: "Services, B2B, real estate, education, etc.", icon: Building2 },
                    { value: "ecommerce", label: "E-commerce", desc: "D2C, online store, marketplace seller", icon: ShoppingBag },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => updateField("businessType", opt.value)}
                      className={`p-5 rounded-xl border-2 text-left transition-all ${
                        data.businessType === opt.value
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/30"
                      }`}
                    >
                      <opt.icon className={`h-6 w-6 mb-3 ${data.businessType === opt.value ? "text-primary" : "text-muted-foreground"}`} />
                      <div className="font-heading font-semibold">{opt.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">{opt.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="space-y-5">
                <h2 className="text-xl font-heading font-bold">Your contact details</h2>
                {[
                  { label: "Full Name", key: "name", placeholder: "Rahul Sharma", type: "text" },
                  { label: "Work Email", key: "email", placeholder: "rahul@company.com", type: "email" },
                  { label: "Phone", key: "phone", placeholder: "+91 98765 43210", type: "tel" },
                  { label: "Website (optional)", key: "website", placeholder: "https://yoursite.com", type: "url" },
                ].map((field) => (
                  <div key={field.key}>
                    <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={(data as any)[field.key]}
                      onChange={(e) => updateField(field.key, e.target.value)}
                      className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                ))}
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5">
                <h2 className="text-xl font-heading font-bold">Your current ad spend</h2>
                <div className="space-y-3">
                  {["Under ₹50K/month", "₹50K - ₹2L/month", "₹2L - ₹5L/month", "₹5L - ₹10L/month", "₹10L+/month", "Not running ads yet"].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => updateField("monthlySpend", opt)}
                      className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                        data.monthlySpend === opt ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Channels you're currently using</label>
                  <div className="flex flex-wrap gap-2">
                    {["Google Ads", "Meta Ads", "LinkedIn Ads", "WhatsApp", "Email", "SEO", "Other"].map((ch) => (
                      <button
                        key={ch}
                        onClick={() => toggleChannel(ch)}
                        className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                          data.currentChannels.includes(ch) ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
                        }`}
                      >
                        {ch}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-5">
                <h2 className="text-xl font-heading font-bold">What's your biggest challenge?</h2>
                <div className="space-y-3">
                  {[
                    "High cost per lead / acquisition",
                    "Low conversion rates",
                    "Poor lead quality",
                    "Scaling profitably",
                    "No automation / manual follow-ups",
                    "Don't know what's working",
                  ].map((opt) => (
                    <button
                      key={opt}
                      onClick={() => updateField("biggestChallenge", opt)}
                      className={`w-full p-4 rounded-xl border-2 text-left text-sm font-medium transition-all ${
                        data.biggestChallenge === opt ? "border-primary bg-primary/5 text-primary" : "border-border hover:border-primary/30"
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-6">
                <h2 className="text-xl font-heading font-bold">Your audit request summary</h2>
                <div className="space-y-3">
                  {[
                    { label: "Business Type", value: data.businessType === "leadgen" ? "Lead Generation" : "E-commerce" },
                    { label: "Name", value: data.name },
                    { label: "Email", value: data.email },
                    { label: "Monthly Spend", value: data.monthlySpend },
                    { label: "Channels", value: data.currentChannels.join(", ") || "None selected" },
                    { label: "Biggest Challenge", value: data.biggestChallenge },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between p-3 rounded-lg bg-muted/50">
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                      <span className="text-sm font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
                <div className="p-5 rounded-xl bg-primary/5 border border-primary/10 text-center space-y-2">
                  <Calendar className="h-8 w-8 text-primary mx-auto" />
                  <p className="font-heading font-semibold">One quick step before we start your audit</p>
                  <p className="text-sm text-muted-foreground">
                    To run your audit, our team needs access to your ad accounts. Book a 15-minute handoff call so we can walk through access together — then we deliver your custom audit within 24 hours.
                  </p>
                </div>
                <Button variant="hero" size="xl" className="w-full" onClick={handleSubmit}>
                  Submit & Book Access Call <ArrowRight className="ml-1" />
                </Button>
              </div>
            )}

            {step < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border/50">
                <Button variant="ghost" onClick={() => setStep(Math.max(0, step - 1))} disabled={step === 0}>
                  <ArrowLeft className="mr-1 h-4 w-4" /> Back
                </Button>
                <Button variant="default" onClick={() => setStep(step + 1)} disabled={!canProceed()}>
                  Next <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide space-y-10">
          <Reveal>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Founders Who Took the Audit</h2>
              <p className="text-muted-foreground">
                Real words from founders we've audited and grown — clarity, results, zero fluff.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialsMarquee />
          </Reveal>
        </div>
      </section>

      <Footer />

      {/* Post-submission Cal.com handoff dialog */}
      <Dialog open={showCalDialog} onOpenChange={setShowCalDialog}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-2">
            <DialogTitle className="font-heading text-2xl">
              One last step — book your access handoff call
            </DialogTitle>
            <DialogDescription>
              Pick a 15-minute slot so our team can securely take access of your ad accounts.
              Your custom audit is delivered within 24 hours of this call.
            </DialogDescription>
          </DialogHeader>
          <div
            id="audit-cal-inline"
            className="w-full"
            style={{ minHeight: 640, maxHeight: "75vh", overflow: "auto" }}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Audit;
