import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ClientLogoMarquee } from "@/components/sections/ClientLogoMarquee";
import { CalculatorShowcase } from "@/components/sections/CalculatorShowcase";
import { CaseStudyCard } from "@/components/sections/CaseStudyCard";
import { CaseStudyDialog } from "@/components/sections/CaseStudyDialog";
import { AnimatedCounter } from "@/components/sections/AnimatedCounter";
import { ArrowRight, CheckCircle2, Clock, Phone, Calendar, ShieldCheck, Sparkles, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { clientCases, type ClientCase } from "@/data/caseStudies";
import founderImg from "@/assets/founder-jayant.jpeg";
import googlePartnerBadge from "@/assets/partners/google_partner.png";
import metaPartnerBadge from "@/assets/partners/meta_partner.png";

const heroMetrics = [
  { value: 185, prefix: "₹", suffix: "Cr+", label: "Revenue Generated" },
  { value: 200, suffix: "+", label: "Brands Scaled" },
  { value: 8.2, suffix: "x", decimals: 1, label: "Best ROAS" },
];

const callOutcomes = [
  { title: "Audit of your current spend", desc: "Where money is being wasted, where it's compounding." },
  { title: "90-day growth plan", desc: "A focused roadmap with the top 3 levers for ROI." },
  { title: "Channel & creative mix", desc: "What to double-down on, what to kill." },
  { title: "Zero-pitch promise", desc: "If we're not the right fit, we'll tell you who is." },
];

const faqs = [
  { q: "Is the call really free?", a: "Yes — 30 minutes, no card, no commitment. We use it to qualify if we're a fit for each other." },
  { q: "How long is the call?", a: "30 minutes. We respect your time and ours — no fluff, just clarity." },
  { q: "Will you try to pitch me?", a: "No. We share frameworks, audit your numbers and recommend next steps. If we're a fit, you'll know." },
  { q: "Who is this call for?", a: "Founders & marketing leaders running ₹50k+/month in ads, or planning to. Both lead-gen and e-commerce." },
  { q: "What if I'm not ready to spend on ads yet?", a: "Still book — we'll help you get launch-ready and avoid common pitfalls." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/60">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-4 py-4 text-left"
      >
        <span className="font-heading font-semibold">{q}</span>
        {open ? <Minus className="h-4 w-4 text-primary flex-shrink-0" /> : <Plus className="h-4 w-4 text-primary flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-sm text-muted-foreground leading-relaxed">{a}</p>}
    </div>
  );
};

const BookCall = () => {
  const [selectedCase, setSelectedCase] = useState<ClientCase | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Featured case: Evolved Hair (10x ROAS — highest in dataset)
  const featuredCase = clientCases.find((c) => c.slug === "evolved-hair") ?? clientCases[0];

  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
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
    Cal("init", "consultation", { origin: "https://cal.floatin.in" });
    Cal.ns.consultation("inline", {
      elementOrSelector: "#my-cal-inline-consultation",
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: "jayantkhattar/consultation",
    });
    Cal.ns.consultation("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Book a Strategy Call with Jayant Khattar | Floatin"
        description="Book a 30-min strategy call with Jayant Khattar, founder of Floatin. No pitch — just a personalised review of your marketing and next steps."
        path="/book-call"
        keywords={["book marketing strategy call", "performance marketing consultation", "Jayant Khattar"]}
      />
      <Navbar />

      {/* Hero / Info */}
      <section className="relative overflow-hidden bg-foreground text-background section-padding">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-60 -left-40 w-[600px] h-[600px] rounded-full bg-accent/8 blur-3xl" />
        </div>
        <div className="container-tight max-w-5xl mx-auto relative z-10 text-center space-y-6">
          <Reveal>
            {/* Founder badge */}
            <div className="inline-flex items-center gap-3 bg-background/10 border border-background/15 rounded-full pl-1.5 pr-4 py-1.5 mb-5">
              <img src={founderImg} alt="Jayant Khattar" className="h-8 w-8 rounded-full object-cover" />
              <span className="text-xs md:text-sm text-background/80">
                Direct call with <span className="font-semibold text-background">Jayant Khattar</span>, Founder
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              Book a <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">Strategy Call</span>
            </h1>
            <p className="text-background/70 mt-3 italic text-lg md:text-xl">
              Let's talk about your <span className="font-semibold text-background">"Dukhda"</span>.
            </p>
            <p className="text-background/60 mt-3 max-w-2xl mx-auto">
              30-minute, no-obligation call where we'll discuss your business goals, current marketing setup, and identify growth opportunities.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-background/10 border border-background/15 rounded-full px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3 w-3" /> Free, no card
              </span>
              <span className="inline-flex items-center gap-1.5 bg-background/10 border border-background/15 rounded-full px-3 py-1 text-xs font-medium">
                <Clock className="h-3 w-3" /> 30 mins
              </span>
              <span className="inline-flex items-center gap-1.5 bg-background/10 border border-background/15 rounded-full px-3 py-1 text-xs font-medium">
                <ShieldCheck className="h-3 w-3" /> Zero-pitch promise
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto pt-4">
              {[
                { icon: Clock, text: "30 minutes, focused and actionable" },
                { icon: CheckCircle2, text: "Custom analysis of your current setup" },
                { icon: Phone, text: "Direct call with a growth strategist" },
                { icon: Calendar, text: "Available slots within 48 hours" },
              ].map((item) => (
                <div key={item.text} className="flex items-start gap-3 text-left bg-background/5 border border-background/10 rounded-xl p-3">
                  <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-background/80">{item.text}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="inline-flex items-center gap-3 mt-2 p-3 px-4 rounded-xl bg-background/10 border border-background/10">
              <span className="text-sm text-background/70">Not ready for a call?</span>
              <Link to="/audit">
                <Button variant="hero-outline" size="sm" className="border-background/20 text-background hover:bg-background/10">
                  Get Audit <ArrowRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Trust strip — partner badges */}
      <section className="py-8 border-b border-border/50 bg-card">
        <div className="container-tight">
          <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-5">
            Officially recognised by
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            <img src={googlePartnerBadge} alt="Google Partner" className="h-14 md:h-16 object-contain opacity-90" />
            <img src={metaPartnerBadge} alt="Meta Business Partner" className="h-14 md:h-16 object-contain opacity-90" />
          </div>
        </div>
      </section>

      {/* What you'll get */}
      <section className="section-padding">
        <div className="container-tight">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                <Sparkles className="h-3 w-3" /> What you'll get
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3">Outcomes from your 30 minutes</h2>
              <p className="text-muted-foreground">No fluff. No pitch. Just clarity you can act on tomorrow.</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {callOutcomes.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.05}>
                <div className="h-full bg-card rounded-2xl border border-border/50 p-6 shadow-card">
                  <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-heading font-bold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{o.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{o.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator showcase — full-width tabbed */}
      <CalculatorShowcase
        eyebrow="Try before you call"
        title="Get instant clarity on your numbers"
        description="Two of our most-used calculators. Play with them, then bring your numbers to the call."
      />

      {/* Hero metric counters */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-tight">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center">
            {heroMetrics.map((m) => (
              <div key={m.label}>
                <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} decimals={m.decimals} />
                </div>
                <p className="text-sm text-background/60 uppercase tracking-wider">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by — client logo marquee */}
      <section className="section-padding">
        <div className="container-wide space-y-6">
          <Reveal>
            <p className="text-center text-base md:text-lg font-medium text-muted-foreground">
              Trusted by 200+ brands across India & beyond
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <ClientLogoMarquee />
          </Reveal>
        </div>
      </section>

      {/* Featured case study */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                Real results from real calls
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">From a 30-min call to 10x ROAS</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="max-w-3xl mx-auto">
              <CaseStudyCard
                client={featuredCase}
                eager
                onSelect={(c) => { setSelectedCase(c); setDialogOpen(true); }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Calendar — full-width with side trust panels */}
      <section className="py-12 md:py-16 bg-surface-warm">
        <div className="container-wide grid lg:grid-cols-[1fr_3fr_1fr] gap-6 items-stretch">
          <Reveal>
            <div className="hidden lg:flex flex-col gap-4 h-full">
              <div className="bg-card rounded-2xl border border-border/50 p-5 shadow-card">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">On the call</p>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Audit of your current funnel</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> Channel & creative gaps</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> ROI growth roadmap</li>
                  <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" /> No-pitch, no-fluff</li>
                </ul>
              </div>
              <div className="bg-foreground text-background rounded-2xl p-5 shadow-card">
                <p className="font-heading font-semibold text-lg leading-snug">Built ₹185Cr+ in client revenue</p>
                <p className="text-sm text-background/70 mt-1">Across 200+ brands in India & GCC.</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden h-full">
              <div
                id="my-cal-inline-consultation"
                style={{ width: "100%", minHeight: 720, overflow: "auto" }}
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="hidden lg:flex flex-col gap-4 h-full">
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Quick stats</p>
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="font-heading font-bold text-2xl">9+ yrs</p><p className="text-xs text-muted-foreground">Experience</p></div>
                  <div><p className="font-heading font-bold text-2xl">3.3M+</p><p className="text-xs text-muted-foreground">Reach delivered</p></div>
                  <div><p className="font-heading font-bold text-2xl">200+</p><p className="text-xs text-muted-foreground">Brands served</p></div>
                  <div><p className="font-heading font-bold text-2xl">8.2x</p><p className="text-xs text-muted-foreground">Best ROAS</p></div>
                </div>
              </div>
              <div className="bg-card rounded-2xl border border-border/50 p-5 shadow-card">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2">Prefer async?</p>
                <p className="text-sm text-muted-foreground mb-3">Get a written audit instead — delivered within 24 hours.</p>
                <Link to="/audit"><Button variant="default" size="sm" className="w-full">Get Audit <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-tight max-w-3xl">
          <Reveal>
            <div className="text-center mb-10">
              <p className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full px-3 py-1 mb-3">
                FAQ
              </p>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">Quick answers before you book</h2>
            </div>
          </Reveal>
          <div>
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* Testimonials beneath calendar */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide space-y-10">
          <Reveal>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-heading font-bold">What Founders Say After the Call</h2>
              <p className="text-muted-foreground">
                Real words from founders we've worked with — clarity, results, and zero fluff.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <TestimonialsMarquee />
          </Reveal>
        </div>
      </section>

      <CaseStudyDialog client={selectedCase} open={dialogOpen} onOpenChange={setDialogOpen} />
      <Footer />
    </div>
  );
};

export default BookCall;
