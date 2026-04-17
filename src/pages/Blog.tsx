import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { DarkHero } from "@/components/layout/DarkHero";
import { SEO, breadcrumbJsonLd } from "@/components/SEO";
import { blogPosts, allCategories } from "@/data/blogPosts";
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Tag } from "lucide-react";

const categories = ["All", ...allCategories];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
  const featuredPosts = blogPosts.filter(p => p.featured);

  return (
    <div className="min-h-screen">
      <SEO
        title="Marketing Blog — Performance, Lead Gen & WhatsApp | Floatin"
        description="Actionable strategies on performance marketing, lead generation, and WhatsApp marketing for Indian brands. Frameworks, calculators, and real numbers."
        path="/blog"
        keywords={["performance marketing blog", "lead generation India", "WhatsApp marketing", "Meta ads", "Google ads"]}
        jsonLd={[
          breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }]),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Floatin Blog",
            url: "https://floatin.in/blog",
            blogPost: blogPosts.map(p => ({
              "@type": "BlogPosting",
              headline: p.title,
              url: `https://floatin.in/blog/${p.slug}`,
              datePublished: p.date,
              author: { "@type": "Person", name: p.author },
            })),
          },
        ]}
      />
      <Navbar />

      <DarkHero>
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-background/10 border border-background/10 rounded-full px-4 py-1.5 text-sm font-medium">
            <BookOpen className="h-3.5 w-3.5" /> Insights & Resources
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
            Growth <span className="bg-gradient-to-r from-primary-foreground via-accent to-primary-foreground bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-lg text-background/70 max-w-2xl mx-auto">
            Actionable strategies, frameworks, and insights on performance marketing, lead generation, and scaling brands in India.
          </p>
        </div>
      </DarkHero>

      {activeCategory === "All" && (
        <section className="section-padding">
          <div className="container-tight space-y-8">
            <h2 className="text-2xl font-heading font-bold">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20"
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
                    </div>
                    <h3 className="font-heading font-semibold text-xl group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                    <span className="text-sm font-medium text-primary inline-flex items-center gap-1 pt-1">
                      Read article <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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

      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "All" ? filtered.filter(p => !p.featured) : filtered).map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-all border border-border/50 hover:border-primary/20"
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
                  <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                    Read more <ArrowUpRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
