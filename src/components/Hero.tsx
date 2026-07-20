import FadeIn from "./FadeIn";
import TopoBackground from "./TopoBackground";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <TopoBackground />
      <div className="topo-fade" aria-hidden="true" />

      <div className="relative z-10 px-6 max-w-4xl mx-auto w-full">
        <FadeIn>
          <p className="font-mono text-sm text-accent tracking-[0.15em] uppercase mb-6">
            researcher / engineer / builder
          </p>
        </FadeIn>

        <FadeIn delay={80}>
          <h1 className="font-display text-[14vw] sm:text-8xl font-semibold tracking-[-0.03em] leading-[0.92]">
            Clayton
            <br />
            <span className="text-accent">Durepos</span>
          </h1>
        </FadeIn>

        <FadeIn delay={180}>
          <p className="mt-8 text-lg sm:text-xl leading-relaxed text-muted max-w-lg">
            Building whatever comes my way, to perfection.
          </p>
        </FadeIn>

        <FadeIn delay={280}>
          <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 font-mono text-sm">
            <a
              href="https://github.com/CDurepos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              github
            </a>
            <span className="text-border">/</span>
            <a
              href="https://linkedin.com/in/cdurepos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              linkedin
            </a>
            <span className="text-border">/</span>
            <a
              href="https://scholar.google.com/citations?user=tApykZYAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              scholar
            </a>
            <span className="text-border">/</span>
            <a href="mailto:clayton.durepos@maine.edu" className="text-link">
              email
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
