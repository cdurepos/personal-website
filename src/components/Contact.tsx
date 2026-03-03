import FadeIn from "./FadeIn";

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
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <span className="font-mono text-sm text-accent tracking-wide">
          {"// contact"}
        </span>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="mt-8 text-base leading-relaxed max-w-md">
          Always open to interesting conversations, collaborations, or just
          saying hey.
        </p>
      </FadeIn>

      <FadeIn delay={200}>
        <div className="mt-8 space-y-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="block font-mono text-sm text-muted hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={300}>
        <div className="mt-24 pt-8 border-t border-border">
          <p className="font-mono text-xs text-muted/60">
            &copy; {new Date().getFullYear()} Clayton Durepos
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
