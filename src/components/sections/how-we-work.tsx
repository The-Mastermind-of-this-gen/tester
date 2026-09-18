import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const FEATURES = [
  {
    icon: "science",
    iconColor: "text-brand-violet",
    borderHover: "hover:border-brand-violet/50",
    title: "Weekly lab section",
    desc: "The team meets in the lab once a week to build, test, and learn hands-on.",
    tag: "Hands-on practice",
  },
  {
    icon: "groups",
    iconColor: "text-brand-magenta",
    borderHover: "hover:border-brand-magenta/50",
    title: "Mixed majors",
    desc: "Students from most engineering and computer science majors work on the same robots, so every project draws on different skills.",
    tag: "Engineering + CS",
  },
  {
    icon: "school",
    iconColor: "text-brand-cyan",
    borderHover: "hover:border-brand-cyan/50",
    title: "Special Lectures",
    desc: "We actively collaborate with distinguished professors and specialized academic lecturers who deliver guest sessions to mentor our team and deepen our technical foundation.",
    tag: "Peer learning",
  },
  {
    icon: "verified",
    iconColor: "text-white",
    borderHover: "hover:border-white/40",
    title: "Discipline first",
    desc: "Robotics is not easy. We value discipline, continuity, and never quitting more than prior experience.",
    tag: "Our standard",
  },
];

const ROADMAP = [
  {
    dotColor: "bg-brand-violet",
    textColor: "text-brand-violet",
    label: "19 SEPTEMBER 2026",
    title: "Registration opens",
    desc: "Open to every student who is ready to put in real effort. The team places each member at the right level.",
  },
  {
    dotColor: "bg-brand-magenta",
    textColor: "text-brand-magenta",
    label: "YEAR 1 · THIS YEAR",
    title: "Learn, build, compete",
    desc: "Learning together, building Wall-E and Boomie alongside Baymax, and preparing for ITC-Egypt.",
  },
  {
    dotColor: "bg-brand-cyan",
    textColor: "text-brand-cyan",
    label: "YEAR 2 · NEXT YEAR",
    title: "Baymax goes international",
    desc: "Target: complete Baymax and take it to RoboCup and VEX.",
  },
];

export default function HowWeWork() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full"
      id="how-we-work"
    >
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-brand-cyan font-mono text-xs uppercase tracking-[0.2em]">
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span>HOW WE WORK</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            LEARN TOGETHER. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-cyan to-brand-violet">
              BUILD TOGETHER.
            </span>
          </h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {FEATURES.map((f, i) => (
          <Reveal key={f.title} delay={i * 70} className="h-full">
            <Card
              className={`h-full p-6 ${f.borderHover} flex flex-col justify-between`}
            >
              <div className="flex flex-col gap-4">
                <span
                  className={`material-symbols-outlined self-start text-[30px] transition-transform duration-300 group-hover:scale-110 ${f.iconColor}`}
                >
                  {f.icon}
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {f.title}
                </h3>
                <p className="font-tech text-xs text-brand-muted leading-relaxed">
                  {f.desc}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-white/10 font-mono text-[10px] text-brand-ink uppercase">
                {f.tag}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>

      {/* Roadmap */}
      <Reveal delay={60} className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-[#0d0f22] via-[#090b18] to-[#060712] border border-white/15 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.7)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-brand-cyan shadow-[0_0_10px_#00f0ff]" />
            <h3 className="font-display font-extrabold text-xl text-white tracking-wide">
              Roadmap
            </h3>
          </div>
          <span className="font-mono text-xs font-bold px-3 py-1.5 rounded-full bg-brand-cyan/15 text-brand-cyan border border-brand-cyan/30 w-fit">
            Baymax: 2-year target
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
          {ROADMAP.map((step) => (
            <div key={step.title} className="group flex flex-col gap-3">
              <div
                className={`flex items-center gap-2 font-mono text-xs ${step.textColor}`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150 ${step.dotColor}`}
                />
                <span>{step.label}</span>
              </div>
              <h4 className="font-display font-bold text-base text-white">
                {step.title}
              </h4>
              <p className="font-tech text-xs text-brand-muted leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
