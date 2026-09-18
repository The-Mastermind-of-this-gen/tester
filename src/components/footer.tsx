import LogoImage from "@/components/logo-image";

const FOOTER_LINKS = [
  { href: "#hero", label: "Home" },
  { href: "#vision", label: "Vision" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#projects", label: "Projects" },
  { href: "#competitions", label: "Competitions" },
  { href: "#join", label: "Join" },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative z-10 w-full border-t border-white/10 bg-[#05060e]/95 backdrop-blur-2xl mt-12"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-14 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <LogoImage
                  alt="Tech Horizon logo"
                  className="w-full h-full object-contain filter drop-shadow-[0_0_15px_rgba(217,38,180,0.7)]"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDyCNBQbzIImRyqiS3R8JNNjx2swiRUeX_wxdhdJ0kwuR3nVWsDGVb4APM85rvyNZoMQSfAgMKbJaIHVjfNFOjjL4W0jaeTPyr9nYOAuBwHU_k0g6BTN4Xjgx86GenWk5zYv-rK63EYtGg28fzM6jo6vlP3OZn2llEzvfs7nYWQei7NhuwL0NY_WiQ5yrSE66X8DEibYQbKONYX2saL4G0ECjAO85s52e836Dg_wUheSTfHwfkmqyKx9kqbWoIYYjt6Q"
                />
              </div>
              <span className="font-display font-extrabold tracking-widest text-lg text-white">
                TECH HORIZON
              </span>
            </div>
            <p className="font-tech text-xs sm:text-sm text-brand-muted max-w-md">
              The robotics club at the Arab Academy for Science, Technology
              and Maritime Transport (AASTMT).
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 font-tech text-xs sm:text-sm text-brand-muted">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                className="hover:text-white transition-colors"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
            <a
              className="hover:text-white transition-colors inline-flex items-center gap-1"
              href="mailto:tech.horizon.aast@gmail.com"
              title="tech.horizon.aast@gmail.com"
            >
              <span>Support</span>
              <span className="text-[11px] text-brand-cyan">
                (tech.horizon.aast@gmail.com)
              </span>
            </a>
          </nav>
        </div>

        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-brand-muted">
          <span>© 2026 Tech Horizon · AASTMT</span>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-brand-cyan" />
            <span className="text-brand-ink">
              REGISTRATION CLOSES 06.10.2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
