import FadeIn from "./FadeIn";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <span className="font-mono text-sm text-accent tracking-wide">
          {"// about"}
        </span>
      </FadeIn>

      <div className="mt-8 space-y-5 text-base leading-relaxed">
        <FadeIn delay={100}>
          <p>
          I’m Clayton, a Computer Science undergrad and researcher at the University of Southern Maine.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted">
            I'm open to building whatever my path puts in front of me, 
            even if it's something I've never touched before.
            I’m not trying to brand myself into one lane. 
            I'm drawn to the work that raises the bar. Problems that force me to learn fast, 
            build clean, and deliver something real.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-muted">
            What matters most to me is momentum. Getting better, taking on harder challenges, and learning more. 
            I like work where there’s room to explore, but also standards to uphold. 
            Make it work, make it clean, make it solid.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-muted">
          If you’re building something ambitious and you want someone who adapts quickly and executes, 
          I’m down to talk.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
