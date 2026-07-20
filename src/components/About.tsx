import { useState } from "react";
import FadeIn from "./FadeIn";
import Section from "./Section";
import AboutGraphic from "./AboutGraphic";

export default function About() {
  const [replay, setReplay] = useState(0);

  return (
    <Section
      id="about"
      backdrop={
        <div className="domain-wrap" aria-hidden="true">
          <AboutGraphic key={replay} />
        </div>
      }
    >
      <div className="space-y-7 text-base leading-relaxed">
        <FadeIn delay={100}>
          <p className="text-xl sm:text-2xl font-display tracking-tight leading-snug text-foreground">
            I&rsquo;m Clayton, a Computer Science undergrad and researcher at the
            University of Southern Maine.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted">
            I&rsquo;m always open to anything comes my way. Sometimes it's difficult, 
            especially when presented with something new. That said, I&rsquo;m not looking to 
            keep myself confined to one domain, as I build my career. I&rsquo;m versatile.
            I enjoy work that challenges me. Things that ask me to learn faster, think harder.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-muted">
            If you&rsquo;re looking for someone who adapts quickly and moves with confidence,
            I&rsquo;m always happy to connect.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
