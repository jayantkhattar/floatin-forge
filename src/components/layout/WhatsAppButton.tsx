import { MessageCircle } from "lucide-react";

const PHONE = "919953821519";
const MESSAGE = "Hi Floatin, I'd like to know more about your performance marketing services.";

/**
 * Floating WhatsApp CTA pinned to the bottom-left of every page.
 * Opens wa.me in a new tab with a prefilled message.
 */
export const WhatsAppButton = () => {
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Floatin on WhatsApp"
      className="fixed bottom-5 left-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[hsl(142_70%_45%)] opacity-60 animate-ping" />
      <span className="relative flex items-center gap-2 bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] text-white rounded-full pl-3.5 pr-4 py-3 shadow-elevated transition-all hover:scale-105">
        <MessageCircle className="h-5 w-5 fill-white" />
        <span className="hidden sm:inline text-sm font-semibold">Chat on WhatsApp</span>
      </span>
    </a>
  );
};
