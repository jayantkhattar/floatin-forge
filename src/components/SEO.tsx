import { Helmet } from "react-helmet-async";

export interface SEOProps {
  title: string;
  description: string;
  path?: string; // e.g. "/blog/how-to-reduce-cpl"
  image?: string; // absolute or root-relative
  type?: "website" | "article";
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SITE = "https://floatin.in";
const DEFAULT_OG = "/favicon-floatin.jpg";

export const SEO = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG,
  type = "website",
  keywords,
  publishedTime,
  modifiedTime,
  author = "Jayant Khattar",
  jsonLd,
  noindex,
}: SEOProps) => {
  const url = path.startsWith("http") ? path : `${SITE}${path}`;
  const ogImage = image.startsWith("http") ? image : `${SITE}${image}`;
  const fullTitle = title.length > 60 ? title.slice(0, 57) + "…" : title;
  const desc = description.length > 160 ? description.slice(0, 157) + "…" : description;

  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {keywords?.length ? <meta name="keywords" content={keywords.join(", ")} /> : null}
      <meta name="author" content={author} />
      {noindex ? <meta name="robots" content="noindex,nofollow" /> : <meta name="robots" content="index,follow,max-image-preview:large" />}
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Floatin" />
      {publishedTime ? <meta property="article:published_time" content={publishedTime} /> : null}
      {modifiedTime ? <meta property="article:modified_time" content={modifiedTime} /> : null}
      {type === "article" && author ? <meta property="article:author" content={author} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={ogImage} />

      {blocks.map((b, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(b)}</script>
      ))}
    </Helmet>
  );
};

export const orgJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Floatin",
  url: SITE,
  logo: `${SITE}/favicon-floatin.jpg`,
  description: "Performance marketing agency for Indian brands — lead generation, paid ads, WhatsApp marketing, and creative.",
  founder: {
    "@type": "Person",
    name: "Jayant Khattar",
    sameAs: ["https://in.linkedin.com/in/jayantkhattar"],
  },
  sameAs: [
    "https://in.linkedin.com/in/jayantkhattar",
  ],
  areaServed: "IN",
});

export const websiteJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Floatin",
  url: SITE,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE}/blog?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
});

export const breadcrumbJsonLd = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE}${it.path}`,
  })),
});
