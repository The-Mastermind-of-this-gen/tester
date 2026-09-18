import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

export default function Vision() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full py-8"
      id="vision"
    >
      <div className="absolute top-0 right-0 sm:right-6 pointer-events-none select-none z-0">
        <span className="font-display font-black text-7xl sm:text-9xl md:text-[170px] lg:text-[220px] watermark-text tracking-tighter block leading-none">
          VISION
        </span>
      </div>

      <div className="relative z-10 flex flex-col gap-12">
        <Reveal className="flex flex-col items-start gap-4 max-w-3xl">
          <div className="flex items-center gap-2 text-brand-magenta font-mono text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-brand-magenta" />
            <span>THE LONG GAME</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-white uppercase tracking-tight leading-[1.05]">
            TWO YEARS. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-violet to-brand-magenta">
              ONE GIANT GOAL.
            </span>
          </h2>
          <p className="font-tech text-base sm:text-lg text-brand-muted leading-relaxed">
            Over the next two years we are building Baymax, our flagship
            robot, with international competitions such as RoboCup and VEX as
            the target. Alongside it, we take on smaller projects each year,
            Wall-E and Boomie for this year, so every member gets hands-on
            experience.
          </p>
          <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.03] border-l-4 border-brand-magenta border-y border-r border-white/10 backdrop-blur-md">
            <p className="font-tech text-sm sm:text-base text-white/90 italic">
              Baymax will not be a medical robot. It will be a general-purpose
              robot that can be modified to match the custom character
              inserted into it.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <Reveal>
              <Card className="group relative p-7 hover:border-brand-magenta/50 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-magenta/15 border border-brand-magenta/30 flex-shrink-0 flex items-center justify-center text-brand-magenta transition-transform duration-300 group-hover:scale-105">
                  <span className="material-symbols-outlined text-[26px]">
                    hub
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-brand-magenta uppercase tracking-wider font-bold">
                    DESIGN GOAL
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    One robot, many characters
                  </h3>
                  <p className="font-tech text-sm text-brand-muted leading-relaxed">
                    Baymax is designed as a general-purpose robot, not a
                    single-purpose one. Its behavior and look can be modified to
                    fit the custom character inserted into it.
                  </p>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={80}>
              <Card className="group relative p-7 hover:border-brand-cyan/50 flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/15 border border-brand-cyan/30 flex-shrink-0 flex items-center justify-center text-brand-cyan transition-transform duration-300 group-hover:scale-105">
                  <span className="material-symbols-outlined text-[26px]">
                    psychology
                  </span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider font-bold">
                    FOCUS AREA
                  </span>
                  <h3 className="font-display font-bold text-xl text-white">
                    Neural networks for robotics
                  </h3>
                  <p className="font-tech text-sm text-brand-muted leading-relaxed">
                    The club collaborates to build neural networks for its
                    robotic projects. It is a subject that is not taught across
                    all of our university&apos;s programs, so we learn it by
                    building.
                  </p>
                </div>
              </Card>
            </Reveal>

            <div className="pt-2">
              <a
                className="inline-flex items-center gap-2 font-display font-bold text-sm text-brand-magenta hover:text-white uppercase tracking-wider transition-colors group"
                href="#how-we-work"
              >
                <span>See how we work</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
          </div>

          <Reveal delay={120} className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[380px] p-6 rounded-3xl bg-gradient-to-b from-[#121326]/60 to-[#080914]/90 border border-white/10 flex flex-col items-center">
              <div className="w-full h-64 relative flex items-center justify-center">
                <div className="absolute bottom-2 w-56 h-20 holo-pedestal-baymax rounded-full blur-md animate-hologram-pulse" />
                <Image
                  alt="Baymax concept visual"
                  className="relative z-10 w-48 h-auto object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)] drop-shadow-[0_0_25px_rgba(255,42,133,0.3)] animate-float"
                  src="/images/baymax-small.png"
                  width={585}
                  height={720}
                />
              </div>
              <div className="w-full pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                <span className="text-brand-muted">FLAGSHIP PROJECT</span>
                <span className="text-brand-magenta font-bold">BAYMAX</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
