import FadeIn from "./FadeIn";

const projects = [
  {
    name: "MathMex",
    description:
      "An NSF-funded mathematical search engine. Built with a React/TypeScript UI and a vector-based semantic search backend using transformer embeddings and OpenSearch.",
    tech: ["React", "TypeScript", "Python", "OpenSearch"],
    link: "https://www.mathmex.com",
    github: "https://github.com/usm-aiir/mathmex",
  },
  {
    name: "Neutral Net",
    description:
      "A bias-aware news search engine featuring an NLP pipeline to quantify and visualize media bias across relevant articles.",
    tech: ["TypeScript", "React", "Flask", "NLP"],
    link: "https://www.neutralnet.app",
    github:
      "https://github.com/cdurepos/neutral-net",
  },
  {
    name: "ScholarSphere",
    description:
      "A research collaboration platform with a RESTful API, MySQL database, and secure token-based authentication.",
    tech: ["REST API", "MySQL", "Auth"],
    link: null,
    github:
      "https://github.com/cdurepos/scholarsphere",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <span className="font-mono text-sm text-accent tracking-wide">
          {"// projects"}
        </span>
      </FadeIn>

      <div className="mt-10 space-y-8">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={100 + i * 100}>
            <div className="group border border-border rounded-lg p-6 hover:border-accent/40 transition-colors">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium">{project.name}</h3>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-chip"
                    >
                    github
                  </a>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-chip link-chip-accent"
                    >
                      visit
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-3 text-sm text-muted leading-relaxed">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted bg-accent-dim/50 px-2 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
