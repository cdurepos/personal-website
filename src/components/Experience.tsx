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
    title: "Software Engineering Intern",
    company: "VividCloud",
    period: "Incoming · 2026",
    points: [],
  },
  {
    title: "AI/ML Engineering Intern",
    company: "Deca Defense",
    location: "Melbourne, FL",
    period: "Jan 2026 — Jun 2026",
    points: [
      "Built autonomy tooling for simulated drone systems — from instant dataset generation with analytics to automated training and evaluation loops.",
      "Developed an LLM tool translating natural-language commands into structured MAVSDK API calls, and scaled it to multi-agent swarm formations.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "ScanPower",
    location: "Falmouth, ME",
    period: "Sep 2025 — Mar 2026",
    points: [
      "Designed and shipped a customer-facing application, iterating directly with beta customers.",
      "Integrated RESTful APIs and internal services using Node.js and React for Amazon FBA operations.",
    ],
  },
  {
    title: "Lead Researcher & Full-Stack Developer",
    company: "USM Artificial Intelligence & Information Retrieval Laboratory",
    location: "Portland, ME",
    period: "Feb 2025 — Mar 2026",
    points: [
      "Coordinated research projects and mentored junior researchers, overseeing direction and publication timelines.",
      "Built MathMex — an NSF-funded semantic math search engine with a React/TypeScript UI and an OpenSearch vector backend with selective RAG.",
      "Researched multimodal sentiment analysis in fine art, building transformer-based fusion models over ViT and BERT embeddings.",
    ],
  },
  {
    title: "Subject-Based Tutor",
    company: "University of Southern Maine",
    location: "Portland, ME",
    period: "Sep 2024 — Mar 2026",
    points: [
      "Tutored undergraduates in introductory physics, mathematics, and computer science.",
    ],
  },
];

type Education = {
  degree: string;
  school: string;
  location: string;
  period: string;
  distinctions?: string[];
};

const education: Education[] = [
  {
    degree: "Japanese Language & Culture",
    school: "Kanda University of International Studies",
    location: "Chiba, Japan",
    period: "Mar 2026 — Jul 2026",
  },
  {
    degree: "Computer Science, B.S.",
    school: "University of Southern Maine",
    location: "Portland, ME",
    period: "Aug 2023 — May 2027",
    distinctions: ["Mitchell Scholar", "Reynolds-Kerr Pioneer Scholar"],
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
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      </div>
    </Section>
  );
}
