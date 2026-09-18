"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LogoImage from "@/components/logo-image";

// Page sections in scroll order. `sections` lists which of them keep a nav
// link highlighted (Support covers its own section and the footer it links to).
const SECTION_IDS = [
  "hero",
  "vision",
  "how-we-work",
  "projects",
  "competitions",
  "support",
  "join",
  "footer",
];

const NAV_LINKS = [
  { href: "#hero", label: "Home", sections: ["hero"] },
  { href: "#vision", label: "Vision", sections: ["vision"] },
  { href: "#how-we-work", label: "How We Work", sections: ["how-we-work"] },
  { href: "#projects", label: "Projects", sections: ["projects"] },
  { href: "#competitions", label: "Competitions", sections: ["competitions"] },
  { href: "#footer", label: "Support", sections: ["support", "footer"] },
];

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [activeSection, setActiveSection] = useState("hero");

  // On scroll: tighten the bar (written straight to the DOM) and work out
  // which section is in view so the matching nav link can be highlighted.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      ref.current?.setAttribute("data-scrolled", String(window.scrollY > 16));

      const root = document.documentElement;
      if (window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
        setActiveSection("footer");
        return;
      }

      // The current section is the last one whose top has passed this line.
      const line = window.innerHeight * 0.35;
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActiveSection(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <header
      ref={ref}
      data-scrolled="false"
      className="fixed top-0 left-0 w-full z-40 px-6 sm:px-12 py-5 data-[scrolled=true]:py-3 backdrop-blur-md bg-brand-black/60 data-[scrolled=true]:bg-brand-black/85 border-b border-white/[0.06] data-[scrolled=true]:border-white/10 transition-[padding,background-color,border-color] duration-300 ease-out"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link className="flex min-w-0 items-center gap-2.5 sm:gap-3.5 group" href="#hero">
          <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-brand-magenta/30 blur-md group-hover:bg-brand-cyan/40 transition-all" />
            <LogoImage
              alt="Tech Horizon logo"
              className="relative w-full h-full object-contain filter drop-shadow-[0_0_18px_rgba(217,38,180,0.85)] group-hover:scale-110 transition-transform duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt7oUDYj-YFgQXPmiIKJrnkTYg-jsQdB3_vS-36k2ighuWVos_27RnvkuMZAg4ztDt_IBTJosnuX9kB-0xiWx0T1r2eYPzqWdz8WRbBplJ2liIZVQbsdc_LUPcZAh8dLsunOYSx9UmaHSCKH1GKhKAJnPajcbV7l4teLmR-eMXplD3IOrYhljfn0CcgLlZ9DXgBBF1_vsS0FZdh0deA0Y_wdGvocFRAeVkw6mibPtbMzsu3pil9fYEvincvIB-jZ4_cQ"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-display font-extrabold whitespace-nowrap tracking-wider sm:tracking-widest text-[15px] min-[400px]:text-lg sm:text-xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-brand-magenta group-hover:to-brand-cyan transition-all">
                TECH HORIZON
              </span>
              <span className="hidden min-[400px]:inline-block w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_8px_#00f0ff] animate-pulse" />
            </div>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-brand-muted">
              Robotics Club<span className="hidden min-[400px]:inline"> · AASTMT</span>
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1 bg-[#0e1020]/75 backdrop-blur-xl border border-white/10 rounded-full px-4 py-1.5 shadow-[0_4px_30px_rgba(0,0,0,0.6)]">
          {NAV_LINKS.map((link) => {
            const isActive = link.sections.includes(activeSection);
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "location" : undefined}
                className={
                  isActive
                    ? "text-xs font-medium uppercase tracking-wider text-white bg-white/10 px-3.5 py-2 rounded-full active:scale-95 transition-[color,background-color,scale] duration-200"
                    : "text-xs font-medium uppercase tracking-wider text-brand-muted hover:text-white px-3.5 py-2 rounded-full hover:bg-white/5 active:scale-95 transition-[color,background-color,scale] duration-200"
                }
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <a
            className="group inline-flex items-center bg-[#121326]/90 border border-white/15 rounded-full pl-4 sm:pl-5 pr-1.5 py-1.5 hover:border-brand-magenta/60 transition-all duration-200 ease-out shadow-[0_0_25px_rgba(217,38,180,0.2)] hover:shadow-[0_0_34px_rgba(217,38,180,0.38)] motion-safe:hover:-translate-y-0.5 motion-safe:active:translate-y-0 motion-safe:active:scale-[0.97]"
            href="#join"
          >
            <span className="font-display font-semibold text-xs tracking-wider uppercase text-white group-hover:text-brand-magenta transition-colors mr-2.5 sm:mr-3">
              Join
            </span>
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-magenta to-brand-violet flex items-center justify-center text-white shadow-[0_0_12px_rgba(255,42,133,0.7)] group-hover:scale-110 group-hover:rotate-45 transition-all duration-300">
              <span className="material-symbols-outlined text-[16px]">
                arrow_outward
              </span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
