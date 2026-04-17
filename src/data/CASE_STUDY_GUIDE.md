# Case Study Authoring Guide

Every entry in `src/data/caseStudies.ts` must follow this structure so the
home-page marquee, /clients page, and case-study dialog all render
consistently. **Do not skip fields.** If you don't have data for a field,
use the placeholders listed below — never leave it blank.

---

## 1. Required fields (every case)

```ts
{
  slug: "kebab-case-unique",          // URL-safe id, must be unique
  name: "Brand Name",                  // Display name
  industry: "ecommerce",               // Must exist in `industryLabels`
  services: ["performance"],           // Array from ServiceType union
  metric: "₹10Cr+",                    // Big headline number
  result: "Revenue Generated",         // Short label under the metric
  desc: "One-line summary (≤120 chars).",
  challenge: "1–3 sentences. What was broken / the brief.",
  strategy: "1–3 sentences. What we did, in plain English.",
  results: [                           // 3–5 bullet points, concrete numbers
    "₹X spent → ₹Y revenue",
    "N qualified leads",
    "Z% conversion lift",
  ],
  logo: brandLogo,                     // Imported asset — REQUIRED
  logoSize: "wide",                    // "wide" | "standard" | "square" | "tall"
  platforms: ["Google Ads", "Meta"],   // Channels used
  heroImage: brandHero,                // Imported case-study hero — REQUIRED
}
```

## 2. Optional flags

- `featured: true` — shows the case in the hero slot. Use sparingly (top wins only).
- `comingSoon: true` — see "Coming Soon" rules below.

---

## 3. "Coming Soon" placeholder rules

When the brand is real but we don't have full results yet, use **exactly**
this template so the UI handles it gracefully:

```ts
{
  slug: "brand-slug",
  name: "Brand Name",
  industry: "tech",                      // best-guess industry
  services: ["performance"],             // best-guess services
  metric: "—",                           // em-dash, not empty
  result: "Case study coming soon",
  desc: "Short 1-line description of what we do for them.",
  challenge: "Details coming soon.",
  strategy: "Details coming soon.",
  results: ["Case study in progress"],
  logo: brandLogo,                       // logo MUST exist
  logoSize: "wide",
  heroImage: brandHero,                  // hero MUST exist (use logo bg if no shoot)
  comingSoon: true,                      // critical — drives the badge
}
```

The `CaseStudyCard` component automatically:
- hides the metric block when `comingSoon: true`
- shows a "Case study coming soon" pill at the bottom

---

## 4. Asset placement & naming

- **Logo:** `src/assets/clients/<slug>.webp` (or `.png` if logo has transparency)
- **Hero:** `src/assets/case-studies/<slug>.<ext>` (jpg/jpeg/webp/avif/png)
- Both must be **imported** at the top of `caseStudies.ts`, e.g.:
  ```ts
  import brandLogo from "@/assets/clients/brand.webp";
  import brandHero from "@/assets/case-studies/brand.jpg";
  ```
- Always set `heroImage` — without it, the card falls back to a generic
  gradient and breaks visual consistency.

---

## 5. Allowed values (don't invent new ones without updating the maps)

**`industry`** must be a key in `industryLabels` (top of `caseStudies.ts`).
Add a new key + label there before using it.

**`services`** must be from this union:
`"performance" | "influencer" | "seo" | "social-media" | "web-dev" | "meta-ads" | "automation"`

If you need a new service type, also add it to `serviceLabels` and `serviceColors`.

---

## 6. Quick checklist before committing

- [ ] Slug is unique, kebab-case
- [ ] Logo file exists and is imported
- [ ] Hero image file exists and is imported
- [ ] `industry` is a known key
- [ ] All `services` are valid types
- [ ] `desc` ≤ 120 chars
- [ ] `results` has 3–5 entries with concrete numbers (or the
      "Case study in progress" placeholder for `comingSoon`)
- [ ] `logoSize` set (defaults to "standard" if omitted but be explicit)
- [ ] `featured: true` only if it's a top-tier headline win

When uploading new case studies, paste this checklist into the chat
and confirm each item before I add the entry.
