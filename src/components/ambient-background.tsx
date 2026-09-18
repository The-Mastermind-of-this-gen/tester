export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute -top-32 right-[-10%] w-[800px] h-[800px] rounded-full neon-mesh-glow blur-[140px] animate-pulse-glow" />
      <div className="absolute top-[35%] left-[-15%] w-[850px] h-[850px] rounded-full bg-gradient-to-tr from-brand-purple/20 via-brand-fuchsia/25 to-transparent blur-[160px]" />
      <div className="absolute top-[68%] right-[-10%] w-[900px] h-[900px] rounded-full neon-cyan-glow blur-[170px]" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:32px_32px] opacity-40" />
    </div>
  );
}
