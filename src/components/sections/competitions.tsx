import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const COMPETITIONS = [
  {
    badge: "THIS YEAR",
    badgeVariant: "cyan" as const,
    name: "ITC-Egypt",
    tag: null,
    desc: "The International Telecommunications Conference, organized by Egypt's Air Defense College. It includes a student project competition.",
    hoverBorder: "hover:border-brand-cyan/50",
    gradient: "from-[#0e1022]/80 to-[#070814]/95",
  },
  {
    badge: "NEXT YEAR",
    badgeVariant: "magenta" as const,
    name: "RoboCup",
    tag: "BAYMAX",
    desc: "An international robotics competition, and one of the two stages we are targeting with Baymax.",
    hoverBorder: "hover:border-brand-magenta/50",
    gradient: "from-[#180e22]/80 to-[#070814]/95",
  },
  {
    badge: "NEXT YEAR",
    badgeVariant: "violet" as const,
    name: "VEX",
    tag: "BAYMAX",
    desc: "An international robotics competition, and the second stage we are targeting with Baymax.",
    hoverBorder: "hover:border-brand-violet/50",
    gradient: "from-[#120f26]/80 to-[#070814]/95",
  },
];

export default function Competitions() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full"
      id="competitions"
    >
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-brand-violet font-mono text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-brand-violet" />
            <span>TARGET COMPETITIONS</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WHERE WE ARE HEADING.
          </h2>
        </div>
        <p className="font-tech text-sm sm:text-base text-brand-muted max-w-md">
          These are the competitions we are working toward.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {COMPETITIONS.map((c, i) => (
          <Reveal key={c.name} delay={i * 80} className="h-full">
            <Card
              className={`h-full p-8 bg-gradient-to-b ${c.gradient} ${c.hoverBorder} flex flex-col justify-between gap-6`}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Badge variant={c.badgeVariant}>{c.badge}</Badge>
                  {c.tag && (
                    <span className="font-mono text-xs text-brand-muted">
                      {c.tag}
                    </span>
                  )}
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-white">
                  {c.name}
                </h3>
                <p className="font-tech text-sm text-brand-muted leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
