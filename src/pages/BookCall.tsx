import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { SEO } from "@/components/SEO";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { TestimonialsMarquee } from "@/components/sections/TestimonialsMarquee";
import { ArrowRight, CheckCircle2, Clock, Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const BookCall = () => {
  useEffect(() => {
    // Load Cal.com embed script
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

      {/* Calendar — full-width horizontal row with side trust panels */}
      <section className="py-12 md:py-16 bg-surface-warm">
        <div className="container-wide grid lg:grid-cols-[1fr_3fr_1fr] gap-6 items-stretch">
          {/* Left trust column */}
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
                <p className="text-sm text-background/70 mt-1">Across 50+ brands in India & GCC.</p>
              </div>
            </div>
          </Reveal>

          {/* Calendar */}
          <Reveal>
            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden h-full">
              <div
                id="my-cal-inline-consultation"
                style={{ width: "100%", minHeight: 720, overflow: "auto" }}
              />
            </div>
          </Reveal>

          {/* Right trust column */}
          <Reveal delay={0.1}>
            <div className="hidden lg:flex flex-col gap-4 h-full">
              <div className="bg-primary/5 border border-primary/15 rounded-2xl p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-primary mb-2">Quick stats</p>
                <div className="grid grid-cols-2 gap-3">
                  <div><p className="font-heading font-bold text-2xl">9+ yrs</p><p className="text-xs text-muted-foreground">Experience</p></div>
                  <div><p className="font-heading font-bold text-2xl">3.3M+</p><p className="text-xs text-muted-foreground">Reach delivered</p></div>
                  <div><p className="font-heading font-bold text-2xl">50+</p><p className="text-xs text-muted-foreground">Brands served</p></div>
                  <div><p className="font-heading font-bold text-2xl">7.4x</p><p className="text-xs text-muted-foreground">Avg ROAS</p></div>
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

      {/* Testimonials beneath calendar */}
      <section className="section-padding">
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

      <Footer />
    </div>
  );
};

export default BookCall;
