import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = links.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/40">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-display text-xl font-semibold tracking-tight text-foreground hover:text-accent transition-colors"
        >
          魁
        </a>
        <div className="flex gap-5 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-active={active === link.href}
              className="nav-link font-mono text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
