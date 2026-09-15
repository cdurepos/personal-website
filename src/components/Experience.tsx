import FadeIn from "./FadeIn";
import Section from "./Section";

type Role = {
  title: string;
  company: string;
  location?: string;
  period: string;
  points: string[];
};

const roles: Role[] = [
  {
    title: "Software Engineer Intern",
    company: "VividCloud",
    location: "Brunswick, ME",
    period: "Sep 2026 — May 2027",
    points: [],
  },
  {
    title: "AI/ML Engineer Intern",
    company: "Deca Defense",
    location: "Melbourne, FL",
    period: "Jan 2026 — Jun 2026",
    points: [
      "Built an LLM tool translating natural-language instructions into MAVSDK JSON flight commands, with a reusable command repository and deterministic vector math.",
      "Optimized LLM inference with custom token-prediction syntax; extended autonomous drone capabilities to support multi-agent swarms.",
    ],
  },
  {
    title: "Lead Researcher · Full-Stack Developer · AI/ML Researcher",
    company: "USM Artificial Intelligence & Information Retrieval Laboratory",
    location: "Portland, ME",
    period: "Feb 2025 — Apr 2026",
    points: [
      "Coordinated MathMex-PDF research and development, leading the NSF-supported multimodal retrieval project to ACM SIGIR 2026 publication.",
      "Mentored junior researchers and maintained shared Linux servers, APIs, GitHub repositories, and research applications.",
      "Built a Dockerized RAG document-search platform with automated ingestion, vector indexing, retrieval, and multi-engine administration.",
      "Served as primary MathMex developer across React, TypeScript, transformer embeddings, and OpenSearch vector search, published at JCDL 2025.",
      "Deployed MathMex on Linux; designed API and domain architecture and configured DNS, Nginx reverse proxies, port routing, and systemd.",
      "Engineered multimodal fusion models for fine-art emotion classification, published at JCDL 2025.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "ScanPower",
    location: "Falmouth, ME",
    period: "Sep 2025 — Jan 2026",
    points: [
      "Designed and deployed a customer-facing application, integrating Node.js and React RESTful APIs to streamline Amazon FBA operations based on direct beta user feedback.",
    ],
  },
];

type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  distinctions?: string[];
  roles?: string;
};

const education: Education[] = [
  {
    degree: "Japanese Language, Exchange",
    school: "Kanda University of International Studies",
    location: "Chiba, Japan",
    period: "Mar 2026 — Jul 2026",
    roles: "English Language Practice Partner",
  },
  {
    degree: "Computer Science & Philosophy, B.S.",
    school: "University of Southern Maine",
    location: "Portland, ME",
    period: "Sep 2023 — May 2027",
    distinctions: [
      "George J. Mitchell Scholar",
      "UROP Fellow",
      "Dara J. Kaufman Scholar",
      "CS Undergraduate Research Award",
    ],
    roles:
      "Former President, Computer Science Society · Subject-Based Tutor · Technology Coach",
  },
];

export default function Experience() {
  return (
    <Section id="work" variant="plain">
      <div className="work-rail">
      <div className="space-y-12">
        {roles.map((role, i) => (
          <FadeIn key={role.company + role.title} delay={100 + i * 80}>
            <div className="timeline-item border-l-2 border-accent/30 pl-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="text-lg font-medium tracking-tight">
                  {role.title}
                </h3>
                <p className="font-mono text-xs text-muted whitespace-nowrap">
                  {role.period}
                </p>
              </div>
              <p className="mt-1 font-mono text-sm text-accent">
                {role.company}
                {role.location && (
                  <span className="text-muted"> &middot; {role.location}</span>
                )}
              </p>
              {role.points.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {role.points.map((point, j) => (
                    <li
                      key={j}
                      className="text-sm text-muted leading-relaxed pl-4 relative before:content-['—'] before:absolute before:left-0 before:text-border"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={100 + roles.length * 80}>
        <div className="mt-14 pt-10 border-t border-border/70">
          <span className="font-mono text-xs tracking-[0.14em] uppercase text-accent/80">
            education
          </span>
          <div className="mt-6 space-y-10">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="timeline-item border-l-2 border-accent/30 pl-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-medium tracking-tight">
                    {edu.degree}
                  </h3>
                  <p className="font-mono text-xs text-muted whitespace-nowrap">
                    {edu.period}
                  </p>
                </div>
                <p className="mt-1 font-mono text-sm text-accent">
                  {edu.school}
                  <span className="text-muted"> &middot; {edu.location}</span>
                </p>
                {edu.distinctions && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {edu.distinctions.map((d) => (
                      <span key={d} className="tech-tag">
                        {d}
                      </span>
                    ))}
                  </div>
                )}
                {edu.roles && (
                  <p className="mt-3 font-mono text-xs text-muted">{edu.roles}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </div>
    </Section>
  );
}
