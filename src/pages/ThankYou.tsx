import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck2, CheckCircle2, Clock, Mail, Sparkles } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute bottom-[-180px] left-[-120px] h-[520px] w-[520px] rounded-full bg-accent/15 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.12),transparent_42%)]" />
        </div>

        <div className="container-tight relative z-10 mx-auto px-4 py-20 text-center md:py-28">
          <Reveal>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-background/10 ring-1 ring-background/15">
              <CalendarCheck2 className="h-8 w-8 text-primary" />
            </div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Booking Confirmed
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight md:text-6xl">
              You are all set.
              <span className="block bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">
                We will come prepared.
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-background/70 md:text-lg">
              Thanks for booking with Floatin. We will review your context before the call and use the session to identify the clearest growth levers across paid, funnel, CRM, WhatsApp, email, and automation.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-10 grid max-w-4xl gap-4 text-left md:grid-cols-3">
              {[
                {
                  icon: Mail,
                  title: "Check your inbox",
                  copy: "You should receive the calendar confirmation and call details shortly.",
                },
                {
                  icon: Sparkles,
                  title: "Send context",
                  copy: "Reply with your website, ad account notes, or the main challenge if you want a sharper call.",
                },
                {
                  icon: Clock,
                  title: "Join on time",
                  copy: "We keep the call focused so you leave with practical next steps, not vague advice.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-background/10 bg-background/5 p-5 backdrop-blur">
                  <item.icon className="mb-4 h-6 w-6 text-primary" />
                  <h2 className="font-heading text-lg font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-background/65">{item.copy}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link to="/clients">
                <Button variant="accent" size="xl">
                  See Case Studies <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="hero-outline" size="xl" className="border-background/25 text-background hover:bg-background hover:text-foreground">
                  Explore Services
                </Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding bg-surface-warm">
        <div className="container-tight mx-auto max-w-5xl">
          <Reveal>
            <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-card md:p-8">
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Before the call</p>
                  <h2 className="mt-3 font-heading text-2xl font-bold md:text-3xl">
                    A few things that help us diagnose faster
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    If you have these handy, bring them along. If not, no stress. We will still guide the conversation.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    "Current ad spend and top acquisition channels",
                    "Your biggest conversion or lead-quality issue",
                    "Any funnel, CRM, WhatsApp, or email numbers you already track",
                    "What a successful next 90 days would look like for your business",
                  ].map((item) => (
                    <div key={item} className="flex gap-3 rounded-xl bg-muted/50 p-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThankYou;
