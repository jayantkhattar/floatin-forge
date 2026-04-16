import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import floatinLogo from "@/assets/floatin-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      {/* CTA Band */}
      <div className="section-padding border-b border-background/10">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Ready to build a growth system that works?
          </h2>
          <p className="text-background/70 max-w-xl mx-auto">
            Get a free audit of your current marketing setup. We'll identify exactly what's leaking revenue and how to fix it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/audit">
              <Button variant="accent" size="xl">
                Get Free Growth Audit <ArrowRight className="ml-1" />
              </Button>
            </Link>
            <Link to="/book-call">
              <Button variant="hero-outline" size="xl" className="border-background/30 text-background hover:bg-background hover:text-foreground">
                Book Strategy Call
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="px-4 md:px-8 py-12">
        <div className="container-wide grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <img src={floatinLogo} alt="Floatin" className="h-8 brightness-0 invert" />
            <p className="mt-3 text-sm text-background/60 max-w-xs">
              Systems-driven performance marketing for businesses that want measurable growth.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              <a href="https://instagram.com/floatin.in" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://linkedin.com/company/floatin" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://www.youtube.com/channel/UCfD-hnvj8MZQUQTwBxckxTA" target="_blank" rel="noopener noreferrer" className="text-background/50 hover:text-background transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">Resources</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/tools" className="hover:text-background transition-colors">Free Tools</Link></li>
              <li><Link to="/playbooks" className="hover:text-background transition-colors">Playbooks</Link></li>
              <li><Link to="/clients" className="hover:text-background transition-colors">Clients</Link></li>
              <li><Link to="/systems" className="hover:text-background transition-colors">Our Systems</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">Services</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><span>Performance Marketing</span></li>
              <li><span>Lead Generation</span></li>
              <li><Link to="/creative" className="hover:text-background transition-colors">Creative Studio</Link></li>
              <li><span>E-commerce Growth</span></li>
              <li><span>Marketing Automation</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">Get Started</h4>
            <ul className="space-y-2 text-sm text-background/60">
              <li><Link to="/audit" className="hover:text-background transition-colors">Free Growth Audit</Link></li>
              <li><Link to="/book-call" className="hover:text-background transition-colors">Book a Call</Link></li>
              <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm mb-4 text-background/80">Office</h4>
            <div className="flex items-start gap-2 text-sm text-background/60">
              <MapPin size={16} className="mt-0.5 shrink-0 text-background/40" />
              <span>F4, Kirti Nagar,<br />New Delhi, India</span>
            </div>
          </div>
        </div>

        <div className="container-wide mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/40">
          <span>© {new Date().getFullYear()} Floatin. All rights reserved.</span>
          <span>Systems that scale your growth.</span>
        </div>
      </div>
    </footer>
  );
};
