import FadeIn from "./FadeIn";

const papers = [
  {
    title:
      "Multimodal Emotion Classification in Artwork: A Comparative Study Across Modalities",
    authors: "Durepos, C., et al.",
    venue: "Proceedings of the ACM/IEEE Joint Conference on Digital Libraries",
    year: "2025",
    doiLookup:
      "https://doi.org/10.1109/JCDL67857.2025.00055",
  },
  {
    title: "MathMex-V2: A Large Language Model Enabled Math Search Engine",
    authors: "Durepos, C., et al.",
    venue: "Proceedings of the ACM/IEEE Joint Conference on Digital Libraries",
    year: "2025",
    doiLookup:
      "https://doi.org/10.1109/JCDL67857.2025.00063",
  },
  {
    title:
      "From Speech to LaTeX: Large Language Models for Mathematical Accessibility in Digital Libraries",
    authors: "Pitcairn, A., Durepos, C., Mansouri, B.",
    venue: "Proceedings of the ACM/IEEE Joint Conference on Digital Libraries",
    year: "2025",
    doiLookup:
      "https://doi.org/10.1109/JCDL67857.2025.00058",
  },
];

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <span className="font-mono text-sm text-accent tracking-wide">
          {"// publications"}
        </span>
      </FadeIn>

      <div className="mt-10 space-y-8">
        {papers.map((paper, i) => (
          <FadeIn key={paper.title} delay={100 + i * 100}>
            <div>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-base font-medium leading-snug">
                  {paper.title}
                </h3>
                <a
                  href={paper.doiLookup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-chip link-chip-accent shrink-0"
                >
                  doi
                </a>
              </div>
              <p className="mt-2 font-mono text-xs text-muted">
                {paper.authors}
              </p>
              <p className="mt-1 text-sm text-muted italic">
                {paper.venue}, {paper.year}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
