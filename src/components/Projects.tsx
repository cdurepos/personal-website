import { useState } from "react";
import FadeIn from "./FadeIn";
import Section from "./Section";

type Project = {
  name: string;
  description: string;
  tech: string[];
  link: string | null;
  github: string | null;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    name: "MathMex",
    description:
      "An NSF-funded mathematical search engine. Built with a React/TypeScript UI and a vector-based semantic search backend using transformer embeddings and OpenSearch.",
    tech: ["React", "TypeScript", "Python", "OpenSearch"],
    link: "https://www.mathmex.com",
    github: "https://github.com/usm-aiir/mathmex",
    image: "/projects/mathmex.png",
    featured: true,
  },
  {
    name: "Neutral Net",
    description:
      "A bias-aware news search engine featuring an NLP pipeline to quantify and visualize media bias across relevant articles.",
    tech: ["TypeScript", "React", "Flask", "NLP"],
    link: "https://www.neutralnet.app",
    github: "https://github.com/cdurepos/neutral-net",
    image: "/projects/neutral-net.png",
  },
  {
    name: "ScholarSphere",
    description:
      "A research collaboration platform with a RESTful API, MySQL database, and secure token-based authentication.",
    tech: ["REST API", "MySQL", "Auth"],
    link: null,
    github: "https://github.com/cdurepos/scholarsphere",
    image: "/projects/scholarsphere.png",
  },
  {
    name: "優しさと運",
    description:
      "My first game - a small RPG designed and built solo in two weeks for a Japanese language course.",
    tech: ["Unity", "C#"],
    link: "https://play.unity.com/en/games/c271d931-8af3-4654-9bd6-88d8615bd109/v111",
    github: null,
    image: "/projects/unity-game.png",
    featured: true,
  },
];

function ProjectTile({ project, delay }: { project: Project; delay: number }) {
  const [imgOk, setImgOk] = useState(Boolean(project.image));
  const primary = project.link ?? project.github ?? "#";
  const primaryLabel = project.link ? "visit" : "view code";

  return (
    <FadeIn
      delay={delay}
      className={project.featured ? "sm:col-span-2" : undefined}
    >
      <div className={`project-tile group ${project.featured ? "project-tile-featured" : ""}`}>
        <a
          className="tile-cover"
          href={primary}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${primaryLabel} ${project.name}`}
        />

        <div className="project-thumb">
          {imgOk ? (
            <img
              src={project.image}
              alt={`${project.name} preview`}
              loading="lazy"
              onError={() => setImgOk(false)}
            />
          ) : (
            <span className="project-thumb-mark">{project.name}</span>
          )}
          <span className="project-thumb-overlay">{primaryLabel} &#8599;</span>
        </div>

        <div className="project-tile-body">
          <h3 className="project-tile-title">{project.name}</h3>
          <p className="project-tile-desc">{project.description}</p>
          <div className="project-tile-foot">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span key={t} className="tech-tag">
                  {t}
                </span>
              ))}
            </div>
            {project.link && project.github && (
              <a
                className="link-chip project-tile-code"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export default function Projects() {
  return (
    <Section id="projects" variant="plain">
      <FadeIn>
        <span className="section-kicker">projects</span>
      </FadeIn>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectTile key={project.name} project={project} delay={100 + i * 80} />
        ))}
      </div>
    </Section>
  );
}
