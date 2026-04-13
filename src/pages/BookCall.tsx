import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2, Clock, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const BookCall = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="section-padding">
        <div className="container-tight max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-heading font-bold">
                Book a Strategy Call
              </h1>
              <p className="text-muted-foreground">
                30-minute, no-obligation call where we'll discuss your business goals, current marketing setup, and identify growth opportunities.
              </p>

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
            </div>

            <div className="bg-card rounded-2xl shadow-elevated border border-border/50 p-8 space-y-5">
              <h2 className="font-heading font-semibold text-lg">Schedule Your Call</h2>
              {[
                { label: "Full Name", placeholder: "Rahul Sharma", type: "text" },
                { label: "Work Email", placeholder: "rahul@company.com", type: "email" },
                { label: "Phone", placeholder: "+91 98765 43210", type: "tel" },
                { label: "Company Website", placeholder: "https://yoursite.com", type: "url" },
              ].map((field) => (
                <div key={field.label}>
                  <label className="block text-sm font-medium mb-1.5">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    className="w-full h-11 rounded-lg border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1.5">What do you need help with?</label>
                <textarea
                  placeholder="Tell us about your goals and challenges..."
                  rows={3}
                  className="w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <Button variant="hero" size="lg" className="w-full">
                Book Strategy Call <ArrowRight className="ml-1" />
              </Button>
              <p className="text-xs text-center text-muted-foreground">Free · No obligation · 30 min call</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookCall;
