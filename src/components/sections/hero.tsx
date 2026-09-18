import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full"
      id="hero"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[76vh]">
        <div className="lg:col-span-7 flex flex-col items-start gap-6 sm:gap-8">
          <div className="animate-rise inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-brand-magenta shadow-[0_0_8px_#ff2a85] animate-pulse" />
            <span className="font-mono text-[11px] font-semibold text-white tracking-[0.15em] uppercase">
              Tech Horizon
            </span>
          </div>

          <h1 className="animate-rise [animation-delay:90ms] font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-[76px] leading-[0.98] tracking-tight uppercase text-white">
            WE BUILD ROBOTS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-magenta to-brand-violet filter drop-shadow-[0_0_35px_rgba(217,38,180,0.35)]">
              THAT YARAB T WORK.
            </span>
          </h1>

          <p className="animate-rise [animation-delay:170ms] font-tech text-base sm:text-lg text-brand-muted max-w-xl font-light leading-relaxed">
            Tech Horizon is the robotics club at AASTMT. Engineering and
            computer science students learning together, building robots, and
            preparing seriously for competition.
          </p>

          <div className="animate-rise [animation-delay:250ms] flex flex-wrap items-center gap-4 pt-2">
            <Button asChild size="lg" className="pl-6 pr-2 h-auto py-2">
              <a href="#projects" className="group">
                <span className="font-display font-bold text-xs uppercase tracking-widest text-white mr-4 normal-case tracking-widest">
                  See Our Projects
                </span>
                <span className="w-9 h-9 rounded-full bg-gradient-to-r from-brand-magenta to-brand-violet flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <span className="material-symbols-outlined text-[18px] transition-transform duration-300 group-hover:translate-y-0.5">
                    south
                  </span>
                </span>
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#vision" className="group gap-2">
                <span>Our Vision</span>
                <span className="material-symbols-outlined text-[16px] text-brand-magenta transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </Button>
          </div>
        </div>

        {/* Hero visual: Baymax */}
        <div className="animate-rise [animation-delay:200ms] lg:col-span-5 relative flex justify-end items-center min-h-[440px] sm:min-h-[520px] lg:min-h-[750px]">
          <div className="absolute -inset-16 bg-gradient-to-tr from-brand-fuchsia/35 via-brand-purple/25 to-brand-cyan/20 blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute -right-24 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-brand-magenta/20 blur-[140px] pointer-events-none" />
          <div className="absolute bottom-6 right-0 w-[500px] h-[130px] bg-[radial-gradient(ellipse_60%_40%_at_50%_60%,rgba(0,240,255,0.28)_0%,rgba(217,38,180,0.18)_45%,transparent_75%)] blur-md pointer-events-none" />

          <div className="relative w-full h-full flex items-center justify-center lg:justify-end select-none">
            <div className="relative w-full max-w-[440px] sm:max-w-[560px] lg:max-w-none lg:w-[780px] lg:translate-x-20 group animate-float">
              <Image
                alt="Baymax, the club's flagship robot"
                className="w-full h-auto object-contain filter contrast-105 brightness-105 group-hover:scale-105 transition-transform duration-700 ease-out drop-shadow-[0_20px_60px_rgba(0,0,0,0.9)] drop-shadow-[0_0_35px_rgba(139,92,246,0.3)]"
                src="/images/baymax-hero.png"
                width={598}
                height={720}
                priority
              />
            </div>
          </div>
          <span className="absolute bottom-0 right-0 font-mono text-[10px] uppercase tracking-widest text-brand-muted">
            Baymax
          </span>
        </div>
      </div>
    </section>
  );
}
