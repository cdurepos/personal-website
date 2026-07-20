import type { ReactNode } from "react";
import FadeIn from "./FadeIn";
import SectionLabel from "./SectionLabel";

type Variant = "rail" | "rail-right" | "stacked" | "plain";

export default function Section({
  id,
  label,
  children,
  backdrop,
  variant = "rail",
}: {
  id: string;
  label?: string;
  children: ReactNode;
  backdrop?: ReactNode;
  variant?: Variant;
}) {
  const shell = `section-block px-6 max-w-4xl mx-auto ${backdrop ? "relative" : ""}`;

  if (variant === "plain") {
    return (
      <section id={id} className={shell}>
        {backdrop}
        <div className="relative z-10">{children}</div>
      </section>
    );
  }

  if (variant === "stacked") {
    return (
      <section id={id} className={shell}>
        {backdrop}
        <div className="relative z-10">
          {label && (
            <FadeIn>
              <SectionLabel variant="stacked">{label}</SectionLabel>
            </FadeIn>
          )}
          <div className="mt-10">{children}</div>
        </div>
      </section>
    );
  }

  if (variant === "rail-right") {
    return (
      <section id={id} className={shell}>
        {backdrop}
        <div className="relative z-10 grid gap-6 lg:gap-14 lg:grid-cols-[1fr_130px]">
          <div className="section-aside lg:order-2">
            {label && (
              <FadeIn>
                <SectionLabel variant="rail-right">{label}</SectionLabel>
              </FadeIn>
            )}
          </div>
          <div className="min-w-0 lg:order-1">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section id={id} className={shell}>
      {backdrop}
      <div className="relative z-10 grid gap-6 lg:gap-14 lg:grid-cols-[130px_1fr]">
        <div className="section-aside">
          {label && (
            <FadeIn>
              <SectionLabel>{label}</SectionLabel>
            </FadeIn>
          )}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
