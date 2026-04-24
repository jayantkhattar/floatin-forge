import { MessageCircle } from "lucide-react";

const PHONE = "919953821519";
const MESSAGE = "Hi Floatin, I'd like to know more about your performance marketing services.";

/**
 * Floating WhatsApp CTA pinned to the bottom-right of every page.
 * Subtle, light styling — no aggressive ping animation.
 */
export const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Floatin on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="relative flex items-center gap-2 bg-[hsl(142_55%_92%)] hover:bg-[hsl(142_55%_88%)] text-[hsl(142_60%_28%)] border border-[hsl(142_45%_75%)] rounded-full pl-3 pr-4 py-2.5 shadow-card transition-all hover:shadow-elevated">
        <MessageCircle className="h-4 w-4" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp us</span>
      </span>
    </a>
  );
};
