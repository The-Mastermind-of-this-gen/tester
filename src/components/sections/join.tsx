import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";

const VALUES = [
  {
    icon: "task_alt",
    color: "text-brand-violet",
    hoverBorder: "hover:border-brand-violet/50",
    title: "Discipline",
    desc: "Show up, do the work, and follow through on what you commit to.",
  },
  {
    icon: "all_inclusive",
    color: "text-brand-magenta",
    hoverBorder: "hover:border-brand-magenta/50",
    title: "Continuity",
    desc: "Robots are built over months, not days. We need members who stay with a project until it is done.",
  },
  {
    icon: "flag",
    color: "text-brand-cyan",
    hoverBorder: "hover:border-brand-cyan/50",
    title: "Never quit",
    desc: "What we are building is not easy. Problems are expected, and we keep going.",
  },
];

export default function Join() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full"
      id="join"
    >
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 text-brand-magenta font-mono text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-brand-magenta" />
            <span>MEMBERSHIP</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WHO WE ARE LOOKING FOR.
          </h2>
        </div>
        <p className="font-tech text-sm sm:text-base text-brand-muted max-w-md">
          Registration is open for everyone to apply. Whoever puts in real
          effort will be accepted, and no prior experience is required.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {VALUES.map((v, i) => (
          <Reveal key={v.title} delay={i * 80} className="h-full">
            <Card
              className={`h-full p-8 ${v.hoverBorder} flex flex-col gap-4`}
            >
              <span
                className={`material-symbols-outlined self-start text-[30px] transition-transform duration-300 group-hover:scale-110 ${v.color}`}
              >
                {v.icon}
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                {v.title}
              </h3>
              <p className="font-tech text-sm text-brand-muted leading-relaxed">
                {v.desc}
              </p>
            </Card>
          </Reveal>
        ))}
      </div>

      <Reveal className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-[#120f26] via-[#090a16] to-[#04050a] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_20px_60px_rgba(217,38,180,0.2)]">
        <div className="flex flex-col gap-2 max-w-2xl">
          <span className="font-mono text-xs text-brand-magenta uppercase tracking-wider font-bold">
            HOW WE GROW
          </span>
          <p className="font-display font-bold text-xl sm:text-2xl text-white leading-snug">
            Learn it, build it, then teach it back, so the whole team levels
            up together.
          </p>
        </div>
        <Button asChild size="lg" className="w-full md:w-auto md:flex-shrink-0 gap-3 px-6 sm:px-8 h-auto py-3.5 whitespace-normal text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRER5s5vivGcwpXeg2EZaVb2MAxlUoZ7WmJX9Ifl3sXdF1vw/viewform?usp=dialog"
            target="_blank"
            rel="noopener noreferrer"
            className="group normal-case"
          >
            <span className="font-display font-black text-xs sm:text-sm uppercase tracking-wider">
              Open the registration form
            </span>
            <span className="material-symbols-outlined text-[18px] group-hover:rotate-45 transition-transform duration-300">
              arrow_outward
            </span>
          </a>
        </Button>
      </Reveal>
    </section>
  );
}
