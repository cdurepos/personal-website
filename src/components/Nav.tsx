"use client";

const links = [
  { href: "#about", label: "about" },
  { href: "#work", label: "work" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80">
      <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="#"
          className="font-mono text-base text-foreground hover:text-accent transition-colors"
        >
          cd
        </a>
        <div className="flex gap-5 sm:gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs sm:text-sm text-muted hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
