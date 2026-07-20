export default function SectionLabel({
  children,
  variant = "rail",
}: {
  children: string;
  variant?: "rail" | "rail-right" | "stacked";
}) {
  return (
    <div className={`section-label section-label-${variant}`}>
      <span className="name">{children}</span>
      <span className="rule" aria-hidden="true" />
    </div>
  );
}
