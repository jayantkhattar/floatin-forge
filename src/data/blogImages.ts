import metaAdsTesting from "@/assets/blog/meta-ads-testing.svg";
import googleAdsConverting from "@/assets/blog/google-ads-converting.svg";
import performanceSystem from "@/assets/blog/performance-system.svg";
import ecommerceRoas from "@/assets/blog/ecommerce-roas.svg";
import leadFunnelBlueprint from "@/assets/blog/lead-funnel-blueprint.svg";
import retargeting from "@/assets/blog/retargeting.svg";

export const blogImages: Record<string, string> = {
  "meta-ads-creative-testing-framework": metaAdsTesting,
  "google-ads-not-converting-fix": googleAdsConverting,
  "performance-marketing-systems-vs-campaigns": performanceSystem,
  "ecommerce-roas-optimization": ecommerceRoas,
  "lead-funnel-blueprint": leadFunnelBlueprint,
  "retargeting-that-actually-works": retargeting,
};

export const getBlogImage = (slug: string) => blogImages[slug];