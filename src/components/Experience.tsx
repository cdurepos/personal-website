import FadeIn from "./FadeIn";

const roles = [
  {
    title: "AI/ML Engineering Intern",
    company: "Deca Defense",
    location: "Melbourne, FL",
    period: "Jan 2026 — Present",
    points: [
      "Developing autonomy and perception pipelines for drone systems, focusing on natural language commands and vision-language navigation.",
    ],
  },
  {
    title: "Lead Researcher & Full-Stack Developer",
    company: "USM Artificial Intelligence I & Information Retrieval Laboratory",
    location: "Portland, ME",
    period: "Feb 2025 — Present",
    points: [
      "Coordinating 3 concurrent research projects and mentoring 7 junior researchers.",
      "Leading development of MathMex, an NSF-funded mathematical search engine with a React/TypeScript frontend and vector-based semantic search backend.",
      "Conducted research on multimodal sentiment analysis in fine art, developing transformer-based image, text, and fusion models.",
    ],
  },
  {
    title: "Software Development Intern",
    company: "ScanPower",
    location: "Falmouth, ME",
    period: "Sep 2025 — Present",
    points: [
      "Designed and shipped a new customer-facing application to production.",
      "Integrated RESTful APIs and internal services using Node.js and React for Amazon FBA operations.",
    ],
  },
];

const education = {
  degree: "Computer Science, B.S.",
  school: "University of Southern Maine",
  location: "Portland, ME",
  period: "Sep 2023 — May 2027",
  distinctions: ["Mitchell Scholar", "President's Scholar", "Former President, Computer Science Society"],
};

export default function Experience() {
  return (
    <section id="work" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <span className="font-mono text-sm text-accent tracking-wide">
          {"// experience"}
        </span>
      </FadeIn>

      <div className="mt-10 space-y-12">
        {roles.map((role, i) => (
          <FadeIn key={role.company} delay={100 + i * 100}>
            <div className="border-l-2 border-accent/30 pl-6">
              <h3 className="text-lg font-medium">{role.title}</h3>
              <p className="mt-1 font-mono text-sm text-accent">
                {role.company}
              </p>
              <p className="mt-0.5 font-mono text-xs text-muted">
                {role.location} &middot; {role.period}
              </p>
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
            </div>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={100 + roles.length * 100}>
        <div className="mt-16">
          <span className="font-mono text-sm text-accent tracking-wide">
            {"// education"}
          </span>
          <div className="mt-6 border-l-2 border-accent/30 pl-6">
            <h3 className="text-lg font-medium">{education.degree}</h3>
            <p className="mt-1 font-mono text-sm text-accent">
              {education.school}
            </p>
            <p className="mt-0.5 font-mono text-xs text-muted">
              {education.location} &middot; {education.period}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
              {education.distinctions.map((d) => (
                <span key={d} className="text-sm text-muted">
                  {d}
                </span>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
