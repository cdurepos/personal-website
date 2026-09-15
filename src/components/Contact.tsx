import FadeIn from "./FadeIn";
import Section from "./Section";

const links = [
  {
    label: "clayton.durepos@maine.edu",
    href: "mailto:clayton.durepos@maine.edu",
  },
  {
    label: "github.com/cdurepos",
    href: "https://github.com/cdurepos",
  },
  {
    label: "linkedin.com/in/cdurepos",
    href: "https://linkedin.com/in/cdurepos",
  },
  {
    label: "scholar.google.com",
    href: "https://scholar.google.com/citations?user=tApykZYAAAAJ&hl=en",
  },
];

export default function Contact() {
  return (
    <Section id="contact" variant="plain">
      <FadeIn>
        <p className="text-xl sm:text-2xl font-display tracking-tight leading-snug max-w-md">
          Always open to connecting...<br></br>or just chatting.
        </p>
      </FadeIn>

      <FadeIn delay={150}>
        <div className="mt-8 flex flex-col items-start gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-link font-mono text-sm"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={250}>
        <div className="mt-24 pt-8 border-t border-border flex items-center justify-between font-mono text-xs text-muted/60">
          <span>&copy; {new Date().getFullYear()} Clayton Durepos</span>
          <span>Portland, ME</span>
        </div>
      </FadeIn>
    </Section>
  );
}
