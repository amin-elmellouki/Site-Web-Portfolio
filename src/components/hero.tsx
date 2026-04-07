export function Hero() {
  return (
    <section
      id="intro"
      className="section-shell pb-16 pt-[calc(var(--header-height)+1.5rem)] lg:pb-18"
    >
      <div className="section-inner">
        <div className="noise bg-forest section-panel">
          <div className="max-w-3xl">
            <p className="section-kicker section-kicker-light reveal-rise delay-1">
              Développeur full stack freelance / Orléans, France
            </p>

            <h1 className="mt-6 max-w-[11ch] font-display text-[clamp(3.6rem,8vw,7.2rem)] leading-[0.9] tracking-[-0.05em] text-text-primary reveal-rise delay-2">
              Amin EL MELLOUKI
            </h1>

            <p className="mt-6 max-w-(--reading-max) font-sans text-base leading-8 text-text-primary/78 reveal-rise delay-3">
              J&apos;accompagne les équipes, clubs et structures qui veulent
              concevoir ou faire évoluer un produit web ou mobile clair,
              fiable et prêt à être mis en ligne.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 reveal-rise delay-4">
              <a
                href="mailto:amin.elmellouki1@gmail.com"
                className="press-button"
              >
                <span className="press-button__label">Me contacter</span>
                <span className="press-button__icon" aria-hidden="true">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="press-button__icon-svg"
                  >
                    <path
                      d="M17 7L7 17"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 7H17V16"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
