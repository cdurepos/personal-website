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
            I&rsquo;m Clayton, a Computer Science undergrad and
            researcher at the University of Southern Maine.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-muted">
            Honestly, I'd like to write the perfect little paragraph here, but I don't quite know what that is, as I'm not sure who will be reading this. 
            I think that itself represents my character well.
          </p>
          <br></br>
          <p className="text-muted">
            Not only as a student, as a researcher, an engineer, but as a person, I often pursue perfection and certainty.
            Though, when I can't find it, I'm not afraid of moving forward into the unkown, the messy.
          </p>
          <br></br>
          <p className="text-muted">
            In doing so, I've found myself in situations that I'm still not quite sure how I got into.
            Each and every experience you might see below has demanded that I use tools I've never even heard of before,
            to solve new problems, in unfamiliar environments. 
          </p>
          <br></br>
          <p className="text-muted">
            That alone has taught me to be adaptive, to be a quick learner. 
            Though, more importantly, that you don't have to <i>know</i> to start, to take a leap.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <p className="text-muted">
            If you're looking for someone who adapts, better yet, learns, quickly, and is comfortable figuring it out along the way, 
            I'm always happy to connect.
          </p>
        </FadeIn>
      </div>
    </Section>
  );
}
