export function Hero() {
  return (
    <section
      id="intro"
      className="section-shell pb-14 pt-[calc(var(--header-height)+1rem)] sm:pb-16 lg:pb-18"
    >
      <div className="section-inner">
        <div className="noise bg-forest section-panel">
          <div className="max-w-3xl">
            <p className="section-kicker section-kicker-light reveal-rise delay-1">
              Développeur full stack freelance / Orléans, France
            </p>

            <h1 className="mt-5 max-w-[12ch] font-display text-[3.05rem] leading-[0.92] text-text-primary reveal-rise delay-2 sm:mt-6 sm:text-[4.4rem] md:text-[5.4rem] lg:text-[6.4rem] xl:text-[7rem]">
              Amin EL MELLOUKI
            </h1>

            <p className="mt-5 max-w-(--reading-max) font-sans text-[0.98rem] leading-7 text-text-primary/78 reveal-rise delay-3 sm:mt-6 sm:text-base sm:leading-8">
              J&apos;accompagne les structures qui veulent
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
