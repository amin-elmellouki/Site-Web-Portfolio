type MonolithProps = {
  label: string;
  title: string;
  description: string;
  note?: string;
  tone?: "forest" | "wine";
};

export function Monolith({
  label,
  title,
  description,
  note = "Approche",
  tone = "forest",
}: MonolithProps) {
  const sectionTone = tone === "forest" ? "bg-forest" : "bg-wine";
  const labelTone =
    tone === "forest"
      ? "section-kicker section-kicker-light"
      : "section-kicker section-kicker-wine";

  return (
    <section className={`noise section-shell ${sectionTone}`}>
      <div className="section-inner">
        <div className="section-header">
          <div className="max-w-3xl">
            <p className={labelTone}>{label}</p>
            <p className="mt-5 font-serif text-[clamp(2.4rem,5.4vw,4.5rem)] leading-[0.98] tracking-[-0.04em] text-text-primary">
              {title}
            </p>
          </div>

          <div className="section-header-copy lg:pb-1">
            <p className="font-sans text-[0.625rem] font-semibold uppercase tracking-[0.28em] text-text-primary/45">
              {note}
            </p>
            <p className="mt-4 font-sans text-sm leading-7 text-text-primary/72">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
