"use client";

import { useEffect, useRef, type ComponentProps, type CSSProperties } from "react";

import { cn } from "@/lib/utils";

type RevealProps = ComponentProps<"div"> & {
  /** Stagger offset in ms for siblings that enter together. */
  delay?: number;
};

/**
 * Fades and lifts its content into place the first time it scrolls into view.
 *
 * Content is visible in the server-rendered HTML. Only elements that start
 * below the fold are hidden after hydration, so nothing flashes and nothing
 * stays hidden if JavaScript or IntersectionObserver is unavailable.
 * The hidden/shown styles live in globals.css under [data-reveal].
 */
export function Reveal({
  delay = 0,
  className,
  style,
  children,
  ...props
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Already on screen, or scrolled past (e.g. reload mid-page): leave it be.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = "shown";
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      {...props}
      ref={ref}
      className={cn(className)}
      style={{ "--reveal-delay": `${delay}ms`, ...style } as CSSProperties}
    >
      {children}
    </div>
  );
}
