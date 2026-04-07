export function Hero() {
  return (
    <section
      id="about"
      className="section-shell pb-16 pt-[calc(var(--header-height)+1.5rem)] lg:pb-18"
    >
      <div className="section-inner">
        <div className="noise bg-forest section-panel">
          <div className="max-w-3xl">
            <p className="section-kicker section-kicker-light reveal-rise delay-1">
              Développeur full stack / Orléans, France
            </p>

            <h1 className="mt-6 max-w-[11ch] font-serif text-[clamp(3.6rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.05em] text-text-primary reveal-rise delay-2">
              Amin EL MELLOUKI
            </h1>

            <p className="mt-6 max-w-(--reading-max) font-sans text-base leading-8 text-text-primary/78 reveal-rise delay-3">
              Je développe des applications web et mobile, avec une attention
              particulière à la clarté, à la fiabilité et à la mise en ligne.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 reveal-rise delay-4">
              <a
                href="mailto:amin.elmellouki1@gmail.com"
                className="press-button"
              >
                Me contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
