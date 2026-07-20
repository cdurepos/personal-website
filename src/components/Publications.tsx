import { Fragment } from "react";
import FadeIn from "./FadeIn";
import Section from "./Section";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  doiLookup?: string;
};

const papers: Paper[] = [
  {
    title: "MathMex-PDF: Towards Accessible Visual Mathematics",
    authors: "Serrano, N., Matheson, L., Durepos, C., Mansouri, B.",
    venue: "Proceedings of the 49th International ACM SIGIR Conference",
    year: "2026",
  },
  {
    title: "MathMex-V2: A Large Language Model Enabled Math Search Engine",
    authors: "Durepos, C., et al.",
    venue: "Proceedings of the ACM/IEEE Joint Conference on Digital Libraries",
    year: "2025",
    doiLookup: "https://doi.org/10.1109/JCDL67857.2025.00063",
  },
  {
    title:
      "Multimodal Emotion Classification in Artwork: A Comparative Study Across Modalities",
    authors: "Durepos, C., Pitcairn, A., Mansouri, B.",
    venue: "Proceedings of the ACM/IEEE Joint Conference on Digital Libraries",
    year: "2025",
    doiLookup: "https://doi.org/10.1109/JCDL67857.2025.00055",
  },
  {
    title:
      "From Speech to LaTeX: Large Language Models for Mathematical Accessibility in Digital Libraries",
    authors: "Pitcairn, A., Durepos, C., Largey, N., Mansouri, B.",
    venue: "Proceedings of the ACM/IEEE Joint Conference on Digital Libraries",
    year: "2025",
    doiLookup: "https://doi.org/10.1109/JCDL67857.2025.00058",
  },
];

const ME = "Durepos, C.";

function highlightAuthors(authors: string) {
  return authors.split(ME).map((part, i, arr) => (
    <Fragment key={i}>
      {part}
      {i < arr.length - 1 && <span className="pub-me">{ME}</span>}
    </Fragment>
  ));
}

export default function Publications() {
  return (
    <Section id="publications" variant="plain">
      <FadeIn>
        <span className="section-kicker">publications</span>
      </FadeIn>

      <div className="pub-list">
        {papers.map((paper, i) => (
          <FadeIn key={paper.title} delay={80 + i * 80}>
            <article className="pub-row">
              <div className="min-w-0">
                <h3 className="pub-title">{paper.title}</h3>
                <p className="pub-authors">{highlightAuthors(paper.authors)}</p>
                <p className="pub-venue">
                  {paper.venue}, {paper.year}
                </p>
              </div>
              {paper.doiLookup && (
                <a
                  href={paper.doiLookup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-chip link-chip-accent shrink-0"
                >
                  doi
                </a>
              )}
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
