import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
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

      <section className="section-padding">
        <div className="container-tight max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-10 items-start">
            <div className="md:col-span-2 space-y-6">
              <Reveal>
                <h1 className="text-3xl md:text-4xl font-heading font-bold">
                  Book a Strategy Call
                </h1>
                <p className="text-muted-foreground mt-3">
                  30-minute, no-obligation call where we'll discuss your business goals, current marketing setup, and identify growth opportunities.
                </p>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="space-y-4">
                  {[
                    { icon: Clock, text: "30 minutes, focused and actionable" },
                    { icon: CheckCircle2, text: "Custom analysis of your current setup" },
                    { icon: Phone, text: "Direct call with a growth strategist" },
                    { icon: Calendar, text: "Available slots within 48 hours" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-start gap-3">
                      <item.icon className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 space-y-2">
                  <p className="text-sm font-medium">Not ready for a call?</p>
                  <p className="text-sm text-muted-foreground">
                    Start with a free growth audit instead — no call needed.
                  </p>
                  <Link to="/audit">
                    <Button variant="outline" size="sm">
                      Get Free Audit <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-3">
              <Reveal delay={0.1} direction="right">
                <div className="bg-card rounded-2xl shadow-elevated border border-border/50 overflow-hidden" style={{ minHeight: 500 }}>
                  <div id="my-cal-inline-consultation" style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: 500 }} />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookCall;
