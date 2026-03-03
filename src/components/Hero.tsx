import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
      <div>
        <FadeIn>
          <h1 className="text-5xl sm:text-6xl font-medium tracking-tight leading-[1.1]">
            <span className="font-mono text-muted/70">&#123;</span>
            <span>Clayton <span className="text-accent">Durepos</span></span>
            <span className="font-mono text-muted/70">&#125;</span>
          </h1>
        </FadeIn>

        <FadeIn delay={100}>
          <p className="ml-6 mt-4 font-mono text-base sm:text-lg text-muted">
            researcher. engineer. leader.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="ml-6 mt-6 text-base leading-relaxed text-muted max-w-lg">
            Full-stack developer, AI/ML engineer, and researcher based in Maine.
          </p>
          <p className="ml-6 text-base leading-relaxed text-muted max-w-lg">
            In pursuit of greatness.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="ml-6 mt-8 flex gap-5 font-mono text-sm">
            <a
              href="https://github.com/CDurepos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              github
            </a>
            <span className="text-border">/</span>
            <a
              href="https://linkedin.com/in/cdurepos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              linkedin
            </a>
            <span className="text-border">/</span>
            <a
              href="mailto:clayton.durepos@maine.edu"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              email
            </a>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={600}>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <svg
            className="w-5 h-5 text-muted/50 animate-bounce"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 14l-7 7m0 0l-7-7"
            />
          </svg>
        </div>
      </FadeIn>
    </section>
  );
}
