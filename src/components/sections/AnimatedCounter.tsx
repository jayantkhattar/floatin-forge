import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  /** Final numeric value to count to. */
  value: number;
  /** Optional prefix (e.g. "₹"). */
  prefix?: string;
  /** Optional suffix (e.g. "Cr+", "x", "+"). */
  suffix?: string;
  /** Animation duration in ms. */
  duration?: number;
  /** Decimal places to render (e.g. 1 for 8.2x). */
  decimals?: number;
}

/**
 * Counts from 0 → value once when scrolled into view.
 * Used for hero metric tiles on the home page.
 */
export const AnimatedCounter = ({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  decimals = 0,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(value * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isInView, value, duration]);

  const formatted =
    decimals > 0
      ? display.toFixed(decimals)
      : Math.round(display).toLocaleString("en-IN");

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
};
