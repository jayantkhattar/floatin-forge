import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
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

      {/* Calendar — full-width horizontal row */}
      <section className="section-padding bg-surface-warm">
        <div className="container-wide">
          <Reveal>
            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden">
              <div
                id="my-cal-inline-consultation"
                style={{ width: "100%", minHeight: 720, overflow: "auto" }}
              />
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
