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
            I’m open to building whatever comes my way. 
            Even if that means getting my hands dirty with something I’ve never even heard of.
            I’m not trying to keep myself confined to one domain; I’m versatile.
            I’m drawn to work that challenges me. 
            Problems that ask me to learn faster, think harder.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-muted">
            Momentum, that’s what matters to me most. 
            Taking on harder challenges, learning more, expanding my skillset and experience.
            I like room where there’s room to grow & explore, but also an image to uphold, standards to follow.
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <p className="text-muted">
            If you’re building something ambitious and you’re looking for someone who adapts quickly and moves with confidence, I’m more than happy to connect.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
