import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Sparkles, Clock } from "lucide-react";
import founderImg from "@/assets/founder-jayant.jpeg";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4";

const FADE_MS = 500;
const FADE_OUT_LEAD = 0.55; // seconds before end

export const CinematicAuditHero = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const cancelAnim = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    const animateOpacity = (target: number, durationMs: number) => {
      cancelAnim();
      const start = performance.now();
      const from = parseFloat(video.style.opacity || "0") || 0;
      const tick = (now: number) => {
        const t = Math.min(1, (now - start) / durationMs);
        const v = from + (target - from) * t;
        video.style.opacity = String(v);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          rafRef.current = null;
        }
      };
      rafRef.current = requestAnimationFrame(tick);
    };

    const handleLoaded = () => {
      fadingOutRef.current = false;
      animateOpacity(1, FADE_MS);
    };

    const handleTimeUpdate = () => {
      if (fadingOutRef.current) return;
      if (!isFinite(video.duration)) return;
      if (video.duration - video.currentTime <= FADE_OUT_LEAD) {
        fadingOutRef.current = true;
        animateOpacity(0, FADE_MS);
      }
    };

    const handleEnded = () => {
      video.style.opacity = "0";
      window.setTimeout(() => {
        try {
          video.currentTime = 0;
          void video.play();
          fadingOutRef.current = false;
          animateOpacity(1, FADE_MS);
        } catch {
          // ignore
        }
      }, 100);
    };

    video.style.opacity = "0";
    video.addEventListener("loadeddata", handleLoaded);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // Try to play (autoplay policies need muted, which we set on the element)
    void video.play().catch(() => {});

    return () => {
      cancelAnim();
      video.removeEventListener("loadeddata", handleLoaded);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  const scrollToForm = () => {
    const el = document.getElementById("audit-form");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background video */}
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
        style={{ opacity: 0 }}
      />
      {/* Subtle dark scrim for legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70 pointer-events-none" />

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero content */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">
          {/* Founder badge */}
          <div className="liquid-glass rounded-full pl-1.5 pr-4 py-1.5 inline-flex items-center gap-3 mb-8">
            <img
              src={founderImg}
              alt="Jayant Khattar"
              className="h-7 w-7 rounded-full object-cover"
            />
            <span className="text-xs md:text-sm text-white/90">
              Audit personally led by{" "}
              <span className="font-semibold text-white">Jayant Khattar</span>
            </span>
          </div>

          <h1
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6 tracking-tight max-w-4xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            We'll find <em className="italic">wasted spend</em> in your ads — in 48 hours.
          </h1>

          <p className="max-w-xl text-white/80 text-base md:text-lg leading-relaxed mb-8 px-4">
            A free, no-pitch deep-dive into your ads, funnel and creative.
            Walk away with a 90-day roadmap of the top 3 levers — yours to keep.
          </p>

          {/* Email-style CTA bar */}
          <div className="max-w-xl w-full space-y-4">
            <button
              type="button"
              onClick={scrollToForm}
              className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3 w-full text-left group"
            >
              <span className="flex-1 text-white/70 text-base">
                Start your free audit →
              </span>
              <span className="bg-white rounded-full p-3 text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                <ArrowRight size={20} />
              </span>
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2">
              <span className="liquid-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white/90">
                <Sparkles className="h-3 w-3" /> ₹0
              </span>
              <span className="liquid-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white/90">
                <Clock className="h-3 w-3" /> 48-hr turnaround
              </span>
              <span className="liquid-glass inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium text-white/90">
                <ShieldCheck className="h-3 w-3" /> Zero-pitch promise
              </span>
            </div>

            <div className="pt-2">
              <Link
                to="/book-call"
                className="liquid-glass inline-block rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5"
              >
                Prefer to talk first? Book a call
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="relative z-10 flex justify-center pb-10">
          <button
            type="button"
            onClick={scrollToForm}
            aria-label="Scroll to audit form"
            className="liquid-glass rounded-full p-3 text-white/80 hover:text-white"
          >
            <ArrowRight size={18} className="rotate-90" />
          </button>
        </div>
      </div>
    </section>
  );
};
