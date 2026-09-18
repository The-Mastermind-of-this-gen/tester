import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/reveal";

export default function Projects() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full"
      id="projects"
    >
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-brand-magenta font-mono text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-brand-magenta" />
            <span>THE PROJECTS</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WHAT WE ARE BUILDING.
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Baymax */}
        <Reveal className="h-full">
          <Card className="group relative h-full p-6 sm:p-7 bg-[#0c0e20]/75 hover:border-brand-violet/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-brand-violet font-bold">BAYMAX</span>
                <span className="text-brand-muted text-[10px] tracking-wider uppercase">
                  Flagship • 2-Year Build
                </span>
              </div>
              <div className="relative w-full h-56 my-4 flex items-center justify-center">
                <div className="absolute bottom-2 w-48 h-16 holo-pedestal-baymax rounded-full blur-md" />
                <Image
                  alt="Baymax concept visual"
                  className="w-44 h-auto object-contain select-none transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-[1.04] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                  src="/images/baymax-small.png"
                  width={585}
                  height={720}
                />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-brand-violet transition-colors">
                Baymax
              </h3>
              <p className="font-tech text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Our flagship robot: a general-purpose design that can be
                modified to match the custom character inserted into it. Target
                competitions: RoboCup and VEX.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-white/10">
              <Badge>Flagship</Badge>
              <Badge>General-purpose</Badge>
              <Badge>RoboCup · VEX</Badge>
            </div>
          </Card>
        </Reveal>

        {/* Wall-E */}
        <Reveal delay={80} className="h-full">
          <Card className="group relative h-full p-6 sm:p-7 bg-[#0c0e20]/75 hover:border-brand-cyan/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-brand-cyan font-bold">WALL-E</span>
                <span className="text-brand-muted text-[10px] tracking-wider uppercase">
                  This year&apos;s project
                </span>
              </div>
              <div className="relative w-full h-56 my-4 flex items-center justify-center">
                <div className="absolute bottom-2 w-48 h-16 holo-pedestal-walle rounded-full blur-md" />
                <Image
                  alt="Wall-E concept visual"
                  className="w-44 h-auto object-contain select-none transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-[1.04] filter drop-shadow-[0_15px_25px_rgba(0,0,0,0.9)]"
                  src="/images/walle.png"
                  width={501}
                  height={540}
                />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-brand-cyan transition-colors">
                Wall-E
              </h3>
              <p className="font-tech text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                One of our two projects for this year, developed alongside
                Baymax by members from different majors.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-white/10">
              <Badge>This year</Badge>
              <Badge>Team build</Badge>
            </div>
          </Card>
        </Reveal>

        {/* Boomie */}
        <Reveal delay={160} className="h-full">
          <Card className="group relative h-full p-6 sm:p-7 bg-[#0c0e20]/75 hover:border-brand-magenta/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <span className="text-brand-magenta font-bold">BOOMIE</span>
                <span className="text-brand-muted text-[10px] tracking-wider uppercase">
                  This year&apos;s project
                </span>
              </div>
              <div className="relative w-full h-56 my-4 flex items-center justify-center">
                <div className="absolute bottom-2 w-48 h-16 holo-pedestal-boomie rounded-full blur-md" />
                <Image
                  alt="Boomie concept visual"
                  className="h-48 sm:h-52 w-auto object-contain z-10 transition-transform duration-500 ease-out motion-safe:group-hover:-translate-y-1 motion-safe:group-hover:scale-[1.04]"
                  src="/images/boomie.png"
                  width={772}
                  height={526}
                />
              </div>
              <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-brand-magenta transition-colors">
                Boomie
              </h3>
              <p className="font-tech text-xs sm:text-sm text-brand-muted mt-2 leading-relaxed">
                Our second project for this year, built alongside Baymax and
                Wall-E as part of the same team effort.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-6 mt-4 border-t border-white/10">
              <Badge>This year</Badge>
              <Badge>Team build</Badge>
            </div>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
