import { useEffect, useRef, useState } from "react";

// Lemniscate (∞) path
const INFINITY =
  "M64,200 C64,150 112,150 200,200 C288,250 336,250 336,200 C336,150 288,150 200,200 C112,250 64,250 64,200 Z";

export default function AboutGraphic() {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduced(true);
      setOpen(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`domain ${open ? "is-open" : ""}`} aria-hidden="true">
      <div className="domain-void" />
      <span className="domain-ring" />
      <span className="domain-ring" />
      <span className="domain-ring" />

      <svg className="domain-infinity" viewBox="0 0 400 400" fill="none">
        <path className="inf-glow" d={INFINITY} />
        <path id="inf-path" className="inf-stroke" d={INFINITY} pathLength={1} />

        {!reduced && (
          <>
            <circle className="inf-spark" r={3.2}>
              <animateMotion dur="7s" repeatCount="indefinite" rotate="auto">
                <mpath href="#inf-path" />
              </animateMotion>
            </circle>
            <circle className="inf-spark inf-spark-dim" r={2}>
              <animateMotion
                dur="7s"
                begin="-3.5s"
                repeatCount="indefinite"
                rotate="auto"
              >
                <mpath href="#inf-path" />
              </animateMotion>
            </circle>
          </>
        )}
      </svg>
    </div>
  );
}
