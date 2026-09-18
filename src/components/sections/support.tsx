import { Card } from "@/components/ui/card";
import { Reveal } from "@/components/reveal";

const UNIVERSITIES = [
  "Cairo University",
  "Ain Shams University",
  "Al-Azhar University",
  "ElSewedy University of Technology",
  "Misr University for Science and Technology",
  "May University in Cairo",
  "Ahram Canadian University",
];

export default function Support() {
  return (
    <section
      className="relative max-w-7xl mx-auto px-6 sm:px-12 w-full"
      id="support"
    >
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <div className="inline-flex items-center gap-2 text-brand-cyan uppercase tracking-[0.2em]">
              <span className="w-2 h-2 rounded-full bg-brand-cyan" />
              <span>SUPPORT &amp; INQUIRIES</span>
            </div>
            <span className="text-brand-muted hidden sm:inline">•</span>
            <a
              href="mailto:tech.horizon.aast@gmail.com"
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan/20 active:scale-[0.98] transition-[background-color,scale] duration-200 lowercase tracking-normal text-xs"
            >
              <span className="material-symbols-outlined text-[14px]">
                mail
              </span>
              Need help? questions? tech.horizon.aast@gmail.com
            </a>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl text-white uppercase tracking-tight">
            WE DO NOT BUILD ALONE.
          </h2>
        </div>
        <p className="font-tech text-sm sm:text-base text-brand-muted max-w-md">
          The club is backed by an external lab working with EME, and by
          seven universities that have volunteered to help.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* EME */}
        <Reveal className="lg:col-span-5 h-full">
          <Card className="h-full p-8 hover:border-brand-magenta/50 flex flex-col gap-6">
            <span className="font-mono text-xs text-brand-magenta uppercase tracking-wider font-bold">
              EXTERNAL LAB
            </span>
            <div className="rounded-2xl overflow-hidden border border-white/10 w-full max-w-[320px] h-48 flex items-center justify-center mx-auto relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbQIHX0RzuIlQPeowE9oNMLmeoGWbkGdfZvZVxX-NHNH3QVc7FpMsEthHDF6EIaBE4xrNW9fFTvj6rF03MIdALCHXVbIr7HZqS-e2PITHUJDXnVVP3VBkTtgtncm4ShvBgmMejbz4iHWAzgBfco3pG1XpZMMHCu6FdA4GNdfNdNsYz8PVqwI1DmVwo9NII-e-6Hz5qwUM_ijQcDWQsaQg__UqZz90sYvQMjGv9l-VxVnGQmvPjZFl5DtnZNHIOu_jxSmft8mIfpD578A"
                alt="EME — Egypt Makes Electronics"
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-xl text-white">
                EME · Egypt Makes Electronics
              </h3>
              <p className="font-tech text-sm text-brand-muted leading-relaxed">
                We are supported by an external lab that cooperates with EME,
                giving the club access to expertise beyond the classroom.
              </p>
            </div>
          </Card>
        </Reveal>

        {/* Universities */}
        <Reveal delay={100} className="lg:col-span-7 h-full">
          <Card className="h-full p-8 hover:border-brand-cyan/50 flex flex-col gap-6">
            <span className="font-mono text-xs text-brand-cyan uppercase tracking-wider font-bold">
              UNIVERSITY VOLUNTEERS
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-display font-bold text-xl text-white">
                Seven universities have volunteered to help us
              </h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-tech text-sm text-brand-ink">
              {UNIVERSITIES.map((uni, i) => (
                <li
                  key={uni}
                  className={`group/item flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 transition-[background-color,border-color] duration-200 hover:bg-white/[0.07] hover:border-brand-cyan/30 ${
                    i === UNIVERSITIES.length - 1 ? "sm:col-span-2" : ""
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan transition-transform duration-200 group-hover/item:scale-150" />
                  {uni}
                </li>
              ))}
            </ul>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
