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
    period: "Sep 2026 — Present",
    points: [],
  },
  {
    title: "AI/ML Engineer Intern",
    company: "Deca Defense",
    location: "Melbourne, FL",
    period: "Jan 2026 — Jun 2026",
    points: [
      "Built an LLM pipeline and synthetic-data generator translating natural-language instructions into MAVSDK JSON flight commands.",
      "Improved command accuracy by ~12% by replacing unreliable LLM vector math with deterministic vector decomposition.",
      "Designed custom token-prediction syntax to reduce input token count; extended autonomous generation to support multi-agent swarm behavior.",
    ],
  },
  {
    title: "Lead Researcher",
    company: "USM Artificial Intelligence & Information Retrieval Laboratory",
    location: "Portland, ME",
    period: "Feb 2025 — Apr 2026",
    points: [
      "Coordinated development of the NSF-supported MathMex-PDF retrieval system, published as a demo at ACM SIGIR 2026.",
      "Engineered a Dockerized semantic search product with drag-and-drop document indexing, administrator console, and RAG-powered chatbot.",
      "Built and managed lab infrastructure, including application deployments, DNS, Nginx routing, and a centralized API.",
      "Served as primary developer for NSF-supported MathMex across TypeScript/React, Python, and OpenSearch; published at ACM/IEEE JCDL 2025.",
      "Designed a ViT/BERT multimodal fusion model, improving macro F1 by 8.9% over the best unimodal baseline; published at ACM/IEEE JCDL 2025.",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "ScanPower",
    location: "Falmouth, ME",
    period: "Sep 2025 — Jan 2026",
    points: [
      "Designed and deployed a customer-facing React/Node.js application with REST APIs to streamline Amazon FBA operations.",
      "Communicated directly with beta users to gather product feedback and iterate on the hosted application.",
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
    degree: "Japanese Language & Culture, Exchange",
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
      "CS Undergraduate Research Award Recipient",
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
