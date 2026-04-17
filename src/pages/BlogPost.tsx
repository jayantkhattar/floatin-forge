import { useEffect, useState } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SEO, breadcrumbJsonLd } from "@/components/SEO";
import { getPostBySlug, getRelatedPosts, type BlogPost, type ContentBlock } from "@/data/blogPosts";
import { getServiceBySlug } from "@/data/servicesData";
import { ArrowRight, ArrowUpRight, BookOpen, Calendar, Clock, Info, Lightbulb, AlertTriangle, Linkedin, Tag, ChevronRight } from "lucide-react";

const calloutIcon = { info: Info, tip: Lightbulb, warn: AlertTriangle } as const;

const renderBlock = (b: ContentBlock, i: number) => {
  switch (b.type) {
    case "p":
      return <p key={i} className="text-foreground/85 leading-relaxed">{b.text}</p>;
    case "h2":
      return <h2 key={i} id={b.id} className="scroll-mt-24 text-2xl md:text-3xl font-heading font-bold mt-12 mb-3">{b.text}</h2>;
    case "h3":
      return <h3 key={i} id={b.id} className="scroll-mt-24 text-xl font-heading font-semibold mt-8 mb-2">{b.text}</h3>;
    case "ul":
      return (
        <ul key={i} className="space-y-2 list-disc pl-5 text-foreground/85">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-2 list-decimal pl-5 text-foreground/85">
          {b.items.map((it, j) => <li key={j}>{it}</li>)}
        </ol>
      );
    case "callout": {
      const Icon = calloutIcon[b.tone ?? "info"];
      const tone = b.tone ?? "info";
      const cls = tone === "warn" ? "border-destructive/30 bg-destructive/5" : tone === "tip" ? "border-accent/30 bg-accent/5" : "border-primary/20 bg-primary/5";
      return (
        <div key={i} className={`my-6 rounded-xl border ${cls} p-5 flex gap-3`}>
          <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            {b.title && <p className="font-semibold mb-1">{b.title}</p>}
            <p className="text-sm text-foreground/85">{b.text}</p>
          </div>
        </div>
      );
    }
    case "quote":
      return (
        <blockquote key={i} className="my-6 border-l-4 border-primary pl-4 italic text-foreground/80">
          "{b.text}"{b.cite && <footer className="not-italic text-sm text-muted-foreground mt-1">— {b.cite}</footer>}
        </blockquote>
      );
    case "cta":
      return (
        <div key={i} className="my-8 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5 p-6 md:p-7">
          <p className="font-heading font-semibold text-lg">{b.title}</p>
          <p className="text-sm text-muted-foreground mt-1.5 mb-4">{b.text}</p>
          <Link to={b.href}>
            <Button variant="hero" size="default">{b.label} <ArrowRight className="ml-1 h-4 w-4" /></Button>
          </Link>
        </div>
      );
  }
};

const ReadingProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setP(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-16 left-0 right-0 z-40 h-0.5 bg-transparent">
      <div className="h-full bg-primary transition-[width] duration-150" style={{ width: `${p}%` }} />
    </div>
  );
};

const buildArticleJsonLd = (post: BlogPost) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.metaDescription,
  datePublished: post.date,
  dateModified: post.dateModified ?? post.date,
  author: { "@type": "Person", name: post.author, url: "https://in.linkedin.com/in/jayantkhattar" },
  publisher: { "@type": "Organization", name: "Floatin", logo: { "@type": "ImageObject", url: "https://floatin.in/favicon-floatin.jpg" } },
  mainEntityOfPage: `https://floatin.in/blog/${post.slug}`,
  keywords: post.keywords.join(", "),
  articleSection: post.category,
});

const buildFaqJsonLd = (post: BlogPost) => post.faq?.length ? ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: post.faq.map(f => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
}) : null;

const BlogPostPage = () => {
  const { slug = "" } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const toc = post.content.filter((b): b is Extract<ContentBlock, { type: "h2" }> => b.type === "h2");
  const related = getRelatedPosts(post.slug);
  const services = (post.relatedServices ?? []).map(s => getServiceBySlug(s)).filter(Boolean);

  const jsonLd: Record<string, unknown>[] = [
    buildArticleJsonLd(post),
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];
  const faqLd = buildFaqJsonLd(post);
  if (faqLd) jsonLd.push(faqLd);

  return (
    <div className="min-h-screen">
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        path={`/blog/${post.slug}`}
        type="article"
        keywords={post.keywords}
        publishedTime={post.date}
        modifiedTime={post.dateModified}
        author={post.author}
        jsonLd={jsonLd}
      />
      <Navbar />
      <ReadingProgress />

      <article className="container-tight py-10 md:py-14">
        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb" className="text-sm text-muted-foreground flex items-center gap-1.5 flex-wrap mb-6">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/blog" className="hover:text-foreground">Blog</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground line-clamp-1">{post.category}</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1 text-primary bg-primary/5 px-2.5 py-1 rounded-full font-medium">
              <Tag className="h-3 w-3" /> {post.category}
            </span>
            <span className="flex items-center gap-1 text-muted-foreground"><Clock className="h-3 w-3" /> {post.readTime}</span>
            <span className="flex items-center gap-1 text-muted-foreground"><Calendar className="h-3 w-3" /> {new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="flex items-center gap-3 pt-2">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-semibold text-sm">JK</div>
            <div className="text-sm">
              <p className="font-medium">{post.author}</p>
              <a href="https://in.linkedin.com/in/jayantkhattar" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary inline-flex items-center gap-1">
                <Linkedin className="h-3 w-3" /> Founder, Floatin
              </a>
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-[1fr_240px] gap-10">
          {/* Main column */}
          <div className="min-w-0 space-y-4">
            {/* Key Takeaways */}
            {post.keyTakeaways?.length ? (
              <div className="rounded-xl border border-border bg-muted/30 p-5 mb-6">
                <p className="font-heading font-semibold mb-3 flex items-center gap-2"><Lightbulb className="h-4 w-4 text-primary" /> Key takeaways</p>
                <ul className="space-y-1.5 text-sm text-foreground/85 list-disc pl-5">
                  {post.keyTakeaways.map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              </div>
            ) : null}

            {post.isOutline && (
              <div className="rounded-lg border border-accent/30 bg-accent/5 p-4 text-sm">
                <strong>Outline preview.</strong> The full article is being written. In the meantime, get personalised guidance via a strategy call.
              </div>
            )}

            {/* Content */}
            {post.content.map(renderBlock)}

            {/* FAQ */}
            {post.faq?.length ? (
              <section className="mt-12">
                <h2 id="faq" className="scroll-mt-24 text-2xl md:text-3xl font-heading font-bold mb-4">Frequently asked questions</h2>
                <div className="space-y-3">
                  {post.faq.map((f, i) => (
                    <details key={i} className="group rounded-lg border border-border bg-card p-4">
                      <summary className="font-medium cursor-pointer list-none flex items-start justify-between gap-3">
                        <span>{f.q}</span>
                        <ChevronRight className="h-4 w-4 mt-0.5 shrink-0 transition-transform group-open:rotate-90" />
                      </summary>
                      <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}

            {/* Author bio */}
            <section className="mt-12 rounded-2xl border border-border bg-card p-6 flex gap-4 items-start">
              <div className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">JK</div>
              <div className="text-sm">
                <p className="font-heading font-semibold text-base">{post.author}</p>
                <p className="text-muted-foreground mt-1">Founder of Floatin. 10+ years building performance marketing systems for Indian D2C, real estate, and service brands. Previously led growth for several 8-figure brands.</p>
                <a href="https://in.linkedin.com/in/jayantkhattar" target="_blank" rel="noopener noreferrer" className="text-primary text-xs inline-flex items-center gap-1 mt-2 hover:underline">
                  <Linkedin className="h-3 w-3" /> Connect on LinkedIn
                </a>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-24 space-y-6">
              {toc.length > 0 && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">On this page</p>
                  <ul className="space-y-2 text-sm border-l border-border">
                    {toc.map(h => (
                      <li key={h.id}>
                        <a href={`#${h.id}`} className="block pl-3 -ml-px border-l border-transparent hover:border-primary hover:text-primary text-muted-foreground transition-colors">
                          {h.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
                  <p className="text-xs font-medium text-muted-foreground">Booking this week</p>
                </div>
                <p className="text-sm font-heading font-semibold mb-1">Free 30-min audit</p>
                <p className="text-xs text-muted-foreground mb-3">Jayant reviews your funnel personally — no pitch.</p>
                <Link to="/book-call">
                  <Button variant="hero" size="sm" className="w-full">Book call <ArrowRight className="ml-1 h-3.5 w-3.5" /></Button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </article>

      {/* Related services / tools / posts */}
      <section className="section-padding bg-surface-warm border-t border-border/50">
        <div className="container-tight space-y-10">
          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-heading font-bold mb-5">Continue reading</h2>
              <div className="grid md:grid-cols-3 gap-5">
                {related.map(p => (
                  <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-card rounded-xl p-5 border border-border/50 hover:border-primary/20 hover:shadow-elevated transition-all">
                    <span className="text-xs text-primary font-medium">{p.category}</span>
                    <h3 className="font-heading font-semibold mt-2 group-hover:text-primary transition-colors line-clamp-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                    <span className="text-sm text-primary font-medium inline-flex items-center gap-1 mt-3">Read <ArrowUpRight className="h-3.5 w-3.5" /></span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {(services.length > 0 || (post.relatedTools?.length ?? 0) > 0) && (
            <div className="grid md:grid-cols-2 gap-6">
              {services.length > 0 && (
                <div className="bg-card rounded-xl p-5 border border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Related services</p>
                  <ul className="space-y-2">
                    {services.map(s => s && (
                      <li key={s.slug}>
                        <Link to={`/services/${s.slug}`} className="flex items-center justify-between gap-3 py-2 hover:text-primary group">
                          <span className="font-medium">{s.name}</span>
                          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {(post.relatedTools?.length ?? 0) > 0 && (
                <div className="bg-card rounded-xl p-5 border border-border/50">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Related free tools</p>
                  <ul className="space-y-2">
                    {post.relatedTools!.map(t => (
                      <li key={t}>
                        <Link to={t} className="flex items-center justify-between gap-3 py-2 hover:text-primary group">
                          <span className="font-medium capitalize">{t.split("/").pop()?.replace(/-/g, " ")}</span>
                          <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding">
        <div className="container-tight text-center space-y-5">
          <BookOpen className="h-10 w-10 text-primary mx-auto" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold">Want this applied to your brand?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Get a free audit — we'll show you the biggest CPL, ROAS, and funnel opportunities specific to your account.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/audit"><Button variant="hero" size="xl">Get Free Growth Audit <ArrowRight className="ml-1" /></Button></Link>
            <Link to="/book-call"><Button variant="hero-outline" size="xl">Book strategy call</Button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
