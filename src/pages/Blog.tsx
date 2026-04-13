import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

const categories = ["All", "Performance Marketing", "Lead Generation", "WhatsApp Marketing", "Meta Ads", "Google Ads", "E-commerce", "Strategy"];

const blogPosts = [
  {
    title: "How to Reduce Your Cost Per Lead by 50% in 90 Days",
    category: "Lead Generation",
    excerpt: "Most brands overspend on lead generation because they optimize for volume instead of quality. Here's a systematic approach to cutting your CPL in half.",
    readTime: "8 min read",
    date: "April 2026",
    featured: true,
  },
  {
    title: "The Complete Guide to WhatsApp Marketing for Indian Brands",
    category: "WhatsApp Marketing",
    excerpt: "WhatsApp has 500M+ users in India. Learn how to build automated flows that convert leads into customers at 3x the rate of email.",
    readTime: "12 min read",
    date: "March 2026",
    featured: true,
  },
  {
    title: "Meta Ads Creative Testing Framework: A Step-by-Step System",
    category: "Meta Ads",
    excerpt: "Stop guessing which creatives work. Use this structured testing framework to find winners consistently and scale them profitably.",
    readTime: "10 min read",
    date: "March 2026",
    featured: false,
  },
  {
    title: "Why Your Google Ads Aren't Converting (And How to Fix It)",
    category: "Google Ads",
    excerpt: "Common Google Ads mistakes that drain budgets — from poor keyword match types to landing page misalignment. Plus, the fixes that actually work.",
    readTime: "7 min read",
    date: "February 2026",
    featured: false,
  },
  {
    title: "Building a Performance Marketing System vs. Running Campaigns",
    category: "Strategy",
    excerpt: "The difference between agencies that deliver short-term spikes and those that build lasting growth. Systems thinking applied to digital marketing.",
    readTime: "6 min read",
    date: "February 2026",
    featured: false,
  },
  {
    title: "E-commerce ROAS Optimization: From 2x to 4x in 60 Days",
    category: "E-commerce",
    excerpt: "A case-study-driven guide to improving your e-commerce ROAS through catalog optimization, audience segmentation, and creative iteration.",
    readTime: "9 min read",
    date: "January 2026",
    featured: false,
  },
  {
    title: "The Lead Funnel Blueprint: Ads → Landing Page → CRM → Close",
    category: "Lead Generation",
    excerpt: "An end-to-end framework for building lead generation funnels that don't just generate leads — they generate revenue.",
    readTime: "11 min read",
    date: "January 2026",
    featured: false,
  },
  {
    title: "How to Set Up Retargeting That Actually Works",
    category: "Performance Marketing",
    excerpt: "Most retargeting campaigns waste money showing the same ad to uninterested users. Here's how to build intent-based retargeting sequences.",
    readTime: "8 min read",
    date: "December 2025",
    featured: false,
  },
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
  const featuredPosts = blogPosts.filter(p => p.featured);
  const regularPosts = filtered.filter(p => !p.featured || activeCategory !== "All");

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 rounded-full px-4 py-1.5 text-sm font-medium text-primary">
            <BookOpen className="h-3.5 w-3.5" /> Insights & Resources
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Growth <span className="text-gradient-primary">Blog</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Actionable strategies, frameworks, and insights on performance marketing, lead generation, and scaling brands in India.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      {activeCategory === "All" && (
        <section className="section-padding">
          <div className="container-tight space-y-8">
            <h2 className="text-2xl font-heading font-bold">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <div
                  key={post.title}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20 cursor-pointer"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-primary/15 flex items-center justify-center">
                    <BookOpen className="h-16 w-16 text-primary/20" />
                  </div>
                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1 text-primary bg-primary/5 px-2.5 py-1 rounded-full font-medium">
                        <Tag className="h-3 w-3" /> {post.category}
                      </span>
                      <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                      <span>{post.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <span className="text-sm font-medium text-primary flex items-center gap-1 pt-1">
                      Read article <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-6 border-b border-border/50">
        <div className="container-tight">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? filtered.filter(p => !p.featured) : filtered).map((post) => (
              <div
                key={post.title}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20 cursor-pointer"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center">
                  <BookOpen className="h-12 w-12 text-primary/15" />
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="text-primary bg-primary/5 px-2 py-0.5 rounded-full font-medium">{post.category}</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="font-heading font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-surface-warm">
        <div className="container-tight text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Want Personalized Growth Advice?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Get a free audit of your current marketing — we'll identify the biggest growth opportunities for your brand.
          </p>
          <Link to="/audit">
            <Button variant="hero" size="xl">
              Get Free Growth Audit <ArrowRight className="ml-1" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
